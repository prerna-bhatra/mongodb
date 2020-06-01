//crud 
const mongodb=require('mongodb')
const Mc=mongodb.MongoClient
const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'
Mc.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
if(error)
{
	console.log("connection failed")
	
}
//console.log("connected")
var db=client.db(databaseName)
db.collection('users').insertOne({
	name:'Andrew',
	age:27
},(error,result)=>{
	if (error) {
		console.log("insert error")
	}
	console.log(result.ops)
})
})