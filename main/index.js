var db = require("../database/ConnectDatabase");
var crawler = require("../controller/CrawlerData");
var helper = require('../database/Helper');
var requestData = require('../api/MangaApi');

async function main() {
    var client = await db.connectData();
    let mydb = client.db('test');
    let collection = mydb.collection("user");
    let mangas = await crawler.data()
    await helper.add(collection, mangas);
    requestData.createPost(client);


}

main();