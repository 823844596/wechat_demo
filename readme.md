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
        2）样式导入
        3）内连样式
        4）选择器
    
</pre>
