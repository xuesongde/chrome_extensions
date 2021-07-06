## 自动写入 cookie 的插件

#### developer end 使用 chrome extension 同步服务端 cookie，根据本地开发服务的端口号区分项目，不同的项目返回不同的 cookies, 循环写入开发服务，节省开发获取 cookie，将 cookie 写入本地开发链接的时间。

#### server end 使用 node 定时任务自动登陆相关站点获取 cookie，不同的站点对应相应的开发服务端口号，将 cookie 和端口号对应关系写入数据库。
