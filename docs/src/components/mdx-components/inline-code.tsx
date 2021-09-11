import { chakra, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export const InlineCode = (props: any) => (
  <chakra.code apply="mdx.code" color="brand.500" {...props} />
)
