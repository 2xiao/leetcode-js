import{_ as s,r as l,o,c as a,a as e,b as i,d as n,e as d}from"./app-lRzpMMWn.js";const u={},r=e("h1",{id:"_1-1-项目框架搭建",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-1-项目框架搭建","aria-hidden":"true"},"#"),i(" 1.1 项目框架搭建")],-1),c=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"摘要"),e("p",null,"项目框架搭建包括："),e("ul",null,[e("li",null,"定义项目结构（Mono-repo）"),e("li",null,"定义开发规范（eslint、commitlint、tsc、prettier）"),e("li",null,"选择打包工具（rollup）")])],-1),v=e("code",null,"git tag v1.1",-1),p={href:"https://github.com/2xiao/my-react/tree/v1.1",target:"_blank",rel:"noopener noreferrer"},m=d(`<h2 id="_1-选择项目结构" tabindex="-1"><a class="header-anchor" href="#_1-选择项目结构" aria-hidden="true">#</a> 1. 选择项目结构</h2><p>选择 Multi-repo 还是 Mono-repo？</p><ul><li>Multi-repo 每个库都有独立的仓库，逻辑清晰，但协同管理会更繁琐；</li><li>Mono-repo 可以方便的协同管理不同独立的库的生命周期，但是会有更高的操作复杂度。</li></ul><p>很多大型项目都使用Mono-repo结构管理，比如 Vue，Bable，我们也选择Mono-repo。</p><h2 id="_2-选择mono-repo工具" tabindex="-1"><a class="header-anchor" href="#_2-选择mono-repo工具" aria-hidden="true">#</a> 2. 选择Mono-repo工具</h2><p>简单工具：</p><ul><li>npm workspace</li><li>Yarn workspace</li><li>pnpm workspace</li></ul><p>专业工具：</p><ul><li>nx</li><li>bit</li><li>turborepo</li><li>rush</li><li>nx</li><li>lerna</li></ul><p>我们选择 <code>pnpm</code>,因为它相比其它打包工具，依赖安装更快，更规范（处理幽灵依赖问题）。</p><p>安装 <code>pnpm</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g pnpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>初始化<code>pnpm</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在根目录新增 <code>pnpm-workspace.yaml</code>文件，并初始化，写入下面的代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>packages:
  - &#39;packages/*&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>pnpm-workspace.yaml</code>文件定义了工作空间的根目录，也就是说，packages目录下的文件就是Mono-repo的子项目。</p><h2 id="_3-配置代码规范" tabindex="-1"><a class="header-anchor" href="#_3-配置代码规范" aria-hidden="true">#</a> 3. 配置代码规范</h2><p>代码规范检查与修复，使用 <code>eslint</code>。</p><p>安装：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm i eslint -D -w
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新增<code>.gitignore</code>文件，忽略<code>node_modules</code>目录下的文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>node_modules/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>初始化eslint：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx eslint --init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项选择如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>√ How would you like to use ESLint? 
· To check syntax and find problems   

√ What type of modules does your project use? 
· JavaScript modules (import/export)

√ Which framework does your project use? 
· none

√ Does your project use TypeScript? 
· Yes

√ Where does your code run? 
· node

√ What format do you want your config file to be in? 
· JSON

√ Would you like to install them now? 
· Yes

√ Which package manager do you want to use? 
· pnpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果报错，再执行下面的代码，手动安装这两个包和typescript:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm i -D -w @typescript-eslint/eslint-plugin, @typescript-eslint/parser, typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时，自动生成了一个<code>.eslintrc.json</code>文件，它是对eslint的一些配置，将<code>.eslintrc.json</code>文件配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
	&quot;env&quot;: {
		&quot;browser&quot;: true,
		&quot;es2021&quot;: true,
		&quot;node&quot;: true,
		&quot;jest&quot;: true
	},
	&quot;extends&quot;: [
		&quot;eslint:recommended&quot;,
		&quot;plugin:@typescript-eslint/recommended&quot;,
		&quot;prettier&quot;,
		&quot;plugin:prettier/recommended&quot;
	],
	&quot;parser&quot;: &quot;@typescript-eslint/parser&quot;,
	&quot;parserOptions&quot;: {
		&quot;ecmaVersion&quot;: &quot;latest&quot;,
		&quot;sourceType&quot;: &quot;module&quot;
	},
	&quot;plugins&quot;: [&quot;@typescript-eslint&quot;, &quot;prettier&quot;],
	&quot;rules&quot;: {
		&quot;prettier/prettier&quot;: &quot;error&quot;,
		&quot;no-case-declarations&quot;: &quot;off&quot;,
		&quot;no-constant-condition&quot;: &quot;off&quot;,
		&quot;@typescript-eslint/ban-ts-comment&quot;: &quot;off&quot;,
		&quot;@typescript-eslint/no-unused-vars&quot;: &quot;off&quot;,
		&quot;@typescript-eslint/no-var-requires&quot;: &quot;off&quot;,
		&quot;no-unused-vars&quot;: &quot;off&quot;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装ts的<code>eslint</code>插件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm i @typescript-eslint/eslint-plugin -D -w
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装代码风格检查 <code>prettier</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm i prettier -D -w
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新建<code>.prettierrc.json</code>配置文件，添加配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;printWidth&quot;: 80,
  &quot;tabWidth&quot;: 2,
  &quot;useTabs&quot;: true,
  &quot;singleQuote&quot;: true,
  &quot;semi&quot;: true,
  &quot;trailingComma&quot;: &quot;none&quot;,
  &quot;bracketSpacing&quot;: true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将<code>prettier</code>集成到<code>eslint</code>中，避免它和<code>eslint</code>冲突，其中：</p><ul><li><code>eslint-config-prettier</code>：覆盖<code>eslint</code>本身的规则配置</li><li><code>eslint-plugin-prettier</code>：用<code>prettier</code>来接管修复代码，即<code>eslint --fix</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm i eslint-config-prettier eslint-plugin-prettier -D -w
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在<code>package.json</code>的<code>&quot;scripts&quot;</code>中增加lint对应的执行脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;lint&quot;: &quot;eslint --ext .ts,.jsx,.tsx --fix --quiet ./packages&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-配置-commit-规范检查" tabindex="-1"><a class="header-anchor" href="#_4-配置-commit-规范检查" aria-hidden="true">#</a> 4. 配置 commit 规范检查</h2><p>安装<code>husky</code>，用于拦截commit命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm i husky -D -w
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>初始化<code>huaky</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx husky install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将刚才实现的格式化命令<code>pnpm lint</code>纳入commit时<code>husky</code>将执行的脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx husky add .husky/pre-commit &quot;pnpm lint&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用<code>commitlint</code>堆git提交信息进行检查：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm i commitlint @commitlint/cli @commitlint/config-conventional -D -w
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新建配置文件<code>.commitlintrc.js</code>，指定规范集:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
	extends: [&#39;@commitlint/config-conventional&#39;]
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把<code>commitlint</code>集成到<code>husky</code>中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx husky add .husky/commit-msg &quot;npx --no-install commitlint -e $HUSKY_GIT_PARAMS&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样之后所有的commit都必须符合规范集的格式：提交的类型: 摘要信息，即<code>&lt;type&gt;: &lt;subject&gt;</code>，例如：<code>git commit -m &quot;feat: project init&quot;</code></p><p>常见的type值如下：</p><ul><li><code>feat</code>: 新功能</li><li><code>fix</code>: 修复</li><li><code>docs</code>: 文档变更</li><li><code>style</code>: 代码格式</li><li><code>refactor</code>: 重构</li><li><code>perf</code>: 性能优化</li><li><code>test</code>: 增加测试</li><li><code>revert</code>: 回退</li><li><code>build</code>: 打包</li><li><code>chore</code>: 构建过程或辅助工具的变动</li></ul><h2 id="_5-配置-typescript" tabindex="-1"><a class="header-anchor" href="#_5-配置-typescript" aria-hidden="true">#</a> 5. 配置 typescript</h2><p>新建配置文件<code>tsconfig.json</code>，并添加以下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
	&quot;compileOnSave&quot;: true,
	&quot;include&quot;: [&quot;./packages/**/*&quot;],
	&quot;compilerOptions&quot;: {
		&quot;target&quot;: &quot;ESNext&quot;,
		&quot;useDefineForClassFields&quot;: true,
		&quot;module&quot;: &quot;ESNext&quot;,
		&quot;lib&quot;: [&quot;ESNext&quot;, &quot;DOM&quot;],
		&quot;moduleResolution&quot;: &quot;Node&quot;,
		&quot;strict&quot;: true,
		&quot;sourceMap&quot;: true,
		&quot;resolveJsonModule&quot;: true,
		&quot;isolatedModules&quot;: true,
		&quot;esModuleInterop&quot;: true,
		&quot;noEmit&quot;: true,
		&quot;noUnusedLocals&quot;: false,
		&quot;noUnusedParameters&quot;: false,
		&quot;noImplicitReturns&quot;: false,
		&quot;skipLibCheck&quot;: true,
		&quot;baseUrl&quot;: &quot;./packages&quot;,
		&quot;paths&quot;: {
			&quot;hostConfig&quot;: [&quot;./react-dom/src/hostConfig.ts&quot;]
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-选择打包工具" tabindex="-1"><a class="header-anchor" href="#_6-选择打包工具" aria-hidden="true">#</a> 6. 选择打包工具</h2>`,62),b={href:"https://bundlers.tooling.report/",target:"_blank",rel:"noopener noreferrer"},q=d(`<p>可以看到<code>webpack</code>是比较大而全的，但是我们要开发的是一个库，而不是业务代码，希望工具尽可能简洁，打包产物可读性高，所以选择<code>rollup</code>。</p><p>安装<code>rollup</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm i rollup -D -w
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新建文件夹<code>scripts/rollup</code>，用于放所有的打包脚本。</p>`,4),g=e("code",null,"git tag v1.1",-1),x={href:"https://github.com/2xiao/my-react/tree/v1.1",target:"_blank",rel:"noopener noreferrer"};function h(f,_){const t=l("ExternalLinkIcon");return o(),a("div",null,[r,c,e("p",null,[i("本节的相关代码可在"),v,i("查看："),e("a",p,[i("https://github.com/2xiao/my-react/tree/v1.1"),n(t)])]),m,e("p",null,[i("有一个比较权威的网站"),e("a",b,[i("https://bundlers.tooling.report/"),n(t)]),i("，比较了不同的打包工具的区别。")]),q,e("p",null,[i("至此，我们的项目框架就搭建完成了，相关代码可在"),g,i("查看，地址："),e("a",x,[i("https://github.com/2xiao/my-react/tree/v1.1"),n(t)])])])}const k=s(u,[["render",h],["__file","1.1.html.vue"]]);export{k as default};
