const mongoose=require("mongoose")
const validator=require('validator')

const Task=mongoose.model('Task',
{
	desc:
	{
		type:String,
		required:true

	},
	comp:
	{
		type:Boolean
	}
})

const task=new Task({
	desc:"Learn mongoose",
	comp:false
})

module.exports=Task

/*
task.save().then(()=>
{

}).catch((error)=>
{
	console.log(error)
})*/
