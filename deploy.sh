#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
# set -e
#
# 生成静态文件
npm run build
#
cp README.md docs/.vuepress/dist/
#
# 进入生成的文件夹
cd docs/.vuepress/dist
#
# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
#
git init
git add -A
git commit -m 'deploy'
git remote add origin https://github.com/2xiao/leetcode-js.git
git push origin master:gh-pages -f
# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git gh-pages
#
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f 2xiao@github.com:https://github.com/2xiao/leetcode-js.git master:gh-pages
#
cd -