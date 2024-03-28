#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git config user.name skyselang
git config user.email 215817969@qq.com
git config --list
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
# git push -f git@gitee.com:yyladmin/yyladmin.gitee.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://gitee.com/yyladmin/yyladmin.git master:docs
# git push -f https://github.com/yyladmin/yyladmin.git master:docs

cd -
rm -rf docs/.vuepress/dist
