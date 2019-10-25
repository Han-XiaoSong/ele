/// 1 使用npm安装anyproxy，npm install -g anyproxy;
/// 2 打开网络偏好设置，在“高级”里面把“代理”下的高级网页代理（HTTPS）和网页代理（HTTP）设置为127.0.0.1，端口8001
/// 4 终端输入anyproxy --rule anyproxy.js --intercept
/// 3 点开微信饿了么订单，会在当前目录下自动生成order.json文件（可以自定义文件名，修改下面order.josn为你想要的文件名）
var fs = require("fs")

module.exports = {
    summary: 'a rule to hack response',
    *beforeSendResponse(requestDetail, responseDetail) {
      if (requestDetail.url.startsWith("https://h5.ele.me/restapi/booking/v1/carts/cart")) {
        fs.writeFile("order.json", responseDetail.response.body,()=>{})
        return {
            response: responseDetail
        }
      }
    },
  };