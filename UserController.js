const client = require('./mongodb');

exports.getUser = (req, res)=>{
    client.connect(err => {
        const collection = client.db("testmydb").collection("users");
        // perform actions on the collection object
      
          if(err){console.log(err);}
          else{
            collection.find({}).toArray(function(e, docs) {
                res.render('index', {
                    title:'Users',
                    data : docs});
          });
        }
        client.close();
    });    
};