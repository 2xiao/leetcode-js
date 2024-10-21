import { navbar } from 'vuepress-theme-hope';

export default navbar([
	{
		text: 'LeetCode 通关指南',
		icon: 'code',
		prefix: '/',
		link: '/'
	},
	{
		text: 'React 源码',
		icon: 'react',
		link: 'https://2xiao.github.io/my-react/',
		target: '_self'
	},
	{
		text: 'Vue 源码',
		icon: 'vue',
		link: 'https://2xiao.github.io/my-vue/',
		target: '_self'
	},
	{
		text: '前端面试题',
		icon: 'creative',
		link: 'https://2xiao.github.io/interview/',
		target: '_self'
	},
	{
		text: '博客',
		icon: 'blog',
		link: 'https://2xiao.github.io/blog/',
		target: '_self'
	}
]);
