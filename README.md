<h1 align="center">Introduce You with LiCount</h1>

>Simple lightweight counting component.

## Story Behind LiCount
After developing the [LCookie](https://github.com/lf112/lcookie), I think Lcookie Project Documents needs a page visit count, so I think of [LeanCloud](https://leancloud.cn/)'s data storage service, I made this `.js`, but this API is very fast, so don't worry about speed.

## Description
licount is a JavaScript based web component that can bind DOM display and update counts, currently only supports counting page access.

 [LF112/licount](https://github.com/lf112/licount) is an open source project, released under the [GNU General Public License v3.0](https://github.com/LF112/licount/blob/master/LICENSE) as a part of [LF112](https://www.lf112.net) personal project.
 
 ## How to Setup
 The configuration is easy. We made it!
 
 ### First step
 You need to first introduce JavaScript on `</body>`.
 ```
      <script src="licount.js"></script>
 ```
 
 Need to use the [LeanCloud Javascript SDK](https://cdn1.lncld.net/static/js/av-core-mini-0.6.1.js) here, LiCount supports automatic dynamic import of LeanCloud Javascript SDK, you can add or let LiCount yourself!
 
 ### Second step
 Now you must visit the official [LeanCloud](https://leancloud.cn/) website and register to create an account. Then visit the '[应用列表](https://leancloud.cn/dashboard/applist.html#/apps)' and click '创建应用'. You only need to fill in the "新应用名称" and click "创建".
 
 After creation, you need to wait 5 minutes for LeanCloud to initialize, then find the '创建 Class' button, enter `LiCount` in the input box of 'Class 名称', here must be `LiCount`, otherwise the LiCount component will not be recognized, then select None Restrict click on "创建 Class" again.
 
 Then click the '设置' button in the left column, find '应用 KEY' and copy the `APPID` and `APPKEY` to fill in the LiCount configuration.
  ```
    <script src="licount.js"></script>
    <script>
        licount({APPID:'_Your APPID_',APPKEY:'_Your APPKEY_'});
    </script>
  ```
 
 
 ### Third step
 Now, you must create a DOM for displaying LiCount, and you may need to call LiCount inside `window.onload = function (){ }` to prevent [LeanCloud Javascript SDK](https://cdn1.lncld.net/static/js/av-core-mini-0.6.1.js) from loading.
 ```
    <div id="licount_demo"></div>
    <script src="licount.js"></script>
    <script>
        licount({APPID:'_Your APPID_',APPKEY:'_Your APPKEY_'});
        window.onload = function (){
            licount_Add('licount_demo'); // Automatic update and display count.
            //licount_Show('licount_demo'); // Display count.
        }
    </script>
 ```
 
 Enjoy it!