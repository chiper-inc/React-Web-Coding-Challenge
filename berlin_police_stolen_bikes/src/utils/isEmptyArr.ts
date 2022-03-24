const isEmptyArr = (arr: unknown[]): boolean => (Array.isArray(arr) && !arr.length) || arr === null

export default isEmptyArr
