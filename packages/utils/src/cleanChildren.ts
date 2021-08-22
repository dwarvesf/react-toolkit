import React, { Children, isValidElement } from 'react'
/**
 * Get a list of all valid React child elements
 * @param children
 */
export default function cleanChildren(
  children: React.ReactChildren | React.ReactNode,
): Array<React.ReactElement> {
  return Children.toArray(children).filter((child) =>
    isValidElement(child),
  ) as React.ReactElement[]
}
