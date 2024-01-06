window['CREATE_YOUR_OWN_REACT'] = {}
const globalVars = window['CREATE_YOUR_OWN_REACT']

export function createState(stateName: string, initialValue: any) {
  globalVars[stateName] = initialValue
  const functionName = `set${stateName}`
  globalVars[functionName] = (newValue: any) =>
    (globalVars[stateName] = newValue)

  return globalVars[functionName]
}
