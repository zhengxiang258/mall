// module.exports {
// 	configureWebpack:{
// 		resolve:{
// 			alias:{
// 				'assets':"@assets",
// 				'common':"@common",
// 				'components':"@components",
// 				"network":"@network",
// 				""
// 			}
// 		}
// 	}
// }
//
// const path = require('path');//引入path模块
// function resolve(dir){
//     return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
// }
// module.exports={
//     chainWebpack:(config)=>{
//         config.resolve.alias
//         .set('@',resolve('./src'))
//         .set('components',resolve('./src/components'))
//         .set('common',resolve('./src/common'))
//         .set('assets',resolve('./src/assets'))
//         .set('network',resolve('./src/network'))
//         //set第一个参数：设置的别名，第二个参数：设置的路径
// 　　　　
//     }
// }

const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  chainWebpack: config => {
    // 设置快捷路径， @ 表示 'src' ，components 表示 'src/components'
    config.resolve.alias
      // .set('@', resolve('src'))
      .set('@',resolve('./src'))
      .set('components',resolve('./src/components'))
      .set('common',resolve('./src/common'))
      .set('assets',resolve('./src/assets'))
      .set('network',resolve('./src/network'))
  },
}
