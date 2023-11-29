import { useState, useCallback } from 'react'
import usePrevious from './usePrevious'

export interface UseDisclosureProps {
  defaultIsOpen?: boolean
  onClose?(): void
  onOpen?(): void
}

export default function useDisclosure(props: UseDisclosureProps = {}) {
  const { onClose: onCloseProp, onOpen: onOpenProp } = props

  const [isOpen, setIsOpen] = useState(props.defaultIsOpen || false)

  const prevIsOpen = usePrevious(isOpen)

  const onClose = useCallback(() => {
    setIsOpen(false)
    if (onCloseProp) {
      onCloseProp()
    }
  }, [onCloseProp])

  const onOpen = useCallback(() => {
    setIsOpen(true)
    if (onOpenProp) {
      onOpenProp()
    }
  }, [onOpenProp])

  const onToggle = useCallback(() => {
    const action = isOpen ? onClose : onOpen
    action()
  }, [isOpen, onOpen, onClose])

  return {
    isOpen: !!isOpen,
    prevIsOpen: !!prevIsOpen,
    onOpenChange: setIsOpen,
    onOpen,
    onClose,
    onToggle,
  }
}

export type UseDisclosureReturn = ReturnType<typeof useDisclosure>
