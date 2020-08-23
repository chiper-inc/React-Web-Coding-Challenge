import Fuse from 'fuse.js'

const options = {
  shouldSort: false,
  ignoreLocation: true
}

export const searchInArrayOfObj = (list, keys, text) => {
  if (!text) {
    return list
  }
  const fuse = new Fuse(list, {
    ...options,
    keys
  })
  const result = fuse.search(text)

  return result.map((res) => res.item)
}
