<h1 align="center">LiCount</h1>

><h3 align="center">轻量级计数框架</h3>

## LiCount 为何诞生于世
在开发了  [LCookie](https://github.com/lf112/lcookie) 之后，我觉得 Lcookie [项目文档页](https://lcookie.js.org)需要页面访问次数，然后我就想起有个数据存储服务叫 [LeanCloud](https://leancloud.cn/)，然后我就开发了这个`.js`，但是不用担心速度，这个API非常快。

## 描述
`LiCount`是一个基于JavaScript的Web组件，可以绑定DOM来显示和更新计数，目前支持计数页面访问和在DOM显示的时候计数。

 [LF112/licount](https://github.com/lf112/licount) 是一个开源的项目,`LiCount`作为 [LF112](https://www.lf112.net) 的个人项目遵循 [GNU General Public License v3.0](https://github.com/LF112/licount/blob/master/LICENSE) 开源协议。
 
 ## 如何开始？
 使用这个项目非常简单！一起来吧！
 
 ### 第一步
 将 LiCount 导入在 `</body>` 之上。
 ```
      <script src="licount.js"></script>
 ```
 
 需要在这里使用 [LeanCloud Javascript SDK](https://cdn1.lncld.net/static/js/av-core-mini-0.6.1.js)，LiCount支持自动动态导入LeanCloud Javascript SDK，您可以自己导入或让LiCount来！
 
 ### 第二步
  现在您必须去 [LeanCloud](https://leancloud.cn/) 官网注册一个账号，然后前往 '[应用列表](https://leancloud.cn/dashboard/applist.html#/apps)' 后点击 '创建应用'。 您只需要在 '新应用名称' 内输入您自定义的名字或项目名称，然后点击 '创建' 即可.
 
  创建之后，你需要等待5分钟让 LeanCloud 初始化你的项目。之后点开你的项目，一般直接点击标题即可跳转，然后找到 '创建 Class' 按钮，点击之后在 'Class 名称' 里输入 `LiCount` ，注意在这里必须是 `LiCount` 否则 LiCount 组件将无法识别，然后选择 无限制 再点击'创建 Class' 即可。
 
  然后在左侧栏找到 '设置' 按钮并点开, 在 '应用 KEY' 里复制 `APPID` 和 `APPKEY` 填入 LiCount 配置即可。
  ```
    <script src="licount.js"></script>
    <script>
        licount({APPID:'_你的 APPID_',APPKEY:'_你的 APPKEY_'});
    </script>
  ```
 
 
 ### 第三步
 现在，您必须创建几个用于显示 `LiCount` 的DOM，这里 LiCount 提供了几个方法：'Show'为加载后显示当前绑定ID计数量，'Add'为加载后显示并更新（+1）当前绑定ID计数量，'ViewCount'为等屏幕显示绑定的DOM后才计数。
 
 ```
    <div id="licount_Show_demo">0</div>
    <div id="licount_ViewCount_demo">0</div>
    <div id="licount_Add_demo">0</div>
    <script src="licount.js"></script>
    <script>
        licount({APPID:'_你的 APPID_',APPKEY:'_你的 APPKEY_',Main:[
            ['licount_Show_demo','Show'], // 显示当前绑定ID计数量
            ['licount_Add_demo','Add'], // 显示并更新（+1）当前绑定ID计数量
            ['licount_ViewCount_demo','ViewCount'] // 等屏幕显示绑定的DOM后才计数.
        ]});
    </script>
 ```
 
 好好享受吧！