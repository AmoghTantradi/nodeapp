const router = require('express').Router()
const User = require('../model/User')

router.post('/register',async (req,res)=>{
  const user = new User({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
  });

  try{
    const suser = await user.save()
  }
  catch(err){
    throw err
    
  }

  res.json(req.body)
  console.log(req.body)
})




module.exports = router



