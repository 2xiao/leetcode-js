<script>
import { isActive, hashRE, groupHeaders } from "../util";

export default {
  functional: true,

  props: ["item", "sidebarDepth"],

  render(
    h,
    {
      parent: { $page, $site, $route, $themeConfig, $themeLocaleConfig },
      props: { item, sidebarDepth },
    }
  ) {
    // use custom active class matching logic
    // due to edge case of paths ending with / + hash
    const selfActive = isActive($route, item.path);
    // for sidebar: auto pages, a hash link should be active if one of its child
    // matches
    const active =
      item.type === "auto"
        ? selfActive ||
          item.children.some((c) =>
            isActive($route, item.basePath + "#" + c.slug)
          )
        : selfActive;
    const link =
      item.type === "external"
        ? renderExternal(h, item.path, item.title || item.path)
        : renderLink(h, item.path, item.title || item.path, active);

    const maxDepth = [
      $page.frontmatter.sidebarDepth,
      sidebarDepth,
      $themeLocaleConfig.sidebarDepth,
      $themeConfig.sidebarDepth,
      1,
    ].find((depth) => depth !== undefined);

    const displayAllHeaders =
      $themeLocaleConfig.displayAllHeaders || $themeConfig.displayAllHeaders;

    if (item.type === "auto") {
      return [
        link,
        renderChildren(h, item.children, item.basePath, $route, maxDepth),
      ];
    } else if (
      (active || displayAllHeaders) &&
      item.headers &&
      !hashRE.test(item.path)
    ) {
      const children = groupHeaders(item.headers);
      return [link, renderChildren(h, children, item.path, $route, maxDepth)];
    } else {
      return link;
    }
  },
};

function renderLink(h, to, text, active) {
  return h(
    "router-link",
    {
      props: {
        to,
        activeClass: "",
        exactActiveClass: "",
      },
      class: {
        active,
        "toc-sidebar-link": true,
      },
    },
    text
  );
}

function renderChildren(h, children, path, route, maxDepth, depth = 1) {
  if (!children || depth > maxDepth) return null;
  return children.map((c) => {
    const active = isActive(route, path + "#" + c.slug);
    return h("li", { class: "toc-sidebar-sub-header" }, [
      renderLink(h, path + "#" + c.slug, c.title, active),
      renderChildren(h, c.children, path, route, maxDepth, depth + 1),
    ]);
  });
}

function renderExternal(h, to, text) {
  return h(
    "a",
    {
      attrs: {
        href: to,
        target: "_blank",
        rel: "noopener noreferrer",
      },
      class: {
        "toc-sidebar-link": true,
      },
    },
    [text, h("OutboundLink")]
  );
}
</script>

<style lang="stylus">
.toc-sidebar .toc-sidebar-sub-headers
  padding-left 1rem
  font-size 16px
ul.toc-sidebar-links
  margin: 0px;
  padding-inline-start: 0px;
  padding-top: 8px;
  padding-bottom: 8px;
  >li
    display: block;
    padding: 0px;
    font-size: 14px;
    line-height: 20px;
    min-height: 5px;
    margin-left: 0;
    margin-right: 12px;
    border-radius: 6px;
    transition: background 33.333ms linear 0s;
    color: rgb(31, 35, 40);
    cursor: pointer;

ul.toc-sidebar-links li li
  padding-left: 18px;
  display: block;
  font-size: 14px;
  line-height: 20px;
  min-height: 5px;
  margin-left: 0;
  border-radius: 6px;
  transition: background 33.333ms linear 0s;
  color: rgb(31, 35, 40);
  cursor: pointer;

ul.toc-sidebar-links>li>a:hover, li.toc-sidebar-sub-header:hover
  background-color: rgba(208, 215, 222, 0.32);
  color: rgb(31, 35, 40);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px max(1px, 0.0625rem) inset;
ul.toc-sidebar-links>li>a:active, li.toc-sidebar-sub-header:active
  background-color: rgba(208, 215, 222, 0.48);
  color: rgb(31, 35, 40);


a.toc-sidebar-link
  text-decoration: none;
  padding: 6px 8px;
  display: flex;
  -moz-box-flex: 1;
  flex-grow: 1;
  border-radius: 6px;
  color $textColor
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
  line-height 1.3
  &.active
    font-weight 600
    color rgb(31, 35, 40)
</style>
