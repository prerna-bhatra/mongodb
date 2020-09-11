const express=require('express')
require('./src/db/mongoose')
const User=require('./src/modeles/user')
const Task=require('./src/modeles/task')
const userRouter=require('./src/routers/user')
const taskRouter=require('./src/routers/task')
const cron = require('node-cron');
const cronfun=require('./src/cronfile')
const app=express()

const port=process.env.PORT|| 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)




app.listen(port,()=>
{
	console.log("server is upto "+
		port)
	const res=cronfun.cronf();
	
	
})

