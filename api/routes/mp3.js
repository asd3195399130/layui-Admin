var express = require("express");
var router = express.Router();
const fs = require('fs');
/* GET users listing. */
router.get("/list", function (req, res, next) {
    res.json({
        code: 200,
        mesage: "success",
        data: [
            {
                id: 1,
                name: "稻香",
                presonL: "周杰伦",
            },
            {
                id: 2,
                name: "搁浅",
                presonL: "周杰伦",

            },
            {
                id: 3,
                name: "Lost control",
                presonL: "Painless Destiny",

            },
            {
                id: 4,
                name: "Too close but still too far",
                presonL: "Painless Destiny",

            },
            {
                id: 5,
                name: "The Garden of Gethsemane",
                presonL: "Painless Destiny",

            },
            {
                id: 6,
                name: "The awakening",
                presonL: "Painless Destiny",

            },
            {
                id: 7,
                name: "Better day",
                presonL: "Painless Destiny",

            },
            {
                id: 8,
                name: "A new beginning",
                presonL: "Painless Destiny",

            },
            {
                id: 9,
                name: "lt is time",
                presonL: "Painless Destiny",

            },
            {
                id: 10,
                name: "For those who dwell in grief",
                presonL: "Painless Destiny",
            },
        ],
    });
});
router.get("/detail", function (req, res, next) {
    if (req.query.id == 1) {
        res.json({
            code: 200,
            msg: "success",
            data: {
                id: 1,
                name: "稻香",
                presonL: "周杰伦",
                url: "稻香 - 周杰伦.mp3",
                lrc: fs.readFileSync("./public/mp3/稻香 - 周杰伦.lrc").toString(),
            },
        });
    } else if (req.query.id == 2) {
        res.json({
            code: 200,
            msg: "success",
            data: {
                id: 2,
                name: "搁浅 - 周杰伦",
                presonL: "周杰伦",
                url: "搁浅 - 周杰伦.mp3",
                lrc: fs.readFileSync("./public/mp3/搁浅 - 周杰伦.lrc").toString(),
            },
        });
    };
});

module.exports = router;
