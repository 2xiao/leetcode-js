import{_ as p,r as e,o as c,c as i,a as n,b as s,d as a,w as l,e as u}from"./app-IMYAl8vI.js";const r={},k=n("h1",{id:"_6-实现-commit-阶段",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-实现-commit-阶段","aria-hidden":"true"},"#"),s(" 6. 实现 Commit 阶段")],-1),d={class:"hint-container info"},v=n("p",{class:"hint-container-title"},"摘要",-1),m=n("ul",null,[n("li",null,"实现 commitWork"),n("li",null,"实现 Mutation")],-1),b={href:"https://github.com/2xiao/my-react/tree/v1.6",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"git tag v1.6",-1),h=u(`<ul><li>触发更新（Update Trigger）</li><li>调度阶段（Schedule Phase）</li><li>协调阶段（Reconciliation Phase）</li><li>提交阶段（Commit Phase）</li></ul><p>之前我们已经实现了协调阶段（Reconciliation Phase）的 <code>beginWork</code> 和 <code>completeWork</code> 函数，接下来我们会实现提交阶段（Commit Phase）。</p><p>提交阶段的主要任务是将更新同步到实际的 DOM 中，执行 DOM 操作，例如创建、更新或删除 DOM 元素，反映组件树的最新状态，可以分为三个主要的子阶段：</p><ul><li><p><strong>Before Mutation (布局阶段):</strong></p><p>主要用于执行 DOM 操作之前的准备工作，包括类似 getSnapshotBeforeUpdate 生命周期函数的处理。在这个阶段会保存当前的布局信息，以便在后续的 DOM 操作中能够进行比较和优化。</p></li><li><p><strong>Mutation (DOM 操作阶段):</strong></p><p>执行实际 DOM 操作的阶段，包括创建、更新或删除 DOM 元素等。使用深度优先遍历的方式，逐个处理 Fiber 树中的节点，根据协调阶段生成的更新计划，执行相应的 DOM 操作。</p></li><li><p><strong>Layout (布局阶段):</strong></p><p>用于处理布局相关的任务，进行一些布局的优化，比如批量更新布局信息，减少浏览器的重排（reflow）次数，提高性能。其目标是最小化浏览器对 DOM 的重新计算布局，从而提高渲染性能。</p></li></ul><h2 id="_1-实现-commitwork" tabindex="-1"><a class="header-anchor" href="#_1-实现-commitwork" aria-hidden="true">#</a> 1. 实现 commitWork</h2><p>首先，在 <code>react-reconciler/src/workLoop.ts</code> 的 <code>renderRoot</code> 函数中，执行 <code>commitRoot</code> 函数。</p><ul><li><code>commitRoot</code> 是开始提交阶段的入口函数，调用 <code>commitWork</code> 函数进行实际的 DOM 操作；</li><li><code>commitWork</code> 函数是提交阶段的核心，它会判断根节点是否存在上述 3 个阶段需要执行的操作，并执行实际的 DOM 操作，并完成 Fiber 树的切换。</li></ul><p>我们先只实现 Mutation 阶段的功能，目前已支持的 DOM 操作有：<code>Placement | Update | ChildDeletion</code>，判断根节点的 <code>flags</code> 和 <code>subtreeFlags</code> 中是否包含这三个操作，如果有，则调用 <code>commitMutationEffects</code> 函数执行实际的 DOM 操作。</p><p>需要注意的是，由于 <code>current</code> 是与视图中真实 UI 对应的 Fiber 树，而 <code>workInProgress</code> 是触发更新后正在 Reconciler 中计算的 Fiber 树，因此在 DOM 操作执行完之后，需要将 <code>current</code> 指向 <code>workInProgress</code>，完成 Fiber 树的切换。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// packages/react-reconciler/src/workLoop.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> MutationMask<span class="token punctuation">,</span> NoFlags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./fiberFlags&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> commitMutationEffects <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./commitWork&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>

<span class="token keyword">function</span> <span class="token function">renderRoot</span><span class="token punctuation">(</span>root<span class="token operator">:</span> FiberRootNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 初始化 workInProgress 变量</span>
	<span class="token function">prepareFreshStack</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">do</span> <span class="token punctuation">{</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token comment">// 深度优先遍历</span>
			<span class="token function">workLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;workLoop发生错误：&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
			workInProgress <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 创建根 Fiber 树的 Root Fiber</span>
	<span class="token keyword">const</span> finishedWork <span class="token operator">=</span> root<span class="token punctuation">.</span>current<span class="token punctuation">.</span>alternate<span class="token punctuation">;</span>
	root<span class="token punctuation">.</span>finishedWork <span class="token operator">=</span> finishedWork<span class="token punctuation">;</span>

	<span class="token comment">// 提交阶段的入口函数</span>
	<span class="token function">commitRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">commitRoot</span><span class="token punctuation">(</span>root<span class="token operator">:</span> FiberRootNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> finishedWork <span class="token operator">=</span> root<span class="token punctuation">.</span>finishedWork<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;commit 阶段开始&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 重置</span>
	root<span class="token punctuation">.</span>finishedWork <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

	<span class="token comment">// 判断是否存在 3 个子阶段需要执行的操作</span>
	<span class="token keyword">const</span> subtreeHasEffects <span class="token operator">=</span>
		<span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>subtreeFlags <span class="token operator">&amp;</span> MutationMask<span class="token punctuation">)</span> <span class="token operator">!==</span> NoFlags<span class="token punctuation">;</span>
	<span class="token keyword">const</span> rootHasEffects <span class="token operator">=</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>flags <span class="token operator">&amp;</span> MutationMask<span class="token punctuation">)</span> <span class="token operator">!==</span> NoFlags<span class="token punctuation">;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>subtreeHasEffects <span class="token operator">||</span> rootHasEffects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO: BeforeMutation</span>

		<span class="token comment">// Mutation</span>
		<span class="token function">commitMutationEffects</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// Fiber 树切换，workInProgress 变成 current</span>
		root<span class="token punctuation">.</span>current <span class="token operator">=</span> finishedWork<span class="token punctuation">;</span>

		<span class="token comment">// TODO: Layout</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		root<span class="token punctuation">.</span>current <span class="token operator">=</span> finishedWork<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-实现-mutation" tabindex="-1"><a class="header-anchor" href="#_2-实现-mutation" aria-hidden="true">#</a> 2. 实现 Mutation</h2><p>接下来我们来实现 Mutation 阶段执行 DOM 操作的具体实现，新建 <code>packages/react-reconciler/src/commitWork.ts</code> 文件，定义 <code>commitMutationEffects</code> 函数。</p><p><code>commitMutationEffects</code> 函数负责深度优先遍历 Fiber 树，递归地向下寻找子节点是否存在 Mutation 阶段需要执行的 flags，如果遍历到某个节点，其所有子节点都不存在 flags（即 <code>subtreeFlags == NoFlags</code>），则停止向下，调用 <code>commitMutationEffectsOnFiber</code> 处理该节点的 flags，并且开始遍历其兄弟节点和父节点。</p><p><code>commitMutationEffectsOnFiber</code> 会根据每个节点的 flags 和更新计划中的信息执行相应的 DOM 操作。</p><p>以 <code>Placement</code> 为例：如果 Fiber 节点的标志中包含 <code>Placement</code>，表示需要在 DOM 中插入新元素，此时就需要取到该 Fiber 节点对应的 DOM，并将其插入对应的父 DOM 节点中。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// packages/react-reconciler/src/commitWork.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Container<span class="token punctuation">,</span> appendChildToContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;hostConfig&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FiberNode<span class="token punctuation">,</span> FiberRootNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./fiber&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
	ChildDeletion<span class="token punctuation">,</span>
	MutationMask<span class="token punctuation">,</span>
	NoFlags<span class="token punctuation">,</span>
	Placement<span class="token punctuation">,</span>
	Update
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./fiberFlags&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HostComponent<span class="token punctuation">,</span> HostRoot<span class="token punctuation">,</span> HostText <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./workTags&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> nextEffect<span class="token operator">:</span> FiberNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">commitMutationEffects</span> <span class="token operator">=</span> <span class="token punctuation">(</span>finishedWork<span class="token operator">:</span> FiberNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	nextEffect <span class="token operator">=</span> finishedWork<span class="token punctuation">;</span>

	<span class="token comment">// 深度优先遍历 Fiber 树，寻找更新 flags</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 向下遍历</span>
		<span class="token keyword">const</span> child<span class="token operator">:</span> FiberNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>
			<span class="token punctuation">(</span>nextEffect<span class="token punctuation">.</span>subtreeFlags <span class="token operator">&amp;</span> MutationMask<span class="token punctuation">)</span> <span class="token operator">!==</span> NoFlags <span class="token operator">&amp;&amp;</span>
			child <span class="token operator">!==</span> <span class="token keyword">null</span>
		<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 子节点存在 mutation 阶段需要执行的 flags</span>
			nextEffect <span class="token operator">=</span> child<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 子节点不存在 mutation 阶段需要执行的 flags 或没有子节点</span>
			<span class="token comment">// 向上遍历</span>
			up<span class="token operator">:</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 处理 flags</span>
				<span class="token function">commitMutationEffectsOnFiber</span><span class="token punctuation">(</span>nextEffect<span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token keyword">const</span> sibling<span class="token operator">:</span> FiberNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>sibling<span class="token punctuation">;</span>
				<span class="token comment">// 遍历兄弟节点</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>sibling <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					nextEffect <span class="token operator">=</span> sibling<span class="token punctuation">;</span>
					<span class="token keyword">break</span> up<span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token comment">// 遍历父节点</span>
				nextEffect <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>return<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">commitMutationEffectsOnFiber</span> <span class="token operator">=</span> <span class="token punctuation">(</span>finishedWork<span class="token operator">:</span> FiberNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> flags <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>flags<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>flags <span class="token operator">&amp;</span> Placement<span class="token punctuation">)</span> <span class="token operator">!==</span> NoFlags<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">commitPlacement</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">)</span><span class="token punctuation">;</span>
		finishedWork<span class="token punctuation">.</span>flags <span class="token operator">&amp;=</span> <span class="token operator">~</span>Placement<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>flags <span class="token operator">&amp;</span> Update<span class="token punctuation">)</span> <span class="token operator">!==</span> NoFlags<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Update</span>
		finishedWork<span class="token punctuation">.</span>flags <span class="token operator">&amp;=</span> <span class="token operator">~</span>Update<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>flags <span class="token operator">&amp;</span> ChildDeletion<span class="token punctuation">)</span> <span class="token operator">!==</span> NoFlags<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO ChildDeletion</span>
		finishedWork<span class="token punctuation">.</span>flags <span class="token operator">&amp;=</span> <span class="token operator">~</span>ChildDeletion<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 执行 DOM 插入操作，将 FiberNode 对应的 DOM 插入 parent DOM 中</span>
<span class="token keyword">const</span> <span class="token function-variable function">commitPlacement</span> <span class="token operator">=</span> <span class="token punctuation">(</span>finishedWork<span class="token operator">:</span> FiberNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;执行 Placement 操作&#39;</span><span class="token punctuation">,</span> finishedWork<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">const</span> hostParent <span class="token operator">=</span> <span class="token function">getHostParent</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>hostParent <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">appendPlacementNodeIntoContainer</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">,</span> hostParent<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 获取 parent DOM</span>
<span class="token keyword">const</span> getHostParent <span class="token operator">=</span> <span class="token punctuation">(</span>fiber<span class="token operator">:</span> FiberNode<span class="token punctuation">)</span><span class="token operator">:</span> Container <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> parent <span class="token operator">=</span> fiber<span class="token punctuation">.</span>return<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>parent <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> parentTag <span class="token operator">=</span> parent<span class="token punctuation">.</span>tag<span class="token punctuation">;</span>
		<span class="token comment">// 处理 Root 节点</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>parentTag <span class="token operator">===</span> HostRoot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">(</span>parent<span class="token punctuation">.</span>stateNode <span class="token keyword">as</span> FiberRootNode<span class="token punctuation">)</span><span class="token punctuation">.</span>container<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 处理原生 DOM 元素节点</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>parentTag <span class="token operator">===</span> HostComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> parent<span class="token punctuation">.</span>stateNode <span class="token keyword">as</span> Container<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			parent <span class="token operator">=</span> parent<span class="token punctuation">.</span>return<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;未找到 host parent&#39;</span><span class="token punctuation">,</span> fiber<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">appendPlacementNodeIntoContainer</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
	finishedWork<span class="token operator">:</span> FiberNode<span class="token punctuation">,</span>
	hostParent<span class="token operator">:</span> Container
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostComponent <span class="token operator">||</span> finishedWork<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostText<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">appendChildToContainer</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>stateNode<span class="token punctuation">,</span> hostParent<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> child <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>child <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">appendPlacementNodeIntoContainer</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> hostParent<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">let</span> sibling <span class="token operator">=</span> child<span class="token punctuation">.</span>sibling<span class="token punctuation">;</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span>sibling <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">appendPlacementNodeIntoContainer</span><span class="token punctuation">(</span>sibling<span class="token punctuation">,</span> hostParent<span class="token punctuation">)</span><span class="token punctuation">;</span>
				sibling <span class="token operator">=</span> sibling<span class="token punctuation">.</span>sibling<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>至此，我们就完成了 React 更新流程中的提交阶段（Commit Phase），实现了 DOM 树更新，下一节我们将开始实现 react-dom 包，跑通整个 React 首屏渲染流程。</p>`,18),w=n("code",null,"git tag v1.6",-1),g={href:"https://github.com/2xiao/my-react/tree/v1.6",target:"_blank",rel:"noopener noreferrer"};function y(_,M){const t=e("ExternalLinkIcon"),o=e("RouterLink");return c(),i("div",null,[k,n("div",d,[v,m,n("p",null,[s("相关代码可在 "),n("a",b,[f,a(t)]),s(" 查看")])]),n("p",null,[s("在 "),a(o,{to:"/react/4.html"},{default:l(()=>[s("第 4 节")]),_:1}),s(" 中，我们提到 React 更新流程有四个阶段：")]),h,n("p",null,[s("相关代码可在 "),w,s(" 查看，地址："),n("a",g,[s("https://github.com/2xiao/my-react/tree/v1.6"),a(t)])])])}const D=p(r,[["render",y],["__file","6.html.vue"]]);export{D as default};
