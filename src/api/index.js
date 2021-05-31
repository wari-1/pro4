const excludes = ['index.js', 'axios.js', 'prefix.js']

const req = require.context('./', true, /.js$/)
const requireAll = (require) => {
  require.keys().reduce((modules, key) => {
    if (!excludes.includes(key)) {
      const keyArr = key.split('/')
      keyArr.shift()
      modules[keyArr.join('.').replace(/\.js$/g, '')] = require(key)
      return modules
    }
  }, {})
}

export default requireAll(req)
