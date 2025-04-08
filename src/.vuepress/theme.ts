import { hopeTheme } from 'vuepress-theme-hope';
import navbar from './navbar.ts';
import sidebar from './sidebar.ts';
// import { enNavbar, zhNavbar } from "./navbar/index.ts";
// import { enSidebar, zhSidebar } from "./sidebar/index.ts";

export default hopeTheme(
	{
		pure: true,
		hostname: 'https://wangfuyou.com',

		author: {
			name: '2xiao',
			url: 'https://github.com/2xiao'
		},
		pageInfo: false,

		iconAssets: 'iconfont',

		logo: 'assets/image/logo.png',

		favicon: 'assets/image/logo.png',

		repo: '2xiao/leetcode-js',

		docsBranch: 'docs',

		docsDir: 'src',

		// navbar
		navbar,

		// sidebar
		sidebar,

		// page meta
		metaLocales: {
			editLink: '在 GitHub 上编辑此页'
		},

		print: false,

		footer: '<div class="vp-copyright"><p>版权所有，侵权必究 © 2022 - 2025  2xiao</p><p><img src="assets/image/beian.png" style="width: 16px; vertical-align: text-top" alt="">&nbsp;&nbsp;<a href="https://beian.mps.gov.cn/#/query/webSearch?code=11010802045636" rel="noreferrer" target="_blank">京公网安备11010802045636号</a>&nbsp;&nbsp;<a target="_blank" href="https://beian.miit.gov.cn/#/Integrated/index">京ICP备2025118976号</a></p></div>',

		displayFooter: true,

		copyright: false,

		// locales: {
		//   /**
		//    * Chinese locale config
		//    */
		//   "/": {
		//     // navbar
		//     navbar: zhNavbar,
		//     // sidebar
		//     sidebar: zhSidebar,
		//     // page meta
		//     metaLocales: {
		//       editLink: "在 GitHub 上编辑此页",
		//     },
		//   },
		//   /**
		//    * English locale config
		//    */
		//   "/en/": {
		//     // navbar
		//     navbar: enNavbar,
		//     // sidebar
		//     sidebar: enSidebar,
		//     metaLocales: {
		//       editLink: "Edit this page on GitHub",
		//     },
		//   },
		// },

		encrypt: {
			config: {
				// "/demo/encrypt.html": ["1234"],
			}
		},

		plugins: {
			// You should generate and use your own comment service
			comment: {
				provider: 'Giscus',
				repo: '2xiao/leetcode-js',
				repoId: 'R_kgDOKUwcng',
				category: 'Announcements',
				categoryId: 'DIC_kwDOKUwcns4CbI2r'
			},

			// All features are enabled for demo, only preserve features you need here
			mdEnhance: {
				align: true,
				attrs: true,

				// install chart.js before enabling it
				// chart: true,

				codetabs: true,

				// insert component easily
				// component: true,

				demo: true,

				// install echarts before enabling it
				// echarts: true,

				figure: true,

				// install flowchart.ts before enabling it
				// flowchart: true,

				// gfm requires mathjax-full to provide tex support
				// gfm: true,

				imgLazyload: true,
				imgSize: true,
				include: true,

				tasklist: true,

				// install katex before enabling it
				// katex: true,

				// install mathjax-full before enabling it
				// mathjax: true,

				mark: true,

				// install mermaid before enabling it
				// mermaid: true,

				playground: {
					presets: ['ts', 'vue']
				},

				// install reveal.js before enabling it
				// revealJs: {
				//   plugins: ["highlight", "math", "search", "notes", "zoom"],
				// },

				stylize: [
					{
						matcher: 'Recommended',
						replacer: ({ tag }) => {
							if (tag === 'em')
								return {
									tag: 'Badge',
									attrs: { type: 'tip' },
									content: 'Recommended'
								};
						}
					}
				],
				sub: true,
				sup: true,
				tabs: true,
				vPre: true,
				container: true

				// install @vue/repl before enabling it
				// vuePlayground: true,
			}

			// uncomment these if you want a pwa
			// pwa: {
			//   favicon: "/favicon.ico",
			//   cacheHTML: true,
			//   cachePic: true,
			//   appendBase: true,
			//   apple: {
			//     icon: "/assets/icon/apple-icon-152.png",
			//     statusBarColor: "black",
			//   },
			//   msTile: {
			//     image: "/assets/icon/ms-icon-144.png",
			//     color: "#ffffff",
			//   },
			//   manifest: {
			//     icons: [
			//       {
			//         src: "/assets/icon/chrome-mask-512.png",
			//         sizes: "512x512",
			//         purpose: "maskable",
			//         type: "image/png",
			//       },
			//       {
			//         src: "/assets/icon/chrome-mask-192.png",
			//         sizes: "192x192",
			//         purpose: "maskable",
			//         type: "image/png",
			//       },
			//       {
			//         src: "/assets/icon/chrome-512.png",
			//         sizes: "512x512",
			//         type: "image/png",
			//       },
			//       {
			//         src: "/assets/icon/chrome-192.png",
			//         sizes: "192x192",
			//         type: "image/png",
			//       },
			//     ],
			//     shortcuts: [
			//       {
			//         name: "Demo",
			//         short_name: "Demo",
			//         url: "/demo/",
			//         icons: [
			//           {
			//             src: "/assets/icon/guide-maskable.png",
			//             sizes: "192x192",
			//             purpose: "maskable",
			//             type: "image/png",
			//           },
			//         ],
			//       },
			//     ],
			//   },
			// },
		}
	},
	{ custom: true }
);
