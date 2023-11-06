<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />
    <CopyRight></CopyRight>

    <PageNav v-bind="{ sidebarItems }" />
    <slot name="bottom" />

  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import CopyRight from '@theme/components/CopyRight.vue'

export default {
  components: { PageEdit, PageNav, CopyRight },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

</style>
