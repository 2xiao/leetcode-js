# dev guide

1. 前期准备

- git
- [nodejs](https://nodejs.org/en/download)

2. 拉取代码

```
git clone git@github.com:2xiao/leetcode-js.git
```


3. 将 VuePress 安装为本地依赖

官方已经不再推荐全局安装 VuePress

```
npm install -D vuepress
```

4. 安装依赖

```
cd leetcode-js

npm i
```

5. 本地调试

```
npm run dev
```

6. 使用脚本更新 LeetCode 题解统计

安装依赖

- [python 3](https://www.python.org/downloads/)
- pandas: `pip3 install pandas`

运行脚本

```
cd ./assets/scripts

python3 ./entrance.py
```
