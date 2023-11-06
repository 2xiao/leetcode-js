<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />
    <CopyRight></CopyRight>

    <PageNav v-bind="{ sidebarItems }" />
    <slot name="bottom" />
    <el-backtop><KittyTop /></el-backtop>

  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import CopyRight from '@theme/components/CopyRight.vue'
import KittyTop from './KittyTop.vue';

export default {
  components: { PageEdit, PageNav, CopyRight, KittyTop },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

</style>
