var express = require("express");
var router = express.Router();
var fs = require("fs");

/* GET users listing. */
router.get("/list", function (req, res, next) {
  res.json({
    code: 200,
    mesage: "success",
    data: [
      {
        id: 1,
        title: "我还有点小糊涂",
        singer: "刘晨",
        url: "../audio/我还有点小糊涂 - 刘晨.mp3",
        lrc: fs.readFileSync("../audio/我还有点小糊涂 - 刘晨.lrc").toString(),
      },
      {
        id: 2,
        title: "星河万里",
        singer: "Rom邢锐",
        url: "../audio/星河万里 - Rom邢锐.mp3",
        lrc: fs.readFileSync("../audio/星河万里 - Rom邢锐.lrc").toString(),
      },
    ],
  });
});

module.exports = router;
