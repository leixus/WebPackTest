import _ from "lodash"; 

import './style.css';

import Icon from "./icon.jpg";

import Data from './data.xml';

// import { hello } from "./hello";

// function component() {
//     var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    // lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], '');

//     return element;
// }

function component() {

    console.log("打包成功！");

    console.log("使用配置文件打包");

    console.log("npm 配置package.json快速打包");

    // hello.hello;

    var element = document.createElement('div');

    // element.innerHTML = _.join(['Hello', 'webpack'], '');

    element.innerHTML = _.join(['Hello', ' webpack'], '');

    element.classList.add("hello");

    // 将图像添加到我们现有的div。

    var myIcon = new Image();

    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);

    return element;
}

document.body.appendChild(component());