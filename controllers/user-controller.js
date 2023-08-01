import User from "../model/User";

// SIGNUP
export const userSignUp = async(req, res, next)=>{
    const {name, email, password} = req.body;

    //checking user exist or not
    let existingUser;
    try{
        existingUser = await User.findOne({email});
    }catch(err){
       return console.log(err);
    }
    if(existingUser){
        return res.status(400).json({message:"User Already Exists Login Instead!!"});
    }
    
    //If found user not exists then add user to database
    const addUser = new User({
        name,
        email,
        password,
    })
    try{
        addUser.save();
    }catch(err){
       return console.log(err);
    }
    res.status(201).json({addUser});
};



//LOGIN
export const userLogin = async(req,res,next)=>{
    const {email, password} = req.body;
    let existingUser;
    try{
        existingUser = await User.findOne({email, password});
    }catch(err){
       return console.log(err);
    }
    if(!existingUser){
        return res
                .status(404)
                .json({message:"User I'D Not Exist Please Signup"});
    }

    return res
            .status(200)
            .json({message:"Logged In Successfully"})
};