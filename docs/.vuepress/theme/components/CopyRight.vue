<template>
  <div>
    <div class="copyright-text">
      <div>温馨提示喵</div>
      <div>本文版权归作者所有，欢迎转载，但未经作者同意必须保留此段声明，且在文章页面明显位置给出原文连接，否则保留追究法律责任的权利。</div>
      <div>作者：<a href="https://github.com/2xiao" target="_blank">erxiao</a></div>
    </div>
  </div>
</template>

<script>
function getImgSoource() {
  return (
    "https://api.thecatapi.com/v1/images/search?format=src&t=" +
    new Date().getTime()
  );
}

export default {
  data() {
    return {
      imgSrc: getImgSoource()
    };
  },
  watch: {
    $route(to) {
      this.imgSrc = getImgSoource();
    }
  }
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
