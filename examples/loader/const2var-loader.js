module.exports = function (source) {
  // 把 const 转成 var
  source = source.replace(/const/g, 'var')
  return `module.exports = ${JSON.stringify(source)}`
}