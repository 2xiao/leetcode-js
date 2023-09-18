<template>
  <div>
    <el-row :gutter="20">
      <el-col :sm="0" :md=2 :lg="4" style="display: block;"><div style="width: 1px; height: 1px;"></div></el-col>
      <el-col :sm="24" :md="18" :lg="16">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>温馨提示喵</span>
          </div>
          <div class="copyright-text">
            <div>本文版权归作者所有，欢迎转载，但未经作者同意必须保留此段声明，且在文章页面明显位置给出原文连接，否则保留追究法律责任的权利。</div>
            <div>作者：<a href="https://github.com/2xiao" target="_blank">erxiao</a></div>
          </div>
        </el-card>
      </el-col>
    </el-row>
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
  padding 10px

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
