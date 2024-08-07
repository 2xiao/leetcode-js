import { navbar } from 'vuepress-theme-hope';

export default navbar([
	{
		text: 'LeetCode 通关指南',
		icon: 'code',
		prefix: '/leetcode/',
		link: '/leetcode/'
	},
	{
		text: 'React 源码',
		icon: 'react',
		prefix: '/react/',
		link: '/react/'
	},
	{
		text: 'Vue 源码',
		icon: 'vue',
		prefix: '/vue/',
		link: '/vue/'
	},
	{
		text: '前端面试题',
		icon: 'creative',
		prefix: '/interview/',
		link: '/interview/'
	},
	{
		text: '博客',
		icon: 'blog',
		prefix: '/blog/',
		link: '/blog/'
	}
]);
