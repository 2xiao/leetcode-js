<template>
  <div>
    <div class="copyright-text">
      <div>温馨提示喵</div>
      <div>本文版权归作者所有，若需转载，必须保留此段声明，且在页面明显位置展示原文链接，否则保留追究法律责任的权利。</div>
      <div>原文链接：<a :href="herf" target="_blank">{{ herf }}</a></div>
      <div>作者：<a href="https://github.com/2xiao" target="_blank">2xiao</a></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      herf: 'https://2xiao.github.io/leetcode-js' + this.$route.path
    };
  },
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.image-slot
  width 100%
  display block

.copyright-text 
  font-size 15px
  color #999
  background #eee
  padding 20px 20px 10px 20px

.copyright-text 
  > div 
    margin-bottom 10px

@media (max-width: $MQMobile)
  .copyright-text 
    font-size 13px
  .el-card__header
    padding 8px 10px
    font-size 13px

</style>
