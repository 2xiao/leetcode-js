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
		link: 'https://wangfuyou.com/my-react/',
		target: '_self'
	},
	{
		text: 'Vue 源码',
		icon: 'vue',
		link: 'https://wangfuyou.com/my-vue/',
		target: '_self'
	},
	{
		text: '系统设计',
		icon: 'launch',
		link: 'https://wangfuyou.com/system-design/',
		target: '_self'
	},
	{
		text: '前端面试题',
		icon: 'creative',
		link: 'https://wangfuyou.com/interview/',
		target: '_self'
	},
	{
		text: '博客',
		icon: 'blog',
		link: 'https://wangfuyou.com/blog/',
		target: '_self'
	}
]);
