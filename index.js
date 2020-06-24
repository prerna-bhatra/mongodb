const express=require('express')
require('./src/db/mongoose')
const User=require('./src/modeles/user')
const Task=require('./src/modeles/task')
const app=express()

const port=process.env.PORT|| 3000

app.use(express.json())

app.post('/users',async(req,res)=>
{
	/*console.log(req.body) //send data from body in postman raw json data {"varname":"val"} and send post request to this route
	res.send("testing")*/
	const user=new User(req.body)
	await user.save()
	try
	{
		await user.save()
		res.status(201).send(user)

	}catch(e)
	{
		res.status(400).send(e)

	}
	/*
	user.save().then(()=>
	{
		res.send(user)
	}).catch((e)=>
	{
		console.log(e)
	})*/
	//send req from postman body to this route
})

app.get('/users',async(req,res)=>
{
	
	try
	{
		const users=await User.find({})
		res.send(users)
	}
	catch(e)
	{
	res.status(500).send()	
	}
/*
	User.find({}).then((users)=>
	{
		res.send(users)
	}).catch((e)=>
	{
		res.status(500).send()
	})*/
})

app.get('/users/:id',async(req,res)=>
{

	const _id=req.params.id

	try
	{
		const  user=await User.findById(_id)
		if(!user)
		{
			return res.status(404).send()
		}
		res.send(user)
	}
	catch(e)
	{
		res.status(500).send()
	}
	/*User.findById(_id).then((user)=>
	{
		if(!user)
		{
			return res.status(404).send()
		}
		res.send(user)
	})
*/

	
})


app.get('/tasks',async(req,res)=>
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

app.get('/tasks/:id',async(req,res)=>
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

app.post('/tasks',async(req,res)=>
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

app.patch('/users/:id',async(req,res)=>
{
	try
	{
		const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
		if(!user)
		{
			return res.status(404).send()
		}
		res.send(user)
	}
	catch(e)
	{
		res.status(400).send(e)
	}
})

app.patch('/tasks/:id',async(req,res)=>
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
app.listen(port,()=>
{
	console.log("server is upto "+
		port)
})