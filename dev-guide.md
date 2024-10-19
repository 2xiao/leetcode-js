# dev guide

## 1. 前期准备

- git
- [nodejs](https://nodejs.org/en/download)

## 2. 拉取代码

```
git clone git@github.com:2xiao/leetcode-js.git
```

## 3. 安装依赖

```
cd leetcode-js

npm i
```

## 4. 本地调试

```
npm run dev
```

## 5. LeetCode 题目爬虫

- 安装 [python 3](https://www.python.org/downloads/)

- 安装 pandas

```
pip3 install pandas
```

- 运行爬虫

```
npm run spider
```

## 6. 使用脚本更新 LeetCode 题解统计

运行脚本

```
npm run lc
```

## 7. 线上部署

`git push origin docs` 后自动部署到 `gh-pages` 分支。
