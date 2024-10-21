import{_ as r,r as a,o as c,c as i,f as _,a as t,b as l,d as e,w as o,e as h}from"./app-Byvqzvgg.js";const f={},g=h('<h1 id="_3-5-贪心算法" tabindex="-1"><a class="header-anchor" href="#_3-5-贪心算法" aria-hidden="true">#</a> 3.5 贪心算法</h1><h4 id="什么是贪心算法" tabindex="-1"><a class="header-anchor" href="#什么是贪心算法" aria-hidden="true">#</a> 什么是贪心算法？</h4><p>贪心算法，又称贪婪算法，在对问题求解时，总是做出在当前看来最好的选择，期望通过每个阶段的局部最优选择达到全局最优，但结果不一定最优。</p><h4 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h4><p>简单的说，问题能够分解成子问题来解决，子问题的最优解能递推到最终问题的最优解，就能用贪心算法的到最后的最优解，这种子问题最优解称为最优子结构。</p><h4 id="贪心算法与动态规划的区别" tabindex="-1"><a class="header-anchor" href="#贪心算法与动态规划的区别" aria-hidden="true">#</a> 贪心算法与动态规划的区别</h4><p>贪心算法与动态规划的不同点在于它对每个子问题的解决方案都做出当前的最优选择，不能回退，而动态规划会保留之前的运算结果，并根据之前的结果进行选择，有回退的功能，贪心是动态规划的理想化的情况。</p>',7),u=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),l(" 相关题目")],-1),m=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),y=t("td",{style:{"text-align":"center"}},"455",-1),x={style:{"text-align":"left"}},p={href:"https://leetcode.com/problems/assign-cookies",target:"_blank",rel:"noopener noreferrer"},b=t("td",{style:{"text-align":"center"}},null,-1),k={style:{"text-align":"left"}},M=t("code",null,"贪心",-1),E=t("code",null,"数组",-1),v=t("code",null,"双指针",-1),w=t("code",null,"1+",-1),T={style:{"text-align":"left"}},I=t("td",{style:{"text-align":"center"}},"860",-1),N={style:{"text-align":"left"}},L={href:"https://leetcode.com/problems/lemonade-change",target:"_blank",rel:"noopener noreferrer"},R=t("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},V=t("code",null,"贪心",-1),q=t("code",null,"数组",-1),A={style:{"text-align":"left"}},B=t("td",{style:{"text-align":"center"}},"56",-1),C={style:{"text-align":"left"}},D={href:"https://leetcode.com/problems/merge-intervals",target:"_blank",rel:"noopener noreferrer"},O={style:{"text-align":"center"}},j={style:{"text-align":"left"}},H=t("code",null,"数组",-1),K=t("code",null,"排序",-1),P={style:{"text-align":"left"}},U=t("td",{style:{"text-align":"center"}},"435",-1),z={style:{"text-align":"left"}},F={href:"https://leetcode.com/problems/non-overlapping-intervals",target:"_blank",rel:"noopener noreferrer"},G=t("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},Q=t("code",null,"贪心",-1),W=t("code",null,"数组",-1),X=t("code",null,"动态规划",-1),Y=t("code",null,"1+",-1),Z={style:{"text-align":"left"}},$=t("td",{style:{"text-align":"center"}},"452",-1),tt={style:{"text-align":"left"}},et={href:"https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons",target:"_blank",rel:"noopener noreferrer"},lt={style:{"text-align":"center"}},ot={style:{"text-align":"left"}},nt=t("code",null,"贪心",-1),st=t("code",null,"数组",-1),dt=t("code",null,"排序",-1),_t={style:{"text-align":"left"}},at=t("td",{style:{"text-align":"center"}},"55",-1),rt={style:{"text-align":"left"}},ct={href:"https://leetcode.com/problems/jump-game",target:"_blank",rel:"noopener noreferrer"},it={style:{"text-align":"center"}},ht={style:{"text-align":"left"}},ft=t("code",null,"贪心",-1),gt=t("code",null,"数组",-1),ut=t("code",null,"动态规划",-1),mt={style:{"text-align":"left"}},yt=t("td",{style:{"text-align":"center"}},"45",-1),xt={style:{"text-align":"left"}},pt={href:"https://leetcode.com/problems/jump-game-ii",target:"_blank",rel:"noopener noreferrer"},bt={style:{"text-align":"center"}},kt={style:{"text-align":"left"}},Mt=t("code",null,"贪心",-1),Et=t("code",null,"数组",-1),vt=t("code",null,"动态规划",-1),wt={style:{"text-align":"left"}},Tt=t("td",{style:{"text-align":"center"}},"392",-1),It={style:{"text-align":"left"}},Nt={href:"https://leetcode.com/problems/is-subsequence",target:"_blank",rel:"noopener noreferrer"},Lt={style:{"text-align":"center"}},Rt={style:{"text-align":"left"}},St=t("code",null,"双指针",-1),Vt=t("code",null,"字符串",-1),qt=t("code",null,"动态规划",-1),At={style:{"text-align":"left"}},Bt=t("td",{style:{"text-align":"center"}},"122",-1),Ct={style:{"text-align":"left"}},Dt={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii",target:"_blank",rel:"noopener noreferrer"},Ot={style:{"text-align":"center"}},jt={style:{"text-align":"left"}},Ht=t("code",null,"贪心",-1),Kt=t("code",null,"数组",-1),Pt=t("code",null,"动态规划",-1),Ut={style:{"text-align":"left"}},zt=t("td",{style:{"text-align":"center"}},"561",-1),Ft={style:{"text-align":"left"}},Gt={href:"https://leetcode.com/problems/array-partition",target:"_blank",rel:"noopener noreferrer"},Jt=t("td",{style:{"text-align":"center"}},null,-1),Qt={style:{"text-align":"left"}},Wt=t("code",null,"贪心",-1),Xt=t("code",null,"数组",-1),Yt=t("code",null,"计数排序",-1),Zt=t("code",null,"1+",-1),$t={style:{"text-align":"left"}},te=t("td",{style:{"text-align":"center"}},"1710",-1),ee={style:{"text-align":"left"}},le={href:"https://leetcode.com/problems/maximum-units-on-a-truck",target:"_blank",rel:"noopener noreferrer"},oe=t("td",{style:{"text-align":"center"}},null,-1),ne={style:{"text-align":"left"}},se=t("code",null,"贪心",-1),de=t("code",null,"数组",-1),_e=t("code",null,"排序",-1),ae={style:{"text-align":"left"}},re=t("td",{style:{"text-align":"center"}},"1217",-1),ce={style:{"text-align":"left"}},ie={href:"https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position",target:"_blank",rel:"noopener noreferrer"},he=t("td",{style:{"text-align":"center"}},null,-1),fe={style:{"text-align":"left"}},ge=t("code",null,"贪心",-1),ue=t("code",null,"数组",-1),me=t("code",null,"数学",-1),ye={style:{"text-align":"left"}},xe=t("td",{style:{"text-align":"center"}},"1247",-1),pe={style:{"text-align":"left"}},be={href:"https://leetcode.com/problems/minimum-swaps-to-make-strings-equal",target:"_blank",rel:"noopener noreferrer"},ke=t("td",{style:{"text-align":"center"}},null,-1),Me={style:{"text-align":"left"}},Ee=t("code",null,"贪心",-1),ve=t("code",null,"数学",-1),we=t("code",null,"字符串",-1),Te={style:{"text-align":"left"}},Ie=t("td",{style:{"text-align":"center"}},"1400",-1),Ne={style:{"text-align":"left"}},Le={href:"https://leetcode.com/problems/construct-k-palindrome-strings",target:"_blank",rel:"noopener noreferrer"},Re=t("td",{style:{"text-align":"center"}},null,-1),Se={style:{"text-align":"left"}},Ve=t("code",null,"贪心",-1),qe=t("code",null,"哈希表",-1),Ae=t("code",null,"字符串",-1),Be=t("code",null,"1+",-1),Ce={style:{"text-align":"left"}},De=t("td",{style:{"text-align":"center"}},"921",-1),Oe={style:{"text-align":"left"}},je={href:"https://leetcode.com/problems/minimum-add-to-make-parentheses-valid",target:"_blank",rel:"noopener noreferrer"},He={style:{"text-align":"center"}},Ke={style:{"text-align":"left"}},Pe=t("code",null,"栈",-1),Ue=t("code",null,"贪心",-1),ze=t("code",null,"字符串",-1),Fe={style:{"text-align":"left"}},Ge=t("td",{style:{"text-align":"center"}},"1029",-1),Je={style:{"text-align":"left"}},Qe={href:"https://leetcode.com/problems/two-city-scheduling",target:"_blank",rel:"noopener noreferrer"},We=t("td",{style:{"text-align":"center"}},null,-1),Xe={style:{"text-align":"left"}},Ye=t("code",null,"贪心",-1),Ze=t("code",null,"数组",-1),$e=t("code",null,"排序",-1),tl={style:{"text-align":"left"}},el=t("td",{style:{"text-align":"center"}},"1605",-1),ll={style:{"text-align":"left"}},ol={href:"https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums",target:"_blank",rel:"noopener noreferrer"},nl=t("td",{style:{"text-align":"center"}},null,-1),sl={style:{"text-align":"left"}},dl=t("code",null,"贪心",-1),_l=t("code",null,"数组",-1),al=t("code",null,"矩阵",-1),rl={style:{"text-align":"left"}},cl=t("td",{style:{"text-align":"center"}},"135",-1),il={style:{"text-align":"left"}},hl={href:"https://leetcode.com/problems/candy",target:"_blank",rel:"noopener noreferrer"},fl={style:{"text-align":"center"}},gl={style:{"text-align":"left"}},ul=t("code",null,"贪心",-1),ml=t("code",null,"数组",-1),yl={style:{"text-align":"left"}},xl=t("td",{style:{"text-align":"center"}},"134",-1),pl={style:{"text-align":"left"}},bl={href:"https://leetcode.com/problems/gas-station",target:"_blank",rel:"noopener noreferrer"},kl={style:{"text-align":"center"}},Ml={style:{"text-align":"left"}},El=t("code",null,"贪心",-1),vl=t("code",null,"数组",-1),wl={style:{"text-align":"left"}},Tl=t("td",{style:{"text-align":"center"}},"53",-1),Il={style:{"text-align":"left"}},Nl={href:"https://leetcode.com/problems/maximum-subarray",target:"_blank",rel:"noopener noreferrer"},Ll={style:{"text-align":"center"}},Rl={style:{"text-align":"left"}},Sl=t("code",null,"数组",-1),Vl=t("code",null,"分治",-1),ql=t("code",null,"动态规划",-1),Al={style:{"text-align":"left"}},Bl=t("td",{style:{"text-align":"center"}},"376",-1),Cl={style:{"text-align":"left"}},Dl={href:"https://leetcode.com/problems/wiggle-subsequence",target:"_blank",rel:"noopener noreferrer"},Ol=t("td",{style:{"text-align":"center"}},null,-1),jl={style:{"text-align":"left"}},Hl=t("code",null,"贪心",-1),Kl=t("code",null,"数组",-1),Pl=t("code",null,"动态规划",-1),Ul={style:{"text-align":"left"}},zl=t("td",{style:{"text-align":"center"}},"738",-1),Fl={style:{"text-align":"left"}},Gl={href:"https://leetcode.com/problems/monotone-increasing-digits",target:"_blank",rel:"noopener noreferrer"},Jl=t("td",{style:{"text-align":"center"}},null,-1),Ql={style:{"text-align":"left"}},Wl=t("code",null,"贪心",-1),Xl=t("code",null,"数学",-1),Yl={style:{"text-align":"left"}},Zl=t("td",{style:{"text-align":"center"}},"402",-1),$l={style:{"text-align":"left"}},to={href:"https://leetcode.com/problems/remove-k-digits",target:"_blank",rel:"noopener noreferrer"},eo=t("td",{style:{"text-align":"center"}},null,-1),lo={style:{"text-align":"left"}},oo=t("code",null,"栈",-1),no=t("code",null,"贪心",-1),so=t("code",null,"字符串",-1),_o=t("code",null,"1+",-1),ao={style:{"text-align":"left"}},ro=t("td",{style:{"text-align":"center"}},"861",-1),co={style:{"text-align":"left"}},io={href:"https://leetcode.com/problems/score-after-flipping-matrix",target:"_blank",rel:"noopener noreferrer"},ho=t("td",{style:{"text-align":"center"}},null,-1),fo={style:{"text-align":"left"}},go=t("code",null,"贪心",-1),uo=t("code",null,"位运算",-1),mo=t("code",null,"数组",-1),yo=t("code",null,"1+",-1),xo={style:{"text-align":"left"}},po=t("td",{style:{"text-align":"center"}},"670",-1),bo={style:{"text-align":"left"}},ko={href:"https://leetcode.com/problems/maximum-swap",target:"_blank",rel:"noopener noreferrer"},Mo={style:{"text-align":"center"}},Eo={style:{"text-align":"left"}},vo=t("code",null,"贪心",-1),wo=t("code",null,"数学",-1),To={style:{"text-align":"left"}};function Io(No,Lo){const s=a("ExternalLinkIcon"),n=a("RouterLink"),d=a("font");return c(),i("div",null,[g,_(" START TABLE "),_(" Please keep comment here to allow auto update "),_(" DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE "),u,_(" prettier-ignore "),t("table",null,[m,t("tbody",null,[t("tr",null,[y,t("td",x,[t("a",p,[l("分发饼干"),e(s)])]),b,t("td",k,[e(n,{to:"/tag/greedy.html"},{default:o(()=>[M]),_:1}),l(),e(n,{to:"/tag/array.html"},{default:o(()=>[E]),_:1}),l(),e(n,{to:"/tag/two-pointers.html"},{default:o(()=>[v]),_:1}),l(),w]),t("td",T,[e(d,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[I,t("td",N,[t("a",L,[l("柠檬水找零"),e(s)])]),R,t("td",S,[e(n,{to:"/tag/greedy.html"},{default:o(()=>[V]),_:1}),l(),e(n,{to:"/tag/array.html"},{default:o(()=>[q]),_:1})]),t("td",A,[e(d,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[B,t("td",C,[t("a",D,[l("合并区间"),e(s)])]),t("td",O,[e(n,{to:"/problem/0056.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",j,[e(n,{to:"/tag/array.html"},{default:o(()=>[H]),_:1}),l(),e(n,{to:"/tag/sorting.html"},{default:o(()=>[K]),_:1})]),t("td",P,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[U,t("td",z,[t("a",F,[l("无重叠区间"),e(s)])]),G,t("td",J,[e(n,{to:"/tag/greedy.html"},{default:o(()=>[Q]),_:1}),l(),e(n,{to:"/tag/array.html"},{default:o(()=>[W]),_:1}),l(),e(n,{to:"/tag/dynamic-programming.html"},{default:o(()=>[X]),_:1}),l(),Y]),t("td",Z,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[$,t("td",tt,[t("a",et,[l("用最少数量的箭引爆气球"),e(s)])]),t("td",lt,[e(n,{to:"/problem/0452.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",ot,[e(n,{to:"/tag/greedy.html"},{default:o(()=>[nt]),_:1}),l(),e(n,{to:"/tag/array.html"},{default:o(()=>[st]),_:1}),l(),e(n,{to:"/tag/sorting.html"},{default:o(()=>[dt]),_:1})]),t("td",_t,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[at,t("td",rt,[t("a",ct,[l("跳跃游戏"),e(s)])]),t("td",it,[e(n,{to:"/problem/0055.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",ht,[e(n,{to:"/tag/greedy.html"},{default:o(()=>[ft]),_:1}),l(),e(n,{to:"/tag/array.html"},{default:o(()=>[gt]),_:1}),l(),e(n,{to:"/tag/dynamic-programming.html"},{default:o(()=>[ut]),_:1})]),t("td",mt,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[yt,t("td",xt,[t("a",pt,[l("跳跃游戏 II"),e(s)])]),t("td",bt,[e(n,{to:"/problem/0045.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",kt,[e(n,{to:"/tag/greedy.html"},{default:o(()=>[Mt]),_:1}),l(),e(n,{to:"/tag/array.html"},{default:o(()=>[Et]),_:1}),l(),e(n,{to:"/tag/dynamic-programming.html"},{default:o(()=>[vt]),_:1})]),t("td",wt,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[Tt,t("td",It,[t("a",Nt,[l("判断子序列"),e(s)])]),t("td",Lt,[e(n,{to:"/problem/0392.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",Rt,[e(n,{to:"/tag/two-pointers.html"},{default:o(()=>[St]),_:1}),l(),e(n,{to:"/tag/string.html"},{default:o(()=>[Vt]),_:1}),l(),e(n,{to:"/tag/dynamic-programming.html"},{default:o(()=>[qt]),_:1})]),t("td",At,[e(d,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[Bt,t("td",Ct,[t("a",Dt,[l("买卖股票的最佳时机 II"),e(s)])]),t("td",Ot,[e(n,{to:"/problem/0122.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",jt,[e(n,{to:"/tag/greedy.html"},{default:o(()=>[Ht]),_:1}),l(),e(n,{to:"/tag/array.html"},{default:o(()=>[Kt]),_:1}),l(),e(n,{to:"/tag/dynamic-programming.html"},{default:o(()=>[Pt]),_:1})]),t("td",Ut,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[zt,t("td",Ft,[t("a",Gt,[l("数组拆分"),e(s)])]),Jt,t("td",Qt,[e(n,{to:"/tag/greedy.html"},{default:o(()=>[Wt]),_:1}),l(),e(n,{to:"/tag/array.html"},{default:o(()=>[Xt]),_:1}),l(),e(n,{to:"/tag/counting-sort.html"},{default:o(()=>[Yt]),_:1}),l(),Zt]),t("td",$t,[e(d,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[te,t("td",ee,[t("a",le,[l("卡车上的最大单元数"),e(s)])]),oe,t("td",ne,[e(n,{to:"/tag/greedy.html"},{default:o(()=>[se]),_:1}),l(),e(n,{to:"/tag/array.html"},{default:o(()=>[de]),_:1}),l(),e(n,{to:"/tag/sorting.html"},{default:o(()=>[_e]),_:1})]),t("td",ae,[e(d,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[re,t("td",ce,[t("a",ie,[l("玩筹码"),e(s)])]),he,t("td",fe,[e(n,{to:"/tag/greedy.html"},{default:o(()=>[ge]),_:1}),l(),e(n,{to:"/tag/array.html"},{default:o(()=>[ue]),_:1}),l(),e(n,{to:"/tag/math.html"},{default:o(()=>[me]),_:1})]),t("td",ye,[e(d,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[xe,t("td",pe,[t("a",be,[l("交换字符使得字符串相同"),e(s)])]),ke,t("td",Me,[e(n,{to:"/tag/greedy.html"},{default:o(()=>[Ee]),_:1}),l(),e(n,{to:"/tag/math.html"},{default:o(()=>[ve]),_:1}),l(),e(n,{to:"/tag/string.html"},{default:o(()=>[we]),_:1})]),t("td",Te,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[Ie,t("td",Ne,[t("a",Le,[l("构造 K 个回文字符串"),e(s)])]),Re,t("td",Se,[e(n,{to:"/tag/greedy.html"},{default:o(()=>[Ve]),_:1}),l(),e(n,{to:"/tag/hash-table.html"},{default:o(()=>[qe]),_:1}),l(),e(n,{to:"/tag/string.html"},{default:o(()=>[Ae]),_:1}),l(),Be]),t("td",Ce,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[De,t("td",Oe,[t("a",je,[l("使括号有效的最少添加"),e(s)])]),t("td",He,[e(n,{to:"/problem/0921.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",Ke,[e(n,{to:"/tag/stack.html"},{default:o(()=>[Pe]),_:1}),l(),e(n,{to:"/tag/greedy.html"},{default:o(()=>[Ue]),_:1}),l(),e(n,{to:"/tag/string.html"},{default:o(()=>[ze]),_:1})]),t("td",Fe,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[Ge,t("td",Je,[t("a",Qe,[l("两地调度"),e(s)])]),We,t("td",Xe,[e(n,{to:"/tag/greedy.html"},{default:o(()=>[Ye]),_:1}),l(),e(n,{to:"/tag/array.html"},{default:o(()=>[Ze]),_:1}),l(),e(n,{to:"/tag/sorting.html"},{default:o(()=>[$e]),_:1})]),t("td",tl,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[el,t("td",ll,[t("a",ol,[l("给定行和列的和求可行矩阵"),e(s)])]),nl,t("td",sl,[e(n,{to:"/tag/greedy.html"},{default:o(()=>[dl]),_:1}),l(),e(n,{to:"/tag/array.html"},{default:o(()=>[_l]),_:1}),l(),e(n,{to:"/tag/matrix.html"},{default:o(()=>[al]),_:1})]),t("td",rl,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[cl,t("td",il,[t("a",hl,[l("分发糖果"),e(s)])]),t("td",fl,[e(n,{to:"/problem/0135.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",gl,[e(n,{to:"/tag/greedy.html"},{default:o(()=>[ul]),_:1}),l(),e(n,{to:"/tag/array.html"},{default:o(()=>[ml]),_:1})]),t("td",yl,[e(d,{color:"#ff334b"},{default:o(()=>[l("Hard")]),_:1})])]),t("tr",null,[xl,t("td",pl,[t("a",bl,[l("加油站"),e(s)])]),t("td",kl,[e(n,{to:"/problem/0134.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",Ml,[e(n,{to:"/tag/greedy.html"},{default:o(()=>[El]),_:1}),l(),e(n,{to:"/tag/array.html"},{default:o(()=>[vl]),_:1})]),t("td",wl,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[Tl,t("td",Il,[t("a",Nl,[l("最大子数组和"),e(s)])]),t("td",Ll,[e(n,{to:"/problem/0053.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",Rl,[e(n,{to:"/tag/array.html"},{default:o(()=>[Sl]),_:1}),l(),e(n,{to:"/tag/divide-and-conquer.html"},{default:o(()=>[Vl]),_:1}),l(),e(n,{to:"/tag/dynamic-programming.html"},{default:o(()=>[ql]),_:1})]),t("td",Al,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[Bl,t("td",Cl,[t("a",Dl,[l("摆动序列"),e(s)])]),Ol,t("td",jl,[e(n,{to:"/tag/greedy.html"},{default:o(()=>[Hl]),_:1}),l(),e(n,{to:"/tag/array.html"},{default:o(()=>[Kl]),_:1}),l(),e(n,{to:"/tag/dynamic-programming.html"},{default:o(()=>[Pl]),_:1})]),t("td",Ul,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[zl,t("td",Fl,[t("a",Gl,[l("单调递增的数字"),e(s)])]),Jl,t("td",Ql,[e(n,{to:"/tag/greedy.html"},{default:o(()=>[Wl]),_:1}),l(),e(n,{to:"/tag/math.html"},{default:o(()=>[Xl]),_:1})]),t("td",Yl,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[Zl,t("td",$l,[t("a",to,[l("移掉 K 位数字"),e(s)])]),eo,t("td",lo,[e(n,{to:"/tag/stack.html"},{default:o(()=>[oo]),_:1}),l(),e(n,{to:"/tag/greedy.html"},{default:o(()=>[no]),_:1}),l(),e(n,{to:"/tag/string.html"},{default:o(()=>[so]),_:1}),l(),_o]),t("td",ao,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[ro,t("td",co,[t("a",io,[l("翻转矩阵后的得分"),e(s)])]),ho,t("td",fo,[e(n,{to:"/tag/greedy.html"},{default:o(()=>[go]),_:1}),l(),e(n,{to:"/tag/bit-manipulation.html"},{default:o(()=>[uo]),_:1}),l(),e(n,{to:"/tag/array.html"},{default:o(()=>[mo]),_:1}),l(),yo]),t("td",xo,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[po,t("td",bo,[t("a",ko,[l("最大交换"),e(s)])]),t("td",Mo,[e(n,{to:"/problem/0670.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",Eo,[e(n,{to:"/tag/greedy.html"},{default:o(()=>[vo]),_:1}),l(),e(n,{to:"/tag/math.html"},{default:o(()=>[wo]),_:1})]),t("td",To,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])])])])])}const So=r(f,[["render",Io],["__file","greedy.html.vue"]]);export{So as default};