const fs = require("fs");

const p = new Promise((reslove, reject) => {
  fs.readFile("../audio/卜卦 - 崔子格.lrc", (err, data) => {
    if (err) reject(err);
    reslove(data);
  });
});
p.then(
  (value) => {
    console.log(value.toString());
  },
  (reason) => {
    console.log("读取失败");
  }
);
// const fs = require("fs");

// const p = new Promise(function (resolve, reject) {
//   fs.readFile("./1.txt", (err, data) => {
//     if (err) reject(err); // err 是一个异常对象
//     resolve(data);
//   });
// });

// p.then(
//   function (value) {
//     console.log(value.toString()); // 转为字符串输出
//   },
//   function (reason) {
//     console.log("读取失败!!");
//   }
// );
