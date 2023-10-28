<template>
  <ul class="sidebar-links" v-if="items.length">
    <li v-for="(item, i) in items" :key="i">
      <SidebarGroup
        v-if="item.type === 'group'"
        :item="item"
        :open="i === openGroupIndex"
        :collapsable="item.collapsable || item.collapsible"
        :depth="depth"
        @toggle="toggleGroup(i)"
      />

      <SidebarLink v-else :sidebarDepth="sidebarDepth" :item="item" />
    </li>
  </ul>
</template>

<script>
import SidebarGroup from "@theme/components/SidebarGroup.vue";
import SidebarLink from "@theme/components/SidebarLink.vue";
import { isActive } from "../util";

export default {
  name: "SidebarLinks",

  components: { SidebarGroup, SidebarLink },

  props: [
    "items",
    "depth", // depth of current sidebar links
    "sidebarDepth", // depth of headers to be extracted
  ],

  data() {
    return {
      openGroupIndex: 0,
    };
  },

  created() {
    this.refreshIndex();
  },

  watch: {
    $route() {
      this.refreshIndex();
    },
  },

  methods: {
    refreshIndex() {
      const index = resolveOpenGroupIndex(this.$route, this.items);
      if (index > -1) {
        this.openGroupIndex = index;
      }
    },

    toggleGroup(index) {
      this.openGroupIndex = index === this.openGroupIndex ? -1 : index;
    },

    isActive(page) {
      return isActive(this.$route, page.regularPath);
    },
  },
};

function resolveOpenGroupIndex(route, items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.type === "group") {
      for (let j = 0; j < item.children.length; j++) {
        let child = item.children[j];
        if (child.type === "page" && isActive(route, child.path)) {
          return i;
        } else if (child.type === "group") {
          for (let k = 0; k < child.children.length; k++) {
            let grandson = child.children[k];
            if (grandson.type === "page" && isActive(route, grandson.path)) {
              return i;
            }
          }
        }
      }
    }
  }
  return -1;
}
</script>
