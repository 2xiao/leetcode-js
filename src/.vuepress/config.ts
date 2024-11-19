import { defineUserConfig } from 'vuepress';
import { path } from '@vuepress/utils';
import theme from './theme.js';

export default defineUserConfig({
	base: '/leetcode-js/',
	lang: 'zh-CN',
	title: 'LeetCode-JS',
	description: '写给前端工程师的算法通关指南.',
	// locales: {
	//   "/": {
	//     lang: "zh-CN",
	//     title: "LeetCode-JS",
	//     description: "写给前端工程师的算法通关指南.",
	//   },
	//   "/en/": {
	//     lang: "en-US",
	//     title: "LeetCode-JS",
	//     description: "Know Your Game",
	//   },
	// },

	theme,
	alias: {
		// 你可以在这里将别名定向到自己的组件
		'@theme-hope/modules/navbar/components/Navbar': path.resolve(
			__dirname,
			'./components/Navbar.vue'
		)
	},
	shouldPrefetch: (file, type) => {
		// 仅对关键资源启用 prefetch
		return type === 'script' && file.includes('重要资源');
	}

	// Enable it with pwa
	// shouldPrefetch: false,
});
