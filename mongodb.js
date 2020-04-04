
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://yashdesai:sonyc902@cluster0-bnurt.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true});


module.exports = client;