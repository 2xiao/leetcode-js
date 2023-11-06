<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" />

    <div class="sidebar-mask" @click="toggleSidebar(!isSidebarOpen)">
      <i v-if="isSidebarOpen" class="el-icon-arrow-left"></i>
      <i v-else class="el-icon-arrow-right"></i>
    </div>

    <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>

    <Home v-if="$page.frontmatter.home" />

    <Page v-else :sidebar-items="sidebarItems">
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
      </template>
    </Page>
    <PageSidebar
      v-if="shouldShowPageSidebar"
      :page-sidebar-items="pageSidebarItems"
      :sidebar-items="sidebarItems"
      @toggle-page-sidebar="togglePageSidebar"
    />
    <Kitty />
  </div>
</template>

<script>
import Home from "@theme/components/Home.vue";
import Navbar from "@theme/components/Navbar.vue";
import Page from "@theme/components/Page.vue";
import Sidebar from "@theme/components/Sidebar.vue";
import PageSidebar from "@theme/components/PageSidebar.vue";
import Kitty from "@theme/components/Kitty.vue";
import { resolveSidebarItems, resolveHeaders, isMobile } from "../util";

export default {
  name: "Layout",

  components: {
    Home,
    Page,
    Sidebar,
    Navbar,
    Kitty,
    PageSidebar,
  },

  data() {
    return {
      isSidebarOpen: !isMobile(),
      isPageSidebarOpen: true,
    };
  },

  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },

    shouldShowPageSidebar() {
      const { frontmatter } = this.$page;
      return (
        //false&&
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.pageSidebarItems[0].children.length
      );
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },

    pageSidebarItems() {
      return resolveHeaders(this.$page);
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          "no-navbar": !this.shouldShowNavbar,
          "sidebar-open": this.isSidebarOpen,
          "sidebar-close": !this.isSidebarOpen,
          "no-sidebar": !this.shouldShowSidebar,
          "pagesidebar-open": this.isPageSidebarOpen,
          "pagesidebar-close": !this.isPageSidebarOpen,
          "no-pagesidebar": !this.shouldShowPageSidebar,
        },
        userPageClass,
      ];
    },
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = isMobile() ? false : this.isSidebarOpen;
      this.isPageSidebarOpen = true;
    });
  },

  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
      this.$emit("toggle-sidebar", this.isSidebarOpen);
    },

    togglePageSidebar(to) {
      this.isPageSidebarOpen = typeof to === "boolean" ? to : !this.isPageSidebarOpen;
      this.$emit("toggle-page-sidebar", this.isPageSidebarOpen);
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      };
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    },
  },
};
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
