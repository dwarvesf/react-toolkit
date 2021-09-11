import { Button, ButtonProps, useClipboard } from '@chakra-ui/react'
import React from 'react'

interface CopyButtonProps extends ButtonProps {
  code: string
}

function CopyButton({ code, ...props }: CopyButtonProps) {
  const { hasCopied, onCopy } = useClipboard(code)

  return (
    <Button
      size="sm"
      position="absolute"
      textTransform="uppercase"
      fontSize="xs"
      height="24px"
      top={0}
      zIndex="1"
      right="1.25em"
      _active={{ backgroundColor: 'brand.500' }}
      _hover={{ backgroundColor: 'brand.500' }}
      _focus={{
        boxShadow: 'none',
      }}
      backgroundColor="brand.500"
      {...props}
      onClick={onCopy}
    >
      {hasCopied ? 'copied' : 'copy'}
    </Button>
  )
}

export default CopyButton
