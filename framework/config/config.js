
/**
 * 网站配置文件
 */


//配置对象（全局）
module.exports = {

    //端口监听
    port: {
        http: 90,
        websocket: 91
    },

    version: '12092',            //程序版本号 用于更新改版后的 js css 客户端缓存
    route: true,                      //是否开启默认路由匹配（在未定义url处理程序的情况下，搜索文件位置查找处理程序）
    cluster: false,                    //是否开启多核支持、守护进程
    worker: 1,                        //开启的worker工作者线程的数量，需要开启上面的cluster才生效，当值为0则与CPU核心数量相同
    debug: true,                  //是否为调试模式  调试会将错误抛出终止进程
    compiled: true,               //是否总是编译html、js、css等页面文件（比较耗时，debug时使用）
    compress: false,            //是否压缩js、css文件（比较耗时，debug时关闭）
    expires: 60*60*24        //静态文件客户端缓存时间，单位为秒

};