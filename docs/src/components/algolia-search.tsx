import { SearchIcon } from '@chakra-ui/icons'
import {
  chakra,
  HStack,
  HTMLChakraProps,
  Kbd,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import * as React from 'react'

const ACTION_KEY_DEFAULT = ['Ctrl', 'Control']
const ACTION_KEY_APPLE = ['⌘', 'Command']

export const SearchButton = React.forwardRef(function SearchButton(
  props: HTMLChakraProps<'button'>,
  ref: React.Ref<HTMLButtonElement>,
) {
  const [actionKey, setActionKey] = React.useState<string[]>(ACTION_KEY_APPLE)
  React.useEffect(() => {
    if (typeof navigator === 'undefined') return
    const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
    if (!isMac) {
      setActionKey(ACTION_KEY_DEFAULT)
    }
  }, [])

  return (
    <chakra.button
      flex="1"
      type="button"
      role="search"
      mx="6"
      ref={ref}
      lineHeight="1.2"
      w="100%"
      bg={useColorModeValue('white', 'gray.700')}
      whiteSpace="nowrap"
      display={{ base: 'none', sm: 'flex' }}
      alignItems="center"
      color="gray.400"
      py="3"
      px="4"
      outline="0"
      _focus={{ shadow: 'outline' }}
      shadow="base"
      maxW="768px"
      rounded="md"
      aria-label="Search the docs"
      {...props}
    >
      <SearchIcon />
      <HStack w="full" ml="3" spacing="4px">
        <Text textAlign="left" flex="1">
          Search the docs
        </Text>
        <HStack spacing="4px">
          <VisuallyHidden>Press </VisuallyHidden>
          <Kbd color="gray.500" rounded="2px">
            <chakra.div
              as="abbr"
              title={actionKey[1]}
              textDecoration="none !important"
            >
              {actionKey[0]}
            </chakra.div>
          </Kbd>
          <VisuallyHidden> and </VisuallyHidden>
          <Kbd color="gray.500" rounded="2px">
            K
          </Kbd>
          <VisuallyHidden> to search</VisuallyHidden>
        </HStack>
      </HStack>
    </chakra.button>
  )
})
