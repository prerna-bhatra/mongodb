const express=require("express")
const router=new express.Router()
const Task=require('../modeles/task')
router.get('/list',async(req,res)=>
{
	try
	{
		const task=await Task.find({})
		res.send(task)
	}
	catch(e)
	{
	res.status(500).send()	
	}


/*	Task.find({}).then((tasks)=>
	{
		res.send(tasks)
	}).catch((e)=>
	{
		res.status(500).send()
	})*/
})

router.get('/tasks/:id',async(req,res)=>
{

	const _id=req.params.id
	try
	{
		const  task=await Task.findById(_id)
		if(!task)
		{
			return res.status(404).send()
		}
		res.send(task)
	}
	catch(e)
	{
		res.status(500).send()
	}

	/*Task.findById(_id).then((task)=>
	{
		if(!task)
		{
			return res.status(404).send()
		}
		res.send(task)
	})*/
})

router.post('/add',async(req,res)=>
{
	/*console.log(req.body) //send data from body in postman raw json data {"varname":"val"} and send post request to this route
	res.send("testing")*/
	const task=new Task(req.body)
	await task.save()
	try
	{
		await task.save()
		res.status(201).send(task)

	}catch(e)
	{
		res.status(400).send(e)

	}
	/*task.save().then(()=>
	{
		res.send(task)
	}).catch((e)=>
	{
		console.log(e)
	})*/
	//send req from postman body to this route
})



router.patch('/tasks/:id',async(req,res)=>
{
	try
	{
		const task=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
		if(!task)
		{
			return res.status(404).send()
		}
		res.send(task)
	}
	catch(e)
	{
		res.status(400).send(e)
	}
})


router.delete('/tasks/:id',async(req,res)=>
{
	try
	{
		const task=await Task.findByIdAndDelete(req.params.id)
		
		if(!task)
		{
			return res.status(404).send()
		}
		res.send(task)
	}
	catch(e)
	{
		res.status(400).send(e)
	}

})




module.exports=router