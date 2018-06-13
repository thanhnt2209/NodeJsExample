var db = require("../database/ConnectDatabase");
var crawler = require("../controller/index");
var helper = require('../database/Helper');
var requestData = require('../api/MangaApi');

async function main() {
    var client = await db.connectData();
    let mydb = client.db('test');
    let collection = mydb.collection("user");
    let mangas = await crawler.crawler.data();
    await helper.add(collection, mangas);
    requestData.createRequest(client);
}

main();