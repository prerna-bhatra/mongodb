const cron = require('node-cron')
const express = require("express")
const Task=require('./modeles/task')
const mongoose=require('./db/mongoose')
function cronf()
{
	const task= Task.find({},{dur:1,_id:1})		
	cron.schedule("* * * * *", function() {
      //console.log("running a task every minute");
      Task.findByIdAndDelete(task.id)
    });
	//return ("hfh");
}
module.exports={cronf}