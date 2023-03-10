/**
 
 * @description 获取accessToken
 * @returns {string|ActiveX.IXMLDOMNode|Promise<any>|any|IDBRequest<any>|MediaKeyStatus|FormDataEntryValue|Function|Promise<Credential | null>}
 */
export function getAccessToken(tokenTableName: string) {
  return localStorage.getItem(tokenTableName);
}

/**
 
 * @description 存储accessToken
 * @param accessToken
 * @returns {void|*}
 */
export function setAccessToken(tokenTableName: string, accessToken: string) {
  return localStorage.setItem(tokenTableName, accessToken);
}

/**
 
 * @description 移除accessToken
 * @returns {void|Promise<void>}
 */
export function removeAccessToken(tokenTableName: string) {
  return localStorage.removeItem(tokenTableName);
}
