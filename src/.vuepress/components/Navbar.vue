<template>
  <Navbar>
    <!-- 使用插槽引入组件 -->
    <template #endBefore>
      <div class="magic-icon" @dblclick="jumpToPage">
        🎄
        <!-- <HopeIcon class="icon" icon="linter" /> -->
        <div class="nav-dropdown">
          <div class="cover">
            <p class="title">{{ emoji }} 今日咒语</p>
            <p class="word">{{ words }}</p>
          </div>
        </div>
      </div>
    </template>
  </Navbar>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import Navbar from "vuepress-theme-hope/modules/navbar/components/Navbar.js";
import { ZXYWords } from "../zxy.js";
console.log('loaded navbar')
const words = getRandomWords(ZXYWords)
const emoji = getRandomWords(['✨', '🍭', '🍃', '🏝', '🎉', '💫'])
const router = useRouter()

function getRandomWords(arr) {
  const num = Math.floor(Math.random() * arr.length);
  return arr[num];
}

function jumpToPage() {
  router.push("/magic");
}

</script>
<style>
.magic-icon {
  padding: 6px;
  margin: 0 0.25rem;
  cursor: pointer;
  color: #666;
  user-select: none;
}

.icon:hover {
  color: #096dd9;
}

.magic-icon:hover .nav-dropdown {
  display: block;
}

.nav-dropdown {
  display: none;
  position: absolute;
  top: 100%;
  right: -50px;
  overflow-y: auto;
  box-sizing: border-box;
  min-width: 6rem;
  max-height: calc(100vh - 60px);
  margin: 0;
  padding: 0.5rem;
  border: 1px solid #eee;
  border-radius: 0.5rem;
  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, .15);
  text-align: start;
  white-space: initial;
}

.cover {
  width: 15rem;
  padding: 0 15px;
}

.title {
  text-align: left;
  font-weight: bold;
}

.word {
  border-top: 2px solid gray;
  text-align: left;
  padding-top: 15px;
  display: block;
  font-weight: 400;
  line-height: 28px;
  font-size: 16px;
  text-align: justify;
}</style>