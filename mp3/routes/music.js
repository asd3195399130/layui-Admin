var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/list", function (req, res, next) {
  res.json({
    code: 200,
    mesage: "success",
    data: [
      {
        title: "我还有点小糊涂",
        singer: "刘晨",
        url: "../audio/我还有点小糊涂 - 刘晨.mp3",
      },
      {
        title: "歌唱祖国",
        singer: "中国人民解放军军乐团",
        url: "../audio/歌唱祖国 - 中国人民解放军军乐团.mp3",
      },
      {
        title: "想见你想见你想见你",
        singer: "八三夭乐团",
        url: "../audio/想见你想见你想见你 - 八三夭乐团.mp3",
      },
      {
        title: "雅俗共赏",
        singer: "许嵩",
        url: "../audio/雅俗共赏 - 许嵩.mp3",
      },
      {
        title: "一剪梅",
        singer: "费玉清",
        url: "../audio/一剪梅 - 费玉清.mp3",
      },
    ],
  });
});

module.exports = router;
