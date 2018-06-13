const jsdom = require("jsdom");
const {JSDOM} = jsdom;
const Instance = require("../model/Truyen")


var arrayManga = [];


exports.data = function () {
    return new Promise(function (resolve, reject)  {
        JSDOM.fromURL("http://www.webtruyentranh.net/the-loai/the-loai-action-2.html", "").then(dom => {
            var datas = dom.window.document.getElementsByClassName("media-object");
            for (var i = 0; i < datas.length; i++) {
                let truyenInstance = new Instance();
                truyenInstance.setName = datas.item(i).getAttribute('alt');
                truyenInstance.setUrl = datas.item(i).getAttribute('src');
                truyenInstance.setImg = null;
                arrayManga.push(truyenInstance);
            }
            console.log(JSON.stringify(arrayManga));
            resolve(arrayManga);

        }).catch(reject);
    })
}
