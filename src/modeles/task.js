const mongoose=require("mongoose")
const validator=require('validator')

const Task=mongoose.model('Task',
{
	name:
	{
		type:String,
		required:true

	},
	task:
	{
		type:String,
		required:true

	},
	dur:
	{
		type:Number,
		required:true

	},
	desc:
	{
		type:String,
		required:true

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
