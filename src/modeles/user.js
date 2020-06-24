const mongoose=require("mongoose")
const validator=require('validator')
const User=mongoose.model('users',
{
	name:
	{
		type:String,
		required:true
	}
	,
	email:
	{
		type:String,
		required:true,
		validate(value)
		{
			if(!validator.isEmail(value))
			{
				throw new Error('it is not email')

			}
		}
	},
	age:
	{
		type:Number,
		validate(value)
		{
			if(value<0)
			{
				throw new Error('Age must be posistive number')
			}
		}
	}
})


module.exports=User


