const mongoose=require("mongoose")
const validator=require('validator')
mongoose.connect('mongodb+srv://prerna:Prerna123@cluster0.jokxx.mongodb.net/todo?retryWrites=true&w=majority',{
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


