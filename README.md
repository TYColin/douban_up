# 豆瓣顶帖辅助脚本

安装：<br/>
1.安装拓展程序：Tampermonkey（油猴）,建议Google Chrome 浏览器，火狐需要更改最大弹出窗口数<br/>
2.打开Tampermonkey拓展管理面板，新建脚本，复制代码全部替换新建的默认代码<br/>
3.打开trigger，将// @match        https://www.douban.com/people/*****/ 后面的链接修改为你的个人主页链接，将<br/>var urls = [
"https://www.douban.com/group/topic/******/",<br/>
"https://www.douban.com/group/topic/******/",<br/>
"https://www.douban.com/group/topic/******/"<br/>
];<br/>里的链接修改为你要顶的帖子的第一页链接，\*表示话题编号，如果评论框在第一页，需要填全链接如：https://www.douban.com/group/topic/****/?start=0<br/>
4.默认每隔10秒弹出一个页面，10\*1000\*(i+1)中的10为秒数，可以根据自己情况改<br/>
使用：<br/>
1.需要顶帖时刷新个人主页，默认每隔10秒打开一个帖子，自动跳转到有评论框的那一页，评论框自动填写好默认顶帖词，如（豆），判断是否有验证码，若没有验证码，自动提交，
若有，验证码输入框获得焦点，停止提交，需手动输入验证码按回车提交。
