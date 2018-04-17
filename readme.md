#微信小程序自学习记录
各小结代码参考对应文件下代码
=======
<pre>
1.微信小程序版本介绍：
 a.预览版本-> （b1.开放版本/b2.体验版本）->c.审核版本-> d.线上版本
2.小程序文件介绍：
 app.js: 注册小程序全局应用
 app.json: 注册小程序页面配置路径，通过pages指定
 创建一个文件的时候需要由四个文件组成：
    a.XX.js：小程序逻辑/数据通信
    b.XX.wxml：小程序展现
    c.XX.wxss : 小程序样式
    d.XX.json： 配置相关
3.小程序开放框架基本构成：
    WXML：
    WXSS：
    WXS：对WXML进行增强，比如filter
    JavaScript
4.wxml:
    weixin markup language
    是框架设计的一套标签语言，结合组件，wxs和事件系统，可以构建出页面少的解构。
    语法：<标签名 属性名=‘属性名1’ 属性名=‘属性名2’ ...>
            ...
        </标签名>
    示例：<view class='test'> hello world </view>
    注意：属性大小写敏感，标签需是闭合的
5.数据绑定：
    使用{{}}方式， 如：
        <view><text>{{message}}</text></view>
        <view><text data-name='{{theName}}'></text></view>
    标签中共同的属性：
        id 唯一性
        class 组件样式类
        style 组件内联样式
        hidden 组件是否显示
        data- 自定义属性
        bind*/ catch* 组件的默认事件
6.wxml列表渲染：
    如：
        <!-- index.wxml, wx-key指定key的时候，最好不用key， 该key表示数据唯一性 -->
        <view>
            <block wx:for="{{items}}" wx:fot-item="item" wx:key="index">
                <view>{{index}}:{{item.name}}</view>
            </block>
        </view>
        <!-- index.js -->
        Page({
            data: {
                items: [
                    {name: 'name1'},
                    {name: 'name2'},
                    {name: 'name3'},
                    {name: 'name4'}
                ]
            }
        })
7.wxml条件渲染：
    如: condition.wxml:
    <view>这是微信小程序条件渲染demo</view>
        <view wx:if="{{condition === 1}}">
            condition满足=1时执行
        </view>
        <view wx:elif="{{condition === 2}}">
            condition === 2 时执行
        </view>
        <view wx:else>
            condition不满足以上两个条件的时候执行代码
    </view>
    condition.js
    Page({
        data: {
            condition: Math.floor(Math.random() * 3 + 1)
        }
    })
    注意：hidden 与 wx：if条件渲染都可控制是否显示，区别如下：
        1.都有显示隐藏的作用
        2.if条件在切换时框架会有一个局部渲染的过程，条件会销毁并重新渲染；
          hidden初始化渲染消耗比较高，通过hidden可以控制在视图上的显示和隐藏，始终都会在渲染；
        3.wx：if有切换消耗更高，切换效果频繁的建议使用hidden
8.wxml模版引用（使用template）：
    如：templateDemo.wxml
    <template name="templateItem">
    <view>
        <view>收件人： {{name}}</view>
        <view>联系方式：{{phone}}</view>
        <view>地址：{{address}}</view>
    </view>
    </template>
    <!-- 通过is属性指定使用哪个template， 模版有自己的作用域 -->
    <template is="templateItem" data="{{...item}}"></template>
    tempaletDemo.js
    Page({
        data: {
            item: {
            name: "名称A",
            phone: "1234567890",
            address: "黑龙江"
            }
        }
    })
    注：两种引用模板的方式：include和template
        区别：include只会引用除template内容外的内容，
        inport只会引用template内的的内容，动态的传入数据，is表示引用的模板名称，data表示传入模板的数据

二：wxss
1.wxss：
    weixin style sheets， 是一套样式语言，用于描述wxml的组件样式
    wxss基于css的改动及补充：
        1）尺寸单位rpx，响应式单位
        2）样式导入: 通过@import方式导入
        3）内连样式: 使用style方式
        4）选择器： 
            .class： 类
            #id： id
            element： 标签
            element.element
            ::after
            ::before
        选择器优先级：!important（无穷大） > 内联（1000） > id选择权（100） > class选择器（10） > element选择器（1）
    代码示例：wxss路径下
    ps：wxss执行顺序从上到下，从左到右执行
三：javascript
    1.小程序js运行环境：
        iOS：javascriptCore中运行，由webkitview渲染
        android： X5 javascriptCore解析， x5内核渲染
        小程序：nwjs中运行，chrome webview渲染， nwjs由nodejs及webkit组成
    2.wxs： weixin script，查看wxs文件下代码
        语言特性：模块/变量/注释/运算符/语句/数据类型/基础类库
        模块：可通过标签声明/文件声明，由自己独立作用域
        注释： 分为三种： 单行注释/ 多行注释/ 尾行注释
        运算符：（与js相同）
            等值运算符: 
            赋值运算符： 
            二元逻辑运算符
            基本运算符： 加减乘除
            一元运算符： 自增自减 赋值
            位运算符
            比较运算符
        数据类型(8中）：number string boolean object array function date（getDate方式） regexp（getRegexp）
            基础类库：Number
                    Date（只有三种方法data。path/data。now/date。utc）
                    console（只有console。log）
                    Math
                    Gloabl
                    Json
    3.MINA框架：
        view层（试图层）
        App Service层（逻辑层，只有一个，常驻内存）
            Manager：
            API：
        Native层（系统层
            微信客户端能力
            能与逻辑层/视图层进行数据沟通
            离线缓存
            网络请求
    4.运行机制：
        启动：冷启动/热启动
            热启动：用户已打开过小程序，一定时间内在打开时，不需重新启动，将后台小程序切换回来。
            冷启动：用户首次打开或小程序被用户主动销毁在打开
            销毁情况：1）一定时间内（5min）不会销毁，超过后自动销毁；2）小程序多时间连续收到系统告警，自动销毁（时间为5S）
            更新机制：启动时发现新版本，会下载新版本，打开小程序时使用老版本，下次打开时会使用新版本，如果想强制使用新版本则需在程序中调用api
    5.加载机制：
        1.第一次从cdn上请求代码包
        2.客户端将代码包缓存到本地，第二次启动的时候，会校验当前版本，如果有新版本，则异步下载新的版本代码，供下次启动使用
        3.小程序可访问web server接口交互数据
    6.小程序生命周期
        生命周期分为两部分：程序生命周期、页面声明周期
        1）程序声明周期：onLaunch：第一次进入小程序，客户端初始化小程序运行环境，微信客户端逻辑层派发，触发该事件
                      onShow：在进入小程序时，将后台小程序唤醒，调用onShow方法
                      onHide：按住手机home键，小程序转到后台，此时出发onHide
                      onError： 脚本错误或api错误触发
                      ps： globalData表示生命周期中使用的数据
        2）页面声明周期：onLoad：页面初次加载，逻辑层会派发一个实例，此时调用onLoad方法，页面未被销毁时，只会调用一次
                      onShow：触发时机：1.同上触发情况；2.别的页面返回当前页面触发
                      onReady：页面初次渲染完后，调用该方法，在onshow后调用，页面未销毁时，只会调用一次
                      onHide：当前页面打开新的页面时，当前页面会触发当前页面的onhide方法
                      onUnLoad：关闭页面触发
                      ps:data表示当前页面配置数据
    7.页面路由
        路由分为六种：
            1）初始化： 新页面入栈，路由后触发方法：onLoad， onShow
            2）打开新页面： 新页面入栈，页面前路由触发方法：onHide， 路由后页面触发方法： onLoad，onShow
            3）页面重定向：当前页面出栈，新页面入栈。 路由前页面出发方法：onUnload， 路由后页面触发：onLoad，onShow
            4）页面返回： 页面不断出栈，知道目标反悔页，新页面入栈。 路由前页面触发方法： onUnload，路由后页面触发方法：onShow
            5）Tab切换： 页面全部出栈，只留下新的Tab页面，
            6）重加载：页面全部出栈，只留下新的页面，触发方法： 路由前页面触发方法： onUnload， 路由后页面触发方法： onLoad， onShow

    8.事件流
        1）事件模型：事件捕获阶段->事件处理阶段->事件冒泡阶段
        2）可捕获事件： touchstart、 touchmove、tap\touchcancel、 touchend、 logngpress、 longtap
        3) 可冒泡事件：touchstart、touchmove、touchcancel、touchend、tap、longpress、longup、transitionend、animationstart、
        animationiteration、animationend、touchforcechange


</pre>
