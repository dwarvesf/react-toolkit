export default function truncate(
  str: string,
  num: number,
  middle: boolean = false,
) {
  if (str.length > num && str.length > 3) {
    if (!middle) {
      return `${str.substring(0, num)}...`
    }

    const a = Math.round((num * 2) / 3)
    const b = num - a

    return `${str.substring(0, a)}...${str.substring(
      str.length - b,
      str.length,
    )}`
  }

  return str
}
