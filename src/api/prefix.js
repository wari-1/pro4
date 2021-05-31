const prefix = {
  pre: ['https://vue-js.org/api/v1']
}

const getPrefix = (key, index) => {
  return !index ? prefix[key][0] : prefix[key][index]
}

export const pre = getPrefix('pre')