const express=require('express')
require('./src/db/mongoose')
const User=require('./src/modeles/user')
const Task=require('./src/modeles/task')
const userRouter=require('./src/routers/user')
const taskRouter=require('./src/routers/task')
const app=express()

const port=process.env.PORT|| 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>
{
	console.log("server is upto "+
		port)
})
/*
router.get('index',async(req,res)=>
{
	res.render('index')
	/*Task.findById(_id).then((task)=>
	{
		if(!task)
		{
			return res.status(404).send()
		}
		res.send(task)
	})*/
/*})*/
/*
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const myFunction=async() =>
{
	const token= jwt.sign({_id:'dum123'},'thisismynewcourse') //jwt pattern=header, payload, signature.header=type and algo The payload is the part of the JWT where all the user data is actually added.  This is the third part of JWT and used to verify the authenticity of token. BASE64URL encoded header and payload are joined together with dot(.) and it is then hashed using the hashing algorithm defined in a header with a secret key. This signature is then appended to header and payload using dot(.) which forms our actual token header.payload.signature
	console.log(token)
	const data=jwt.verify(token,'thisismynewcourse')//thisismynewcourse is secret
	/*const password="Red12345"
	const hashedpassword=await bcrypt.hash(password,8)//password and number of round
	console.log(password)
	console.log(hashedpassword)

	const isMatch=await bcrypt.compare('Red12345',hashedpassword)
	console.log(isMatch)
}

myFunction()*/