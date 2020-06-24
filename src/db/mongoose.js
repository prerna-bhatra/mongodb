const mongoose=require("mongoose")
const validator=require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
	useUnifiedTopology:true ,
	useNewUrlParser:true,
	useCreateIndex:true
})

/*

const me=new User(
{
	name:'antima',
	age:27,
	email:'bhatraprerna061@gmail.com'
})

me.save().then(()=>
{
	console.log(me)
}).catch(()=>
{
	console.log(error)
})

*/



//npm validator


