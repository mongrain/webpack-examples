// NoConsolePlugin.js

const PLUGIN_NAME = 'NO_CONSOLE';

class NoConsolePlugin {
  constructor() {

  }

  // 我们需要一个apply方法(为了获取compiler)，接收compiler作为参数表示这次打包的上下文。  
  apply(compiler) {
    compiler.hooks.emit.tap(PLUGIN_NAME, compilation => {
      // 探索每个块（构建后的输出）
      compilation.chunks.forEach(function (chunk) {
        // 探索块生成的每个资源文件名
        chunk.files.forEach(function (filename) {
          // 获取资源
          let source = compilation.assets[filename].source();
          // 使用正则，替换 console.log console.warn 等 打印信息
          source = source.replace(/console\.(log|warn|error|info)\(([^)]*)\)/g, '');
          // 替换资源信息
          compilation.assets[filename] = {
            source() {
              return source;
            },
            size() {
              return source.length;
            }
          }
        });
      });
    });
  }
}

module.exports = NoConsolePlugin