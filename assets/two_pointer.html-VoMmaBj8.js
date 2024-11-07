import{_ as r,r as a,o as i,c,f as _,a as t,b as l,d as e,w as o,e as h}from"./app-zLZrqgWi.js";const f={},u=h('<h1 id="_3-10-双指针" tabindex="-1"><a class="header-anchor" href="#_3-10-双指针" aria-hidden="true">#</a> 3.10 双指针</h1><div class="hint-container info"><p class="hint-container-title">定义</p><p><strong>双指针（Two Pointers）</strong>：指的是在遍历元素的过程中，不是使用单个指针进行访问，而是使用两个指针进行访问，从而达到相应的目的。</p></div><ul><li>如果两个指针方向相反，则称为「对撞指针」；</li><li>如果两个指针方向相同，则称为「快慢指针」；</li><li>如果两个指针分别属于不同的数组 / 链表，则称为「分离双指针」。</li></ul><p>在数组的区间问题上，暴力算法的时间复杂度往往是 O(n^2)。而双指针利用了区间「单调性」的性质，可以将时间复杂度降到 O(n)。</p><h2 id="对撞指针" tabindex="-1"><a class="header-anchor" href="#对撞指针" aria-hidden="true">#</a> 对撞指针</h2><h2 id="快慢指针" tabindex="-1"><a class="header-anchor" href="#快慢指针" aria-hidden="true">#</a> 快慢指针</h2><h2 id="分离双指针" tabindex="-1"><a class="header-anchor" href="#分离双指针" aria-hidden="true">#</a> 分离双指针</h2>',7),g=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),l(" 相关题目")],-1),m=t("h4",{id:"数组双指针",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#数组双指针","aria-hidden":"true"},"#"),l(" 数组双指针")],-1),y=t("ul",null,[t("li",null,"对撞指针")],-1),x=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),p=t("td",{style:{"text-align":"center"}},"167",-1),b={style:{"text-align":"left"}},k={href:"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted",target:"_blank",rel:"noopener noreferrer"},w={style:{"text-align":"center"}},E={style:{"text-align":"left"}},M=t("code",null,"数组",-1),v=t("code",null,"双指针",-1),I=t("code",null,"二分查找",-1),T={style:{"text-align":"left"}},N=t("td",{style:{"text-align":"center"}},"344",-1),O={style:{"text-align":"left"}},L={href:"https://leetcode.com/problems/reverse-string",target:"_blank",rel:"noopener noreferrer"},R={style:{"text-align":"center"}},S={style:{"text-align":"left"}},V=t("code",null,"双指针",-1),q=t("code",null,"字符串",-1),z={style:{"text-align":"left"}},A=t("td",{style:{"text-align":"center"}},"345",-1),B={style:{"text-align":"left"}},C={href:"https://leetcode.com/problems/reverse-vowels-of-a-string",target:"_blank",rel:"noopener noreferrer"},D={style:{"text-align":"center"}},H={style:{"text-align":"left"}},K=t("code",null,"双指针",-1),P=t("code",null,"字符串",-1),U={style:{"text-align":"left"}},j=t("td",{style:{"text-align":"center"}},"125",-1),F={style:{"text-align":"left"}},G={href:"https://leetcode.com/problems/valid-palindrome",target:"_blank",rel:"noopener noreferrer"},J={style:{"text-align":"center"}},Q={style:{"text-align":"left"}},W=t("code",null,"双指针",-1),X=t("code",null,"字符串",-1),Y={style:{"text-align":"left"}},Z=t("td",{style:{"text-align":"center"}},"11",-1),$={style:{"text-align":"left"}},tt={href:"https://leetcode.com/problems/container-with-most-water",target:"_blank",rel:"noopener noreferrer"},et={style:{"text-align":"center"}},lt={style:{"text-align":"left"}},ot=t("code",null,"贪心",-1),st=t("code",null,"数组",-1),nt=t("code",null,"双指针",-1),dt={style:{"text-align":"left"}},_t=t("td",{style:{"text-align":"center"}},"611",-1),at={style:{"text-align":"left"}},rt={href:"https://leetcode.com/problems/valid-triangle-number",target:"_blank",rel:"noopener noreferrer"},it={style:{"text-align":"center"}},ct={style:{"text-align":"left"}},ht=t("code",null,"贪心",-1),ft=t("code",null,"数组",-1),ut=t("code",null,"双指针",-1),gt=t("code",null,"2+",-1),mt={style:{"text-align":"left"}},yt=t("td",{style:{"text-align":"center"}},"15",-1),xt={style:{"text-align":"left"}},pt={href:"https://leetcode.com/problems/3sum",target:"_blank",rel:"noopener noreferrer"},bt={style:{"text-align":"center"}},kt={style:{"text-align":"left"}},wt=t("code",null,"数组",-1),Et=t("code",null,"双指针",-1),Mt=t("code",null,"排序",-1),vt={style:{"text-align":"left"}},It=t("td",{style:{"text-align":"center"}},"16",-1),Tt={style:{"text-align":"left"}},Nt={href:"https://leetcode.com/problems/3sum-closest",target:"_blank",rel:"noopener noreferrer"},Ot={style:{"text-align":"center"}},Lt={style:{"text-align":"left"}},Rt=t("code",null,"数组",-1),St=t("code",null,"双指针",-1),Vt=t("code",null,"排序",-1),qt={style:{"text-align":"left"}},zt=t("td",{style:{"text-align":"center"}},"18",-1),At={style:{"text-align":"left"}},Bt={href:"https://leetcode.com/problems/4sum",target:"_blank",rel:"noopener noreferrer"},Ct={style:{"text-align":"center"}},Dt={style:{"text-align":"left"}},Ht=t("code",null,"数组",-1),Kt=t("code",null,"双指针",-1),Pt=t("code",null,"排序",-1),Ut={style:{"text-align":"left"}},jt=t("td",{style:{"text-align":"center"}},"259",-1),Ft={style:{"text-align":"left"}},Gt={href:"https://leetcode.com/problems/3sum-smaller",target:"_blank",rel:"noopener noreferrer"},Jt={style:{"text-align":"center"}},Qt={style:{"text-align":"left"}},Wt=t("code",null,"数组",-1),Xt=t("code",null,"双指针",-1),Yt=t("code",null,"二分查找",-1),Zt=t("code",null,"1+",-1),$t={style:{"text-align":"left"}},te=t("td",{style:{"text-align":"center"}},"658",-1),ee={style:{"text-align":"left"}},le={href:"https://leetcode.com/problems/find-k-closest-elements",target:"_blank",rel:"noopener noreferrer"},oe=t("td",{style:{"text-align":"center"}},null,-1),se={style:{"text-align":"left"}},ne=t("code",null,"数组",-1),de=t("code",null,"双指针",-1),_e=t("code",null,"二分查找",-1),ae=t("code",null,"3+",-1),re={style:{"text-align":"left"}},ie=t("td",{style:{"text-align":"center"}},"1099",-1),ce={style:{"text-align":"left"}},he={href:"https://leetcode.com/problems/two-sum-less-than-k",target:"_blank",rel:"noopener noreferrer"},fe=t("td",{style:{"text-align":"center"}},null,-1),ue={style:{"text-align":"left"}},ge=t("code",null,"数组",-1),me=t("code",null,"双指针",-1),ye=t("code",null,"二分查找",-1),xe=t("code",null,"1+",-1),pe={style:{"text-align":"left"}},be=t("td",{style:{"text-align":"center"}},"75",-1),ke={style:{"text-align":"left"}},we={href:"https://leetcode.com/problems/sort-colors",target:"_blank",rel:"noopener noreferrer"},Ee={style:{"text-align":"center"}},Me={style:{"text-align":"left"}},ve=t("code",null,"数组",-1),Ie=t("code",null,"双指针",-1),Te=t("code",null,"排序",-1),Ne={style:{"text-align":"left"}},Oe=t("td",{style:{"text-align":"center"}},"360",-1),Le={style:{"text-align":"left"}},Re={href:"https://leetcode.com/problems/sort-transformed-array",target:"_blank",rel:"noopener noreferrer"},Se=t("td",{style:{"text-align":"center"}},null,-1),Ve={style:{"text-align":"left"}},qe=t("code",null,"数组",-1),ze=t("code",null,"数学",-1),Ae=t("code",null,"双指针",-1),Be=t("code",null,"1+",-1),Ce={style:{"text-align":"left"}},De=t("td",{style:{"text-align":"center"}},"977",-1),He={style:{"text-align":"left"}},Ke={href:"https://leetcode.com/problems/squares-of-a-sorted-array",target:"_blank",rel:"noopener noreferrer"},Pe=t("td",{style:{"text-align":"center"}},null,-1),Ue={style:{"text-align":"left"}},je=t("code",null,"数组",-1),Fe=t("code",null,"双指针",-1),Ge=t("code",null,"排序",-1),Je={style:{"text-align":"left"}},Qe=t("td",{style:{"text-align":"center"}},"881",-1),We={style:{"text-align":"left"}},Xe={href:"https://leetcode.com/problems/boats-to-save-people",target:"_blank",rel:"noopener noreferrer"},Ye=t("td",{style:{"text-align":"center"}},null,-1),Ze={style:{"text-align":"left"}},$e=t("code",null,"贪心",-1),tl=t("code",null,"数组",-1),el=t("code",null,"双指针",-1),ll=t("code",null,"1+",-1),ol={style:{"text-align":"left"}},sl=t("td",{style:{"text-align":"center"}},"42",-1),nl={style:{"text-align":"left"}},dl={href:"https://leetcode.com/problems/trapping-rain-water",target:"_blank",rel:"noopener noreferrer"},_l={style:{"text-align":"center"}},al={style:{"text-align":"left"}},rl=t("code",null,"栈",-1),il=t("code",null,"数组",-1),cl=t("code",null,"双指针",-1),hl=t("code",null,"2+",-1),fl={style:{"text-align":"left"}},ul=t("td",{style:{"text-align":"center"}},"443",-1),gl={style:{"text-align":"left"}},ml={href:"https://leetcode.com/problems/string-compression",target:"_blank",rel:"noopener noreferrer"},yl={style:{"text-align":"center"}},xl={style:{"text-align":"left"}},pl=t("code",null,"双指针",-1),bl=t("code",null,"字符串",-1),kl={style:{"text-align":"left"}},wl=t("ul",null,[t("li",null,"快慢指针")],-1),El=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),Ml=t("td",{style:{"text-align":"center"}},"26",-1),vl={style:{"text-align":"left"}},Il={href:"https://leetcode.com/problems/remove-duplicates-from-sorted-array",target:"_blank",rel:"noopener noreferrer"},Tl={style:{"text-align":"center"}},Nl={style:{"text-align":"left"}},Ol=t("code",null,"数组",-1),Ll=t("code",null,"双指针",-1),Rl={style:{"text-align":"left"}},Sl=t("td",{style:{"text-align":"center"}},"80",-1),Vl={style:{"text-align":"left"}},ql={href:"https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii",target:"_blank",rel:"noopener noreferrer"},zl={style:{"text-align":"center"}},Al={style:{"text-align":"left"}},Bl=t("code",null,"数组",-1),Cl=t("code",null,"双指针",-1),Dl={style:{"text-align":"left"}},Hl=t("td",{style:{"text-align":"center"}},"27",-1),Kl={style:{"text-align":"left"}},Pl={href:"https://leetcode.com/problems/remove-element",target:"_blank",rel:"noopener noreferrer"},Ul={style:{"text-align":"center"}},jl={style:{"text-align":"left"}},Fl=t("code",null,"数组",-1),Gl=t("code",null,"双指针",-1),Jl={style:{"text-align":"left"}},Ql=t("td",{style:{"text-align":"center"}},"283",-1),Wl={style:{"text-align":"left"}},Xl={href:"https://leetcode.com/problems/move-zeroes",target:"_blank",rel:"noopener noreferrer"},Yl={style:{"text-align":"center"}},Zl={style:{"text-align":"left"}},$l=t("code",null,"数组",-1),to=t("code",null,"双指针",-1),eo={style:{"text-align":"left"}},lo=t("td",{style:{"text-align":"center"}},"845",-1),oo={style:{"text-align":"left"}},so={href:"https://leetcode.com/problems/longest-mountain-in-array",target:"_blank",rel:"noopener noreferrer"},no={style:{"text-align":"center"}},_o={style:{"text-align":"left"}},ao=t("code",null,"数组",-1),ro=t("code",null,"双指针",-1),io=t("code",null,"动态规划",-1),co=t("code",null,"1+",-1),ho={style:{"text-align":"left"}},fo=t("td",{style:{"text-align":"center"}},"88",-1),uo={style:{"text-align":"left"}},go={href:"https://leetcode.com/problems/merge-sorted-array",target:"_blank",rel:"noopener noreferrer"},mo={style:{"text-align":"center"}},yo={style:{"text-align":"left"}},xo=t("code",null,"数组",-1),po=t("code",null,"双指针",-1),bo=t("code",null,"排序",-1),ko={style:{"text-align":"left"}},wo=t("td",{style:{"text-align":"center"}},"719",-1),Eo={style:{"text-align":"left"}},Mo={href:"https://leetcode.com/problems/find-k-th-smallest-pair-distance",target:"_blank",rel:"noopener noreferrer"},vo=t("td",{style:{"text-align":"center"}},null,-1),Io={style:{"text-align":"left"}},To=t("code",null,"数组",-1),No=t("code",null,"双指针",-1),Oo=t("code",null,"二分查找",-1),Lo=t("code",null,"1+",-1),Ro={style:{"text-align":"left"}},So=t("td",{style:{"text-align":"center"}},"334",-1),Vo={style:{"text-align":"left"}},qo={href:"https://leetcode.com/problems/increasing-triplet-subsequence",target:"_blank",rel:"noopener noreferrer"},zo={style:{"text-align":"center"}},Ao={style:{"text-align":"left"}},Bo=t("code",null,"贪心",-1),Co=t("code",null,"数组",-1),Do={style:{"text-align":"left"}},Ho=t("td",{style:{"text-align":"center"}},"978",-1),Ko={style:{"text-align":"left"}},Po={href:"https://leetcode.com/problems/longest-turbulent-subarray",target:"_blank",rel:"noopener noreferrer"},Uo=t("td",{style:{"text-align":"center"}},null,-1),jo={style:{"text-align":"left"}},Fo=t("code",null,"数组",-1),Go=t("code",null,"动态规划",-1),Jo=t("code",null,"滑动窗口",-1),Qo={style:{"text-align":"left"}},Wo=t("td",{style:{"text-align":"center"}},"剑指 Offer 21",-1),Xo={style:{"text-align":"left"}},Yo={href:"https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof",target:"_blank",rel:"noopener noreferrer"},Zo={style:{"text-align":"center"}},$o={style:{"text-align":"left"}},ts=t("code",null,"数组",-1),es=t("code",null,"双指针",-1),ls=t("code",null,"排序",-1),os={style:{"text-align":"left"}},ss=t("ul",null,[t("li",null,"分离双指针")],-1),ns=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),ds=t("td",{style:{"text-align":"center"}},"350",-1),_s={style:{"text-align":"left"}},as={href:"https://leetcode.com/problems/intersection-of-two-arrays-ii",target:"_blank",rel:"noopener noreferrer"},rs=t("td",{style:{"text-align":"center"}},null,-1),is={style:{"text-align":"left"}},cs=t("code",null,"数组",-1),hs=t("code",null,"哈希表",-1),fs=t("code",null,"双指针",-1),us=t("code",null,"2+",-1),gs={style:{"text-align":"left"}},ms=t("td",{style:{"text-align":"center"}},"925",-1),ys={style:{"text-align":"left"}},xs={href:"https://leetcode.com/problems/long-pressed-name",target:"_blank",rel:"noopener noreferrer"},ps=t("td",{style:{"text-align":"center"}},null,-1),bs={style:{"text-align":"left"}},ks=t("code",null,"双指针",-1),ws=t("code",null,"字符串",-1),Es={style:{"text-align":"left"}},Ms=t("td",{style:{"text-align":"center"}},"844",-1),vs={style:{"text-align":"left"}},Is={href:"https://leetcode.com/problems/backspace-string-compare",target:"_blank",rel:"noopener noreferrer"},Ts={style:{"text-align":"center"}},Ns={style:{"text-align":"left"}},Os=t("code",null,"栈",-1),Ls=t("code",null,"双指针",-1),Rs=t("code",null,"字符串",-1),Ss=t("code",null,"1+",-1),Vs={style:{"text-align":"left"}},qs=t("td",{style:{"text-align":"center"}},"1229",-1),zs={style:{"text-align":"left"}},As={href:"https://leetcode.com/problems/meeting-scheduler",target:"_blank",rel:"noopener noreferrer"},Bs=t("td",{style:{"text-align":"center"}},null,-1),Cs={style:{"text-align":"left"}},Ds=t("code",null,"数组",-1),Hs=t("code",null,"双指针",-1),Ks=t("code",null,"排序",-1),Ps={style:{"text-align":"left"}},Us=t("td",{style:{"text-align":"center"}},"415",-1),js={style:{"text-align":"left"}},Fs={href:"https://leetcode.com/problems/add-strings",target:"_blank",rel:"noopener noreferrer"},Gs={style:{"text-align":"center"}},Js={style:{"text-align":"left"}},Qs=t("code",null,"数学",-1),Ws=t("code",null,"字符串",-1),Xs=t("code",null,"模拟",-1),Ys={style:{"text-align":"left"}};function Zs($s,tn){const n=a("ExternalLinkIcon"),s=a("RouterLink"),d=a("font");return i(),c("div",null,[u,_(" START TABLE "),_(" Please keep comment here to allow auto update "),_(" DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE "),g,m,y,_(" prettier-ignore "),t("table",null,[x,t("tbody",null,[t("tr",null,[p,t("td",b,[t("a",k,[l("两数之和 II - 输入有序数组"),e(n)])]),t("td",w,[e(s,{to:"/problem/0167.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",E,[e(s,{to:"/tag/array.html"},{default:o(()=>[M]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[v]),_:1}),l(),e(s,{to:"/tag/binary-search.html"},{default:o(()=>[I]),_:1})]),t("td",T,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[N,t("td",O,[t("a",L,[l("反转字符串"),e(n)])]),t("td",R,[e(s,{to:"/problem/0344.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",S,[e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[V]),_:1}),l(),e(s,{to:"/tag/string.html"},{default:o(()=>[q]),_:1})]),t("td",z,[e(d,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[A,t("td",B,[t("a",C,[l("反转字符串中的元音字母"),e(n)])]),t("td",D,[e(s,{to:"/problem/0345.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",H,[e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[K]),_:1}),l(),e(s,{to:"/tag/string.html"},{default:o(()=>[P]),_:1})]),t("td",U,[e(d,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[j,t("td",F,[t("a",G,[l("验证回文串"),e(n)])]),t("td",J,[e(s,{to:"/problem/0125.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",Q,[e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[W]),_:1}),l(),e(s,{to:"/tag/string.html"},{default:o(()=>[X]),_:1})]),t("td",Y,[e(d,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[Z,t("td",$,[t("a",tt,[l("盛最多水的容器"),e(n)])]),t("td",et,[e(s,{to:"/problem/0011.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",lt,[e(s,{to:"/tag/greedy.html"},{default:o(()=>[ot]),_:1}),l(),e(s,{to:"/tag/array.html"},{default:o(()=>[st]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[nt]),_:1})]),t("td",dt,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[_t,t("td",at,[t("a",rt,[l("有效三角形的个数"),e(n)])]),t("td",it,[e(s,{to:"/problem/0611.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",ct,[e(s,{to:"/tag/greedy.html"},{default:o(()=>[ht]),_:1}),l(),e(s,{to:"/tag/array.html"},{default:o(()=>[ft]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[ut]),_:1}),l(),gt]),t("td",mt,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[yt,t("td",xt,[t("a",pt,[l("三数之和"),e(n)])]),t("td",bt,[e(s,{to:"/problem/0015.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",kt,[e(s,{to:"/tag/array.html"},{default:o(()=>[wt]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[Et]),_:1}),l(),e(s,{to:"/tag/sorting.html"},{default:o(()=>[Mt]),_:1})]),t("td",vt,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[It,t("td",Tt,[t("a",Nt,[l("最接近的三数之和"),e(n)])]),t("td",Ot,[e(s,{to:"/problem/0016.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",Lt,[e(s,{to:"/tag/array.html"},{default:o(()=>[Rt]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[St]),_:1}),l(),e(s,{to:"/tag/sorting.html"},{default:o(()=>[Vt]),_:1})]),t("td",qt,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[zt,t("td",At,[t("a",Bt,[l("四数之和"),e(n)])]),t("td",Ct,[e(s,{to:"/problem/0018.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",Dt,[e(s,{to:"/tag/array.html"},{default:o(()=>[Ht]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[Kt]),_:1}),l(),e(s,{to:"/tag/sorting.html"},{default:o(()=>[Pt]),_:1})]),t("td",Ut,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[jt,t("td",Ft,[t("a",Gt,[l("较小的三数之和 🔒"),e(n)])]),t("td",Jt,[e(s,{to:"/problem/0259.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",Qt,[e(s,{to:"/tag/array.html"},{default:o(()=>[Wt]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[Xt]),_:1}),l(),e(s,{to:"/tag/binary-search.html"},{default:o(()=>[Yt]),_:1}),l(),Zt]),t("td",$t,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[te,t("td",ee,[t("a",le,[l("找到 K 个最接近的元素"),e(n)])]),oe,t("td",se,[e(s,{to:"/tag/array.html"},{default:o(()=>[ne]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[de]),_:1}),l(),e(s,{to:"/tag/binary-search.html"},{default:o(()=>[_e]),_:1}),l(),ae]),t("td",re,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[ie,t("td",ce,[t("a",he,[l("小于 K 的两数之和 🔒"),e(n)])]),fe,t("td",ue,[e(s,{to:"/tag/array.html"},{default:o(()=>[ge]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[me]),_:1}),l(),e(s,{to:"/tag/binary-search.html"},{default:o(()=>[ye]),_:1}),l(),xe]),t("td",pe,[e(d,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[be,t("td",ke,[t("a",we,[l("颜色分类"),e(n)])]),t("td",Ee,[e(s,{to:"/problem/0075.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",Me,[e(s,{to:"/tag/array.html"},{default:o(()=>[ve]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[Ie]),_:1}),l(),e(s,{to:"/tag/sorting.html"},{default:o(()=>[Te]),_:1})]),t("td",Ne,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[Oe,t("td",Le,[t("a",Re,[l("有序转化数组 🔒"),e(n)])]),Se,t("td",Ve,[e(s,{to:"/tag/array.html"},{default:o(()=>[qe]),_:1}),l(),e(s,{to:"/tag/math.html"},{default:o(()=>[ze]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[Ae]),_:1}),l(),Be]),t("td",Ce,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[De,t("td",He,[t("a",Ke,[l("有序数组的平方"),e(n)])]),Pe,t("td",Ue,[e(s,{to:"/tag/array.html"},{default:o(()=>[je]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[Fe]),_:1}),l(),e(s,{to:"/tag/sorting.html"},{default:o(()=>[Ge]),_:1})]),t("td",Je,[e(d,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[Qe,t("td",We,[t("a",Xe,[l("救生艇"),e(n)])]),Ye,t("td",Ze,[e(s,{to:"/tag/greedy.html"},{default:o(()=>[$e]),_:1}),l(),e(s,{to:"/tag/array.html"},{default:o(()=>[tl]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[el]),_:1}),l(),ll]),t("td",ol,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[sl,t("td",nl,[t("a",dl,[l("接雨水"),e(n)])]),t("td",_l,[e(s,{to:"/problem/0042.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",al,[e(s,{to:"/tag/stack.html"},{default:o(()=>[rl]),_:1}),l(),e(s,{to:"/tag/array.html"},{default:o(()=>[il]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[cl]),_:1}),l(),hl]),t("td",fl,[e(d,{color:"#ff334b"},{default:o(()=>[l("Hard")]),_:1})])]),t("tr",null,[ul,t("td",gl,[t("a",ml,[l("压缩字符串"),e(n)])]),t("td",yl,[e(s,{to:"/problem/0443.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",xl,[e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[pl]),_:1}),l(),e(s,{to:"/tag/string.html"},{default:o(()=>[bl]),_:1})]),t("td",kl,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])])])]),wl,_(" prettier-ignore "),t("table",null,[El,t("tbody",null,[t("tr",null,[Ml,t("td",vl,[t("a",Il,[l("删除有序数组中的重复项"),e(n)])]),t("td",Tl,[e(s,{to:"/problem/0026.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",Nl,[e(s,{to:"/tag/array.html"},{default:o(()=>[Ol]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[Ll]),_:1})]),t("td",Rl,[e(d,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[Sl,t("td",Vl,[t("a",ql,[l("删除有序数组中的重复项 II"),e(n)])]),t("td",zl,[e(s,{to:"/problem/0080.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",Al,[e(s,{to:"/tag/array.html"},{default:o(()=>[Bl]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[Cl]),_:1})]),t("td",Dl,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[Hl,t("td",Kl,[t("a",Pl,[l("移除元素"),e(n)])]),t("td",Ul,[e(s,{to:"/problem/0027.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",jl,[e(s,{to:"/tag/array.html"},{default:o(()=>[Fl]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[Gl]),_:1})]),t("td",Jl,[e(d,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[Ql,t("td",Wl,[t("a",Xl,[l("移动零"),e(n)])]),t("td",Yl,[e(s,{to:"/problem/0283.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",Zl,[e(s,{to:"/tag/array.html"},{default:o(()=>[$l]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[to]),_:1})]),t("td",eo,[e(d,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[lo,t("td",oo,[t("a",so,[l("数组中的最长山脉"),e(n)])]),t("td",no,[e(s,{to:"/problem/0845.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",_o,[e(s,{to:"/tag/array.html"},{default:o(()=>[ao]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[ro]),_:1}),l(),e(s,{to:"/tag/dynamic-programming.html"},{default:o(()=>[io]),_:1}),l(),co]),t("td",ho,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[fo,t("td",uo,[t("a",go,[l("合并两个有序数组"),e(n)])]),t("td",mo,[e(s,{to:"/problem/0088.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",yo,[e(s,{to:"/tag/array.html"},{default:o(()=>[xo]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[po]),_:1}),l(),e(s,{to:"/tag/sorting.html"},{default:o(()=>[bo]),_:1})]),t("td",ko,[e(d,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[wo,t("td",Eo,[t("a",Mo,[l("找出第 K 小的数对距离"),e(n)])]),vo,t("td",Io,[e(s,{to:"/tag/array.html"},{default:o(()=>[To]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[No]),_:1}),l(),e(s,{to:"/tag/binary-search.html"},{default:o(()=>[Oo]),_:1}),l(),Lo]),t("td",Ro,[e(d,{color:"#ff334b"},{default:o(()=>[l("Hard")]),_:1})])]),t("tr",null,[So,t("td",Vo,[t("a",qo,[l("递增的三元子序列"),e(n)])]),t("td",zo,[e(s,{to:"/problem/0334.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",Ao,[e(s,{to:"/tag/greedy.html"},{default:o(()=>[Bo]),_:1}),l(),e(s,{to:"/tag/array.html"},{default:o(()=>[Co]),_:1})]),t("td",Do,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[Ho,t("td",Ko,[t("a",Po,[l("最长湍流子数组"),e(n)])]),Uo,t("td",jo,[e(s,{to:"/tag/array.html"},{default:o(()=>[Fo]),_:1}),l(),e(s,{to:"/tag/dynamic-programming.html"},{default:o(()=>[Go]),_:1}),l(),e(s,{to:"/tag/sliding-window.html"},{default:o(()=>[Jo]),_:1})]),t("td",Qo,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[Wo,t("td",Xo,[t("a",Yo,[l("调整数组顺序使奇数位于偶数前面"),e(n)])]),t("td",Zo,[e(s,{to:"/offer/jz_offer_21_1.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",$o,[e(s,{to:"/tag/array.html"},{default:o(()=>[ts]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[es]),_:1}),l(),e(s,{to:"/tag/sorting.html"},{default:o(()=>[ls]),_:1})]),t("td",os,[e(d,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])])])]),ss,_(" prettier-ignore "),t("table",null,[ns,t("tbody",null,[t("tr",null,[ds,t("td",_s,[t("a",as,[l("两个数组的交集 II"),e(n)])]),rs,t("td",is,[e(s,{to:"/tag/array.html"},{default:o(()=>[cs]),_:1}),l(),e(s,{to:"/tag/hash-table.html"},{default:o(()=>[hs]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[fs]),_:1}),l(),us]),t("td",gs,[e(d,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[ms,t("td",ys,[t("a",xs,[l("长按键入"),e(n)])]),ps,t("td",bs,[e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[ks]),_:1}),l(),e(s,{to:"/tag/string.html"},{default:o(()=>[ws]),_:1})]),t("td",Es,[e(d,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[Ms,t("td",vs,[t("a",Is,[l("比较含退格的字符串"),e(n)])]),t("td",Ts,[e(s,{to:"/problem/0844.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",Ns,[e(s,{to:"/tag/stack.html"},{default:o(()=>[Os]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[Ls]),_:1}),l(),e(s,{to:"/tag/string.html"},{default:o(()=>[Rs]),_:1}),l(),Ss]),t("td",Vs,[e(d,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[qs,t("td",zs,[t("a",As,[l("安排会议日程 🔒"),e(n)])]),Bs,t("td",Cs,[e(s,{to:"/tag/array.html"},{default:o(()=>[Ds]),_:1}),l(),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[Hs]),_:1}),l(),e(s,{to:"/tag/sorting.html"},{default:o(()=>[Ks]),_:1})]),t("td",Ps,[e(d,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[Us,t("td",js,[t("a",Fs,[l("字符串相加"),e(n)])]),t("td",Gs,[e(s,{to:"/problem/0415.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",Js,[e(s,{to:"/tag/math.html"},{default:o(()=>[Qs]),_:1}),l(),e(s,{to:"/tag/string.html"},{default:o(()=>[Ws]),_:1}),l(),e(s,{to:"/tag/simulation.html"},{default:o(()=>[Xs]),_:1})]),t("td",Ys,[e(d,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])])])])])}const ln=r(f,[["render",Zs],["__file","two_pointer.html.vue"]]);export{ln as default};