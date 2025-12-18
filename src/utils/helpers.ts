export function toCapitalize(arr: string[]) {
  const str = arr.join(', ')
  return str.charAt(0).toUpperCase() + str.slice(1)
}
