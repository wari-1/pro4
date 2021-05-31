const modulesFiles = require.context('./', true, /\.js$/)
const modules =  modulesFiles.keys().reduce((modules, modulePath) => {
  if (modulePath !== 'index.js') {
    const value = modulesFiles(modulePath)
    if (typeof value === 'object') {
      modules = Object.assign(modules, value.default)
      return modules
    }
  }
}, {})

// this.$emums.getLabel('boolYes', true)
export default {
  getLabel(key, value, options=[]) {
    const arr = Array.isArray(options) && options.length ? options : this[key]
    if (Array.isArray(arr) && arr.length) {
      const item = arr.find(d => d.value === value)
      if (item) {
        return item.label
      }
    }
    return ''
  },
  ...modules
}