# 前后端部署到同一域名

前端和后端部署在同一个域名下，可以解决跨域问题，可以通过下面方法设置。
>当然前后端分开部署正常情况下也不会有跨域问题，yylAdmin已经做了跨域处理

### 自定义打包路径

#### 设置前端环境接口地址
把.env.production环境文件中的接口地址设置为空：VITE_APP_BASE_URL = ''  
>可以根据打包环境修改对应文件，如果打包测试环境，就在.env.staging中修改  
<img src="/image/fqa/same-domain-name/1-env-prod.png" alt="">

#### 配置路径和打包目录、打包
把.env.production环境文件中的base路径设置为/admin/,打包路径outDir设置为admin  
运行打包命令：cnpm run build:prod
>这两个路径名称可以自定义，但是名称必须一样；如果修改的是测试环境文件，运行：cnpm run build:stage
<img src="/image/fqa/same-domain-name/2-vue-config-js.png" alt="">

#### 复制打包目录到yylAdmin/public文件夹下
把前面打包后生成的目录admin复制到后端public文件下
>就是把yylAdminWeb/admin文件夹复制到yylAdmin/public文件夹下：yylAdmin/public/admin
<img src="/image/fqa/same-domain-name/3-copy-yyladmin-public.png" alt="">

#### 本地测试一下是否能访问
[http://localhost:9526/admin/](http://localhost:9526/admin/){target="_self"}  
>http://localhost:9526是后端地址，/admin/是前面设置的公共路径
<img src="/image/fqa/same-domain-name/4-localhost-open.png" alt="">

#### 部署yylAdmin到服务器上、访问
你的域名/admin/
>输入部署后端域名，再加上公共路径就可以访问了
<img src="/image/fqa/same-domain-name/5-pro-open.png" alt="">

#### 前台前端
同样，可以把前台前端（web、h5）、后台前端（yylAdminWeb）等 与 后端（yylAdmin）放到同一个域名下，这样也不会有跨域问题
