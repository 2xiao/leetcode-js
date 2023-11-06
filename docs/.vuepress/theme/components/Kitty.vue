<template>
  <div id="kitty-container" v-if="isShow">
    <el-popover
      @mousedown.native="move"
      @touchstart.native="touch"
      trigger="hover"
    >
      <div class="cover">
        <p class="title">今日咒语</p>
        <p class="text">{{ words }}</p>
      </div>
      <div
        id="kitty"
        @dblclick="jumpToPage"
        v-longpress="deleteKitty"
        :style="{ background: 'url(' + kittyUrl + ')' }"
        slot="reference"
      ></div>
    </el-popover>
  </div>
</template>

<script>
//获取相关CSS属性
const getCss = function (o, key) {
  return o.currentStyle
    ? o.currentStyle[key]
    : document.defaultView.getComputedStyle(o, false)[key];
};

function getRandomWords() {
  const kittyNum = ZXYWords.length;
  const randomNum = Math.floor(Math.random() * kittyNum);
  return ZXYWords[randomNum];
}

import { ZXYWords } from "@theme/util/zxy.js";

export default {
  data() {
    return {
      ZXYWords: ZXYWords,
      isShow: true,
      kittyUrl:
        "https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/assets/img/kitty2.svg",
      words: getRandomWords(),
    };
  },
  methods: {
    move(e) {
      let odiv = e.target; //获取目标元素

      let currentX = e.clientX;
      let currentY = e.clientY;
      let left = 0;
      let top = 0;

      if (getCss(odiv, "left") !== "auto") {
        left = getCss(odiv, "left");
      }
      if (getCss(odiv, "top") !== "auto") {
        top = getCss(odiv, "top");
      }
      document.onmousemove = (e) => {
        const nowX = e.clientX;
        const nowY = e.clientY;
        const disX = nowX - currentX;
        const disY = nowY - currentY;
        odiv.style.left = parseInt(left) + disX + "px";
        odiv.style.top = parseInt(top) + disY + "px";
      };
      document.onmouseup = (e) => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    touch(e) {
      const touches = e.changedTouches;
      let odiv = touches[0].target; //获取目标元素

      let currentX = touches[0].clientX;
      let currentY = touches[0].clientY;
      let left = 0;
      let top = 0;

      if (getCss(odiv, "left") !== "auto") {
        left = getCss(odiv, "left");
      }
      if (getCss(odiv, "top") !== "auto") {
        top = getCss(odiv, "top");
      }
      const el = document.getElementById("kitty-container");
      function touchMove(e) {
        e.preventDefault();
        const touches = e.changedTouches;
        const nowX = touches[0].clientX;
        const nowY = touches[0].clientY;
        const disX = nowX - currentX;
        const disY = nowY - currentY;
        odiv.style.left = parseInt(left) + disX + "px";
        odiv.style.top = parseInt(top) + disY + "px";
      }
      function touchEnd() {
        el.removeEventListener("touchstart", touchMove);
        el.removeEventListener("touchend", touchEnd);
      }
      el.addEventListener("touchmove", touchMove);
      el.addEventListener("touchend", touchEnd);
    },
    deleteKitty() {
      this.isShow = false;
    },
    jumpToPage() {
      this.$router.push("/magic");
    },
  },
  directives: {
    longpress: {
      bind: function (el, binding, vNode) {
        // 确保提供的表达式是函数
        if (typeof binding.value !== "function") {
          // 获取组件名称
          const compName = vNode.context.name;
          // 将警告传递给控制台
          let warn = `[longpress:] provided expression '${binding.expression}' is not a function, but has to be `;
          if (compName) {
            warn += `Found in component '${compName}' `;
          }

          console.warn(warn);
        }

        // 定义变量
        let pressTimer = null;

        // 定义函数处理程序
        // 创建计时器（ 1秒后执行函数 ）
        let start = (e) => {
          if (e.type === "click" && e.button !== 0) {
            return;
          }

          if (pressTimer === null) {
            pressTimer = setTimeout(() => {
              // 执行函数
              handler();
            }, 1000);
          }
        };

        // 取消计时器
        let cancel = (e) => {
          // 检查计时器是否有值
          if (pressTimer !== null) {
            clearTimeout(pressTimer);
            pressTimer = null;
          }
        };

        // 运行函数
        const handler = (e) => {
          // 执行传递给指令的方法
          binding.value(e);
        };

        // 添加事件监听器
        el.addEventListener("mousedown", start);
        el.addEventListener("touchstart", start);

        // 取消计时器
        el.addEventListener("click", cancel);
        el.addEventListener("mouseout", cancel);
        el.addEventListener("touchend", cancel);
        el.addEventListener("touchcancel", cancel);
      },
    },
  },
};
</script>

<style lang="stylus">
.el-dialog__body
  text-align center

.cover
  padding 0 10px

.title
  text-align left
  font-weight bold

.text
  border-top: 2px solid gray
  text-align left
  max-width 200px
  padding-top 15px
  display block
  font-weight 400
  line-height 24px

#kitty
  position fixed !important
  right 60px
  top -60px
  height 300px
  width 508px
  z-index 10
  -webkit-transform scale(0.2)
  -moz-transform scale(0.2)
  -ms-transform scale(0.2)
  transform scale(0.2)
  -webkit-animation sprite-animation 1.2s steps(16, end) infinite
  -moz-animation sprite-animation 1.2s steps(16, end) infinite
  -ms-animation sprite-animation 1.2s steps(16, end) infinite
  animation sprite-animation 1.2s steps(16, end) infinite

@media (max-width: $MQMobile)
  #kitty
    right: auto
    bottom: 0px
    -webkit-transform scale(0.2)
    -moz-transform scale(0.2)
    -ms-transform scale(0.2)
    transform scale(0.2)
  .el-dialog
    width 90%

@-webkit-keyframes sprite-animation
  from
    background-position 0 0
  to
    background-position -8120px 0



@-ms-keyframes sprite-animation
  from
    background-position 0 0
  to
    background-position -8120px 0



@-moz-keyframes sprite-animation
  from
    background-position 0 0
  to
    background-position -8120px 0


@keyframes sprite-animation
  from
    background-position 0 0
  to
    background-position -8120px 0
</style>
