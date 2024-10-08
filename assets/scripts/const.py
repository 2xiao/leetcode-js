# -*- coding: utf-8 -*-
leetcode_path = '../../src/leetcode/'
problem_path = '../../src/leetcode/problem/'
problem_readme = '../../src/leetcode/problem/README.md'
config_path = '../../src/.vuepress/sidebar.ts'
solution_path = '../../src/leetcode/solution/'
solotion_list_path = '../../src/leetcode/outline/solution_list.md'
plan_list_path = '../../src/leetcode/outline/plan/'
tag_list_path = '../../src/leetcode/outline/tag/'
tag_list_readme = '../../src/leetcode/outline/tag/README.md'
tag_absolute_path = '/leetcode/outline/tag/'
categories_path = '../origins/categories_list.md'
origin_path = '../origins/'
problem_online_path = 'https://2xiao.github.io/leetcode-js/leetcode/problem/'

tag_list_css = '\n\n<style>\n.blue {\n    background-color: #096dd9;\n    padding: 0.25rem 0.5rem;\n    margin: 0;\n    font-size: 0.85em;\n    border-radius: 3px;\n    color: white;\n    font-weight: 500;\n}\ntable th:first-of-type { width: 10%; }\ntable th:nth-of-type(2) { width: 35%; }\ntable th:nth-of-type(3) { width: 10%; }\ntable th:nth-of-type(4) { width: 35%; }\ntable th:nth-of-type(5) { width: 10%; }\n</style>\n'

offer_dict = {
    "shu-zu-zhong-zhong-fu-de-shu-zi-lcof": "剑指 Offer 03,jz_offer_03_1,数组中重复的数字",
    "er-wei-shu-zu-zhong-de-cha-zhao-lcof": "剑指 Offer 04,jz_offer_04_1,二维数组中的查找",
    "ti-huan-kong-ge-lcof": "剑指 Offer 05,jz_offer_05_1,替换空格",
    "cong-wei-dao-tou-da-yin-lian-biao-lcof": "剑指 Offer 06,jz_offer_06_1,从尾到头打印链表",
    "zhong-jian-er-cha-shu-lcof": "剑指 Offer 07,jz_offer_07_1,重建二叉树",
    "yong-liang-ge-zhan-shi-xian-dui-lie-lcof": "剑指 Offer 09,jz_offer_09_1,用两个栈实现队列",
    "fei-bo-na-qi-shu-lie-lcof": "剑指 Offer 10 - I,jz_offer_10_1,斐波那契数列",
    "qing-wa-tiao-tai-jie-wen-ti-lcof": "剑指 Offer 10 - II,jz_offer_10_2,青蛙跳台阶问题",
    "xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof": "剑指 Offer 11,jz_offer_11_1,旋转数组的最小数字",
    "ju-zhen-zhong-de-lu-jing-lcof": "剑指 Offer 12,jz_offer_12_1,矩阵中的路径",
    "ji-qi-ren-de-yun-dong-fan-wei-lcof": "剑指 Offer 13,jz_offer_13_1,机器人的运动范围",
    "jian-sheng-zi-lcof": "剑指 Offer 14 - I,jz_offer_14_1,剪绳子",
    "jian-sheng-zi-ii-lcof": "剑指 Offer 14 - II,jz_offer_14_2,剪绳子 II",
    "er-jin-zhi-zhong-1de-ge-shu-lcof": "剑指 Offer 15,jz_offer_15_1,二进制中1的个数",
    "shu-zhi-de-zheng-shu-ci-fang-lcof": "剑指 Offer 16,jz_offer_16_1,数值的整数次方",
    "da-yin-cong-1dao-zui-da-de-nwei-shu-lcof": "剑指 Offer 17,jz_offer_17_1,打印从1到最大的n位数",
    "shan-chu-lian-biao-de-jie-dian-lcof": "剑指 Offer 18,jz_offer_18_1,删除链表的节点",
    "zheng-ze-biao-da-shi-pi-pei-lcof": "剑指 Offer 19,jz_offer_19_1,正则表达式匹配",
    "biao-shi-shu-zhi-de-zi-fu-chuan-lcof": "剑指 Offer 20,jz_offer_20_1,表示数值的字符串",
    "diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof": "剑指 Offer 21,jz_offer_21_1,调整数组顺序使奇数位于偶数前面",
    "lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof": "剑指 Offer 22,jz_offer_22_1,链表中倒数第k个节点",
    "fan-zhuan-lian-biao-lcof": "剑指 Offer 24,jz_offer_24_1,反转链表",
    "he-bing-liang-ge-pai-xu-de-lian-biao-lcof": "剑指 Offer 25,jz_offer_25_1,合并两个排序的链表",
    "shu-de-zi-jie-gou-lcof": "剑指 Offer 26,jz_offer_26_1,树的子结构",
    "er-cha-shu-de-jing-xiang-lcof": "剑指 Offer 27,jz_offer_27_1,二叉树的镜像",
    "dui-cheng-de-er-cha-shu-lcof": "剑指 Offer 28,jz_offer_28_1,对称的二叉树",
    "shun-shi-zhen-da-yin-ju-zhen-lcof": "剑指 Offer 29,jz_offer_29_1,顺时针打印矩阵",
    "bao-han-minhan-shu-de-zhan-lcof": "剑指 Offer 30,jz_offer_30_1,包含min函数的栈",
    "zhan-de-ya-ru-dan-chu-xu-lie-lcof": "剑指 Offer 31,jz_offer_31_1,栈的压入、弹出序列",
    "cong-shang-dao-xia-da-yin-er-cha-shu-lcof": "剑指 Offer 32 - I,jz_offer_32_1,从上到下打印二叉树",
    "cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof": "剑指 Offer 32 - II,jz_offer_32_2,从上到下打印二叉树 II",
    "cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof": "剑指 Offer 32 - III,jz_offer_32_3,从上到下打印二叉树 III",
    "er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof": "剑指 Offer 33,jz_offer_33_1,二叉搜索树的后序遍历序列",
    "er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof": "剑指 Offer 34,jz_offer_34_1,二叉树中和为某一值的路径",
    "fu-za-lian-biao-de-fu-zhi-lcof": "剑指 Offer 35,jz_offer_35_1,复杂链表的复制",
    "er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof": "剑指 Offer 36,jz_offer_36_1,二叉搜索树与双向链表",
    "xu-lie-hua-er-cha-shu-lcof": "剑指 Offer 37,jz_offer_37_1,序列化二叉树",
    "zi-fu-chuan-de-pai-lie-lcof": "剑指 Offer 38,jz_offer_38_1,字符串的排列",
    "shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof": "剑指 Offer 39,jz_offer_39_1,数组中出现次数超过一半的数字",
    "zui-xiao-de-kge-shu-lcof": "剑指 Offer 40,jz_offer_40_1,最小的k个数",
    "shu-ju-liu-zhong-de-zhong-wei-shu-lcof": "剑指 Offer 41,jz_offer_41_1,数据流中的中位数",
    "lian-xu-zi-shu-zu-de-zui-da-he-lcof": "剑指 Offer 42,jz_offer_42_1,连续子数组的最大和",
    "1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof": "剑指 Offer 43,jz_offer_43_1,1～n 整数中 1 出现的次数",
    "shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof": "剑指 Offer 44,jz_offer_44_1,数字序列中某一位的数字",
    "ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof": "剑指 Offer 45,jz_offer_45_1,把数组排成最小的数",
    "ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof": "剑指 Offer 46,jz_offer_46_1,把数字翻译成字符串",
    "li-wu-de-zui-da-jie-zhi-lcof": "剑指 Offer 47,jz_offer_47_1,礼物的最大价值",
    "zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof": "剑指 Offer 48,jz_offer_48_1,最长不含重复字符的子字符串",
    "chou-shu-lcof": "剑指 Offer 49,jz_offer_49_1,丑数",
    "di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof": "剑指 Offer 50,jz_offer_50_1,第一个只出现一次的字符",
    "shu-zu-zhong-de-ni-xu-dui-lcof": "剑指 Offer 51,jz_offer_51_1,数组中的逆序对",
    "liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof": "剑指 Offer 52,jz_offer_52_1,两个链表的第一个公共节点",
    "zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof": "剑指 Offer 53 - I,jz_offer_53_1,在排序数组中查找数字 I",
    "que-shi-de-shu-zi-lcof": "剑指 Offer 53 - II,jz_offer_53_2,0～n-1中缺失的数字",
    "er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof": "剑指 Offer 54,jz_offer_54_1,二叉搜索树的第k大节点",
    "er-cha-shu-de-shen-du-lcof": "剑指 Offer 55 - I,jz_offer_55_1,二叉树的深度",
    "ping-heng-er-cha-shu-lcof": "剑指 Offer 55 - II,jz_offer_55_2,平衡二叉树",
    "shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof": "剑指 Offer 56 - I,jz_offer_56_1,数组中数字出现的次数",
    "shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof": "剑指 Offer 56 - II,jz_offer_56_2,数组中数字出现的次数 II",
    "he-wei-sde-liang-ge-shu-zi-lcof": "剑指 Offer 57,jz_offer_57_1,和为s的两个数字",
    "he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof": "剑指 Offer 57 - II,jz_offer_57_2,和为s的连续正数序列",
    "fan-zhuan-dan-ci-shun-xu-lcof": "剑指 Offer 58 - I,jz_offer_58_1,翻转单词顺序",
    "zuo-xuan-zhuan-zi-fu-chuan-lcof": "剑指 Offer 58 - II,jz_offer_58_2,左旋转字符串",
    "hua-dong-chuang-kou-de-zui-da-zhi-lcof": "剑指 Offer 59 - I,jz_offer_59_1,滑动窗口的最大值",
    "dui-lie-de-zui-da-zhi-lcof": "剑指 Offer 59 - II,jz_offer_59_2,队列的最大值",
    "nge-tou-zi-de-dian-shu-lcof": "剑指 Offer 60,jz_offer_60_1,n个骰子的点数",
    "bu-ke-pai-zhong-de-shun-zi-lcof": "剑指 Offer 61,jz_offer_61_1,扑克牌中的顺子",
    "yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof": "剑指 Offer 62,jz_offer_62_1,圆圈中最后剩下的数字",
    "gu-piao-de-zui-da-li-run-lcof": "剑指 Offer 63,jz_offer_63_1,股票的最大利润",
    "qiu-12n-lcof": "剑指 Offer 64,jz_offer_64_1,求1+2+…+n",
    "bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof": "剑指 Offer 65,jz_offer_65_1,不用加减乘除做加法",
    "gou-jian-cheng-ji-shu-zu-lcof": "剑指 Offer 66,jz_offer_66_1,构建乘积数组",
    "ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof": "剑指 Offer 67,jz_offer_67_1,把字符串转换成整数",
    "er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof": "剑指 Offer 68 - I,jz_offer_68_1,二叉搜索树的最近公共祖先",
    "er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof": "剑指 Offer 68 - II,jz_offer_68_2,二叉树的最近公共祖先"
}

offer2_dict = {
    "xoh6Oh": "剑指 Offer II 1,jz_offer_II_001,整数除法",
    "JFETK5": "剑指 Offer II 2,jz_offer_II_002,二进制加法",
    "w3tCBm": "剑指 Offer II 3,jz_offer_II_003,前 n 个数字二进制中 1 的个数",
    "WGki4K": "剑指 Offer II 4,jz_offer_II_004,只出现一次的数字",
    "aseY1I": "剑指 Offer II 5,jz_offer_II_005,单词长度的最大乘积",
    "kLl5u1": "剑指 Offer II 6,jz_offer_II_006,排序数组中两个数字之和",
    "1fGaJU": "剑指 Offer II 7,jz_offer_II_007,数组中和为 0 的三个数",
    "2VG8Kg": "剑指 Offer II 8,jz_offer_II_008,和大于等于 target 的最短子数组",
    "ZVAVXX": "剑指 Offer II 9,jz_offer_II_009,乘积小于 K 的子数组",
    "QTMn0o": "剑指 Offer II 10,jz_offer_II_010,和为 k 的子数组",
    "A1NYOS": "剑指 Offer II 11,jz_offer_II_011,0 和 1 个数相同的子数组",
    "tvdfij": "剑指 Offer II 12,jz_offer_II_012,左右两边子数组的和相等",
    "O4NDxx": "剑指 Offer II 13,jz_offer_II_013,二维子矩阵的和",
    "MPnaiL": "剑指 Offer II 14,jz_offer_II_014,字符串中的变位词",
    "VabMRr": "剑指 Offer II 15,jz_offer_II_015,字符串中的所有变位词",
    "wtcaE1": "剑指 Offer II 16,jz_offer_II_016,不含重复字符的最长子字符串",
    "M1oyTv": "剑指 Offer II 17,jz_offer_II_017,含有所有字符的最短字符串",
    "XltzEq": "剑指 Offer II 18,jz_offer_II_018,有效的回文",
    "RQku0D": "剑指 Offer II 19,jz_offer_II_019,最多删除一个字符得到回文",
    "a7VOhD": "剑指 Offer II 20,jz_offer_II_020,回文子字符串的个数",
    "SLwz0R": "剑指 Offer II 21,jz_offer_II_021,删除链表的倒数第 n 个结点",
    "c32eOV": "剑指 Offer II 22,jz_offer_II_022,链表中环的入口节点",
    "3u1WK4": "剑指 Offer II 23,jz_offer_II_023,两个链表的第一个重合节点",
    "UHnkqh": "剑指 Offer II 24,jz_offer_II_024,反转链表",
    "lMSNwu": "剑指 Offer II 25,jz_offer_II_025,链表中的两数相加",
    "LGjMqU": "剑指 Offer II 26,jz_offer_II_026,重排链表",
    "aMhZSa": "剑指 Offer II 27,jz_offer_II_027,回文链表",
    "Qv1Da2": "剑指 Offer II 28,jz_offer_II_028,展平多级双向链表",
    "4ueAj6": "剑指 Offer II 29,jz_offer_II_029,排序的循环链表",
    "FortPu": "剑指 Offer II 30,jz_offer_II_030,插入、删除和随机访问都是 O(1) 的容器",
    "OrIXps": "剑指 Offer II 31,jz_offer_II_031,最近最少使用缓存",
    "dKk3P7": "剑指 Offer II 32,jz_offer_II_032,有效的变位词",
    "sfvd7V": "剑指 Offer II 33,jz_offer_II_033,变位词组",
    "lwyVBB": "剑指 Offer II 34,jz_offer_II_034,外星语言是否排序",
    "569nqc": "剑指 Offer II 35,jz_offer_II_035,最小时间差",
    "8Zf90G": "剑指 Offer II 36,jz_offer_II_036,后缀表达式",
    "XagZNi": "剑指 Offer II 37,jz_offer_II_037,小行星碰撞",
    "iIQa4I": "剑指 Offer II 38,jz_offer_II_038,每日温度",
    "0ynMMM": "剑指 Offer II 39,jz_offer_II_039,直方图最大矩形面积",
    "PLYXKQ": "剑指 Offer II 40,jz_offer_II_040,矩阵中最大的矩形",
    "qIsx9U": "剑指 Offer II 41,jz_offer_II_041,滑动窗口的平均值",
    "H8086Q": "剑指 Offer II 42,jz_offer_II_042,最近请求次数",
    "NaqhDT": "剑指 Offer II 43,jz_offer_II_043,往完全二叉树添加节点",
    "hPov7L": "剑指 Offer II 44,jz_offer_II_044,二叉树每层的最大值",
    "LwUNpT": "剑指 Offer II 45,jz_offer_II_045,二叉树最底层最左边的值",
    "WNC0Lk": "剑指 Offer II 46,jz_offer_II_046,二叉树的右侧视图",
    "pOCWxh": "剑指 Offer II 47,jz_offer_II_047,二叉树剪枝",
    "h54YBf": "剑指 Offer II 48,jz_offer_II_048,序列化与反序列化二叉树",
    "3Etpl5": "剑指 Offer II 49,jz_offer_II_049,从根节点到叶节点的路径数字之和",
    "6eUYwP": "剑指 Offer II 50,jz_offer_II_050,向下的路径节点之和",
    "jC7MId": "剑指 Offer II 51,jz_offer_II_051,节点之和最大的路径",
    "NYBBNL": "剑指 Offer II 52,jz_offer_II_052,展平二叉搜索树",
    "P5rCT8": "剑指 Offer II 53,jz_offer_II_053,二叉搜索树中的中序后继",
    "w6cpku": "剑指 Offer II 54,jz_offer_II_054,所有大于等于节点的值之和",
    "kTOapQ": "剑指 Offer II 55,jz_offer_II_055,二叉搜索树迭代器",
    "opLdQZ": "剑指 Offer II 56,jz_offer_II_056,二叉搜索树中两个节点之和",
    "7WqeDu": "剑指 Offer II 57,jz_offer_II_057,值和下标之差都在给定的范围内",
    "fi9suh": "剑指 Offer II 58,jz_offer_II_058,日程表",
    "jBjn9C": "剑指 Offer II 59,jz_offer_II_059,数据流的第 K 大数值",
    "g5c51o": "剑指 Offer II 60,jz_offer_II_060,出现频率最高的 k 个数字",
    "qn8gGX": "剑指 Offer II 61,jz_offer_II_061,和最小的 k 个数对",
    "QC3q1f": "剑指 Offer II 62,jz_offer_II_062,实现前缀树",
    "UhWRSj": "剑指 Offer II 63,jz_offer_II_063,替换单词",
    "US1pGT": "剑指 Offer II 64,jz_offer_II_064,神奇的字典",
    "iSwD2y": "剑指 Offer II 65,jz_offer_II_065,最短的单词编码",
    "z1R5dt": "剑指 Offer II 66,jz_offer_II_066,单词之和",
    "ms70jA": "剑指 Offer II 67,jz_offer_II_067,最大的异或",
    "N6YdxV": "剑指 Offer II 68,jz_offer_II_068,查找插入位置",
    "B1IidL": "剑指 Offer II 69,jz_offer_II_069,山峰数组的顶部",
    "skFtm2": "剑指 Offer II 70,jz_offer_II_070,排序数组中只出现一次的数字",
    "cuyjEf": "剑指 Offer II 71,jz_offer_II_071,按权重生成随机数",
    "jJ0w9p": "剑指 Offer II 72,jz_offer_II_072,求平方根",
    "nZZqjQ": "剑指 Offer II 73,jz_offer_II_073,狒狒吃香蕉",
    "SsGoHC": "剑指 Offer II 74,jz_offer_II_074,合并区间",
    "0H97ZC": "剑指 Offer II 75,jz_offer_II_075,数组相对排序",
    "xx4gT2": "剑指 Offer II 76,jz_offer_II_076,数组中的第 k 大的数字",
    "7WHec2": "剑指 Offer II 77,jz_offer_II_077,链表排序",
    "vvXgSW": "剑指 Offer II 78,jz_offer_II_078,合并排序链表",
    "TVdhkn": "剑指 Offer II 79,jz_offer_II_079,所有子集",
    "uUsW3B": "剑指 Offer II 80,jz_offer_II_080,含有 k 个元素的组合",
    "Ygoe9J": "剑指 Offer II 81,jz_offer_II_081,允许重复选择元素的组合",
    "4sjJUc": "剑指 Offer II 82,jz_offer_II_082,含有重复元素集合的组合",
    "VvJkup": "剑指 Offer II 83,jz_offer_II_083,没有重复元素集合的全排列",
    "7p8L0Z": "剑指 Offer II 84,jz_offer_II_084,含有重复元素集合的全排列",
    "IDBivT": "剑指 Offer II 85,jz_offer_II_085,生成匹配的括号",
    "M99OJA": "剑指 Offer II 86,jz_offer_II_086,分割回文子字符串",
    "0on3uN": "剑指 Offer II 87,jz_offer_II_087,复原 IP",
    "GzCJIP": "剑指 Offer II 88,jz_offer_II_088,爬楼梯的最少成本",
    "Gu0c2T": "剑指 Offer II 89,jz_offer_II_089,房屋偷盗",
    "PzWKhm": "剑指 Offer II 90,jz_offer_II_090,环形房屋偷盗",
    "JEj789": "剑指 Offer II 91,jz_offer_II_091,粉刷房子",
    "cyJERH": "剑指 Offer II 92,jz_offer_II_092,翻转字符",
    "Q91FMA": "剑指 Offer II 93,jz_offer_II_093,最长斐波那契数列",
    "omKAoA": "剑指 Offer II 94,jz_offer_II_094,最少回文分割",
    "qJnOS7": "剑指 Offer II 95,jz_offer_II_095,最长公共子序列",
    "IY6buf": "剑指 Offer II 96,jz_offer_II_096,字符串交织",
    "21dk04": "剑指 Offer II 97,jz_offer_II_097,子序列的数目",
    "2AoeFn": "剑指 Offer II 98,jz_offer_II_098,路径的数目",
    "0i0mDW": "剑指 Offer II 99,jz_offer_II_099,最小路径之和",
    "IlPe0q": "剑指 Offer II 100,jz_offer_II_100,三角形中最小路径之和",
    "NUPfPr": "剑指 Offer II 101,jz_offer_II_101,分割等和子集",
    "YaVDxD": "剑指 Offer II 102,jz_offer_II_102,加减的目标值",
    "gaM7Ch": "剑指 Offer II 103,jz_offer_II_103,最少的硬币数目",
    "D0F0SV": "剑指 Offer II 104,jz_offer_II_104,排列的数目",
    "ZL6zAn": "剑指 Offer II 105,jz_offer_II_105,岛屿的最大面积",
    "vEAB3K": "剑指 Offer II 106,jz_offer_II_106,二分图",
    "2bCMpM": "剑指 Offer II 107,jz_offer_II_107,矩阵中的距离",
    "om3reC": "剑指 Offer II 108,jz_offer_II_108,单词演变",
    "zlDJc7": "剑指 Offer II 109,jz_offer_II_109,开密码锁",
    "bP4bmD": "剑指 Offer II 110,jz_offer_II_110,所有路径",
    "vlzXQL": "剑指 Offer II 111,jz_offer_II_111,计算除法",
    "fpTFWP": "剑指 Offer II 112,jz_offer_II_112,最长递增路径",
    "QA2IGt": "剑指 Offer II 113,jz_offer_II_113,课程顺序",
    "Jf1JuT": "剑指 Offer II 114,jz_offer_II_114,外星文字典",
    "ur2n8P": "剑指 Offer II 115,jz_offer_II_115,重建序列",
    "bLyHh0": "剑指 Offer II 116,jz_offer_II_116,省份数量",
    "H6lPxb": "剑指 Offer II 117,jz_offer_II_117,相似的字符串",
    "7LpjUW": "剑指 Offer II 118,jz_offer_II_118,多余的边",
    "WhsWhI": "剑指 Offer II 119,jz_offer_II_119,最长连续序列",
}