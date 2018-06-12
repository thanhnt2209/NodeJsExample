

var data = {
    add : function (collection, value) {
        return new Promise(function (resolve, reject) {
            collection.insert(value,function (err, doc) {
                if (err) reject(err)
                else {
                    console.log("insert success");
                    resolve(doc);
                }
            });
        })
    },
}

module.exports = data;



