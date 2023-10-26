<template>
  <div>
    <div class="copyright-text">
      <div>温馨提示喵</div>
      <div>著作权归作者所有，商业转载请联系作者获得授权，非商业转载请注明出处，否则保留追究法律责任的权利。</div>
      <div>出处：<a href="https://2xiao.github.io/leetcode-js/" target="_blank">前端算法通关指南
</a></div>
      <div>作者：<a href="https://github.com/2xiao" target="_blank">2xiao</a></div>
    </div>
  </div>
</template>

<script>
export default {};
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
