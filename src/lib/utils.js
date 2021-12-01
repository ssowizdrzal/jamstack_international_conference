export function cleanUndefined(string) {
  let result = ""
  string === undefined ? (result = "") : (result = string)
  return result
}

export function cleanUndefinedWithPrefix(string, prefix) {
    let result = ""
    string === undefined ? (result = "") : (result = prefix+string)
    return result
  }
