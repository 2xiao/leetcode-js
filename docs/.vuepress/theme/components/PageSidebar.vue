<template>
  <aside class="page-sidebar">
    <div class="toc-container-sidebar" ref="tocc">
      <div class="pos-box">
        <div class="scroll-box">
          <div style="font-weight: bold; text-align: left">
            {{ pageSidebarItems[0].title }}
          </div>
          <hr />
          <div class="toc-box">
            <PageSidebarToc
              :depth="0"
              :items="pageSidebarItems"
              :sidebarDepth="3"
            />
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import PageSidebarToc from "@theme/components/PageSidebarToc.vue";
import NavLinks from "@theme/components/NavLinks.vue";

export default {
  name: "PageSidebar",

  components: {
    PageSidebarToc,
    NavLinks,
  },

  props: ["pageSidebarItems", "sidebarItems"],
};
</script>

<style lang="stylus">
.page-sidebar
  font-size 16px
  background-color #fff
  width 250px
  position fixed
  z-index 2
  margin 0
  top $navbarHeight
  right 0
  bottom 0
  box-sizing border-box
  overflow-y hidden
  overflow-x hidden
  box-sizing border-box
  background-color #f3f5f7

.toc-container-sidebar
  display: block;
  color $textColor
  width: 245px;
  background: #fff;
  margin-left: 5px;
  .pos-box
    padding: 15px;
    .scroll-box
      overflow-x: hidden;
      overflow-y: hidden;
      hr
        margin-top: 0.5rem
      .toc-box
        height: calc(100vh - 100px);
        overflow-y: auto;
        overflow-x: hidden;
        width: 235px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      & > ul
        margin-top: -8px;
        li
          margin-top: 8px;
          line-height: 17px;
          text-align: left;
          overflow: auto;
          text-overflow: ellipsis;
          font-size: 12px;
          white-space: nowrap;
        .sub-box
          margin-top: 0;
        & > ul > li
          padding-left: 15px;

@media (max-width: $MQNarrow)
  .page-sidebar
    display none


@media (max-width: $MQMobile)
  .page-sidebar
    display none
</style>
