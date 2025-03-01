var jwt = require('jsonwebtoken')
const authMiddleware=r((req,res,next)=>{
    const bcrypt = require('bcrypt');
    const saltRounds = 10;
})
authMiddleware.post("register",async (req,res)=>{
    try{
        let user =await authmodel.findOne(req.body.email)
        if(!user)
            res.status(303).json("user not found ")
    let user=req.body,password:hashed
    let myPlaintextPassword=req.body.email
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
            // Store hash in your password DB.
        });
    });
    }catch(err){
        res.status(500).json("user not found")
    }
    })

authMiddleware.post("login"(req,res)=>{
    // Load hash from your password DB.
    
bcrypt.compare(myPlaintextPassword, hash).then(function(result) {
    // result == true
});
bcrypt.compare(someOtherPlaintextPassword, hash).then(function(result) {
    // result == false
});
})

module.exports=authMiddleware