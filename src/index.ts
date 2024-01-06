export function createState(stateName: string, initialValue: any) {
  window[stateName] = initialValue
  const functionName = `set${stateName}`
  window[functionName] = (newValue: any) => (window[stateName] = newValue)

  return window[functionName]
}
