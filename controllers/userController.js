const helper = require("../helpers/helper")

//  import the models
const User = require("../models/user")

exports.Register = async (req, res) => {
    try {
        const isValid = await User.validate(req.body)

        if(isValid.error) {
            res.status(404).send({
                error: isValid.error.details[0].message
            })
        }
   
        const hashpassword = await helper.hashPassword(req.body.password);
       
        await User.User.findOne({email: req.body.email})
            .then(user => {
                if(!user) {
                    try {
                        const newUser = new User.User({
                            name: req.body.name,
                            email: req.body.email,
                            matric_no: req.body.matric_no,
                            password: hashpassword,
                            role: "User"
                        })
                        newUser.save((err, user) => {
                            if(err) {
                                res.send(err)
                            }
                
                            res.status(200).send({
                                payload: `${user.email} is registered successfully`
                            })
                        })
                    } catch (error) {
                        res.status(404).send({
                            error : error
                        })
                    }
                }
                if(user) {
                    res.status(404).send({
                        message: "User already exist"
                    })
                }
            })
    } catch (error) {
        res.status(404).send({
            error: error
        })
    }
}

exports.Admin = async (req, res) => {
  try {
    const isValid = await User.validate(req.body)

    if(isValid.error) {
        res.status(404).send({
            error: isValid.error.details[0].message
        })
    }

    const hashpassword = await helper.hashPassword(req.body.password);

    const newUser = new User.User({
        name: req.body.name,
        email: req.body.email,
        matric_no: req.body.matric_no,
        password: hashpassword,
        role: "Admin"
    })

    const user = await User.User.findOne({email: req.body.email})

    if(user) {
        res.status(404).send({
            message: "User already exist"
        })
    }

    newUser.save((err, user) => {
        if(err) {
            res.send(err)
        }

        res.status(200).send({
            payload: `${user.email} is registered successfully`
        })
    })
  } catch (error) {
      
  }
}
exports.Login =  async (req, res) => {
    try {
        await User.User.findOne({matric_no: req.body.matric_no})
            .then(user => {
                if (!user){
                    res.status(404).send({
                        message: "Matric No does not exist"
                    })
                }
                if(user) {
                    try {
                        const pwdValid = helper.comparepassword(user.password, req.body.password,)  
                        if(!pwdValid) {
                            res.send({
                                error : "Incorrect Password"
                            })
                        }
                        user.password = ""
                        const userId = {
                            id: user._id
                        }
                        
                        const token =  helper.generateToken(userId)
                        return res.status(200).send({
                            user,
                            token,
                            message: "login successful"
                        })
                    } catch (error) {
                        res.status(404).send({
                            error: error
                        })
                    }
                }
            })
    } catch (error) {
        res.status(404).send({
            error: error
        })
    }
}

exports.getAuthUser = async (req, res) => {
    try {
        const user = await User.User.find({_id : req.user.id})
        
        if(!user) {
            return res.send({
                error: "Not Found"
            })
        }
        res.status(200).send({
            user: user
        })
    } catch (error) {
        res.status(400).send({
            error : "something went wrong"
        })
    }
}

exports.editUser = async (req, res) => {
    try{
        const {name, matric_no, contact_no, email,guardian_name,guardian_no} = req.body
        const newUser = {
            name : name,
            matric_no: matric_no,
            contact_No : contact_no,
            email: email,
            guardian_Name :guardian_name,
            guardian_No : guardian_no
        }

        const updateUser = await User.User.findByIdAndUpdate(
            {_id: req.user.id},
            {$set: newUser},
            {new : true}
        )
        
        if(!updateUser) {
            return res.status(400).send({
                error : "failed to update user"
            })
        }
        
        res.status(200).send({
            payload: "Successfull"
        })

    } catch(err) {
        res.status(400).send({
            error : "something went wrong"
        })
    }
}

exports.assignRole = async (req, res) => {
    try{
        const {name, matric_no, contact_No, email ,guardian_Name,guardian_No, role} = req.body
        const newUser = {
            name : name,
            matric_no: matric_no,
            contact_No : contact_No,
            email: email,
            guardian_Name :guardian_Name,
            guardian_No : guardian_No,
            role:role
        }

        const updateUser = await User.User.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: newUser},
            {new : true}
        )
        
        if(!updateUser) {
            return res.status(400).send({
                error : "failed to update user"
            })
        }
        
        res.status(200).send({
            payload: "Successfull"
        })

    } catch(err) {
        res.status(400).send({
            error : "something went wrong"
        })
    }
}

exports.getAllUser = async (req,res)=> {
    try {
        const users = await User.User.find({
            $or: [
                {role: {$eq:"User"}},
                {role: {$eq:"Agent"}}
            ]
        })
        .populate("bed")
        if(!users) {
            return res.send({
                error: "user is Empty"
            })
        }
        res.status(200).send({
            payload: users,
        })
    } catch (error) {
        return res.status(400).send({
            error : "Something went wrong"
        })
    }
}
exports.getUser = async (req,res)=> {
    try {
        const user = await User.User.find({_id : req.params.id})

        if(!user) {
            return res.send({
                error: "user is Empty"
            })
        }
        res.status(200).send({
            payload: user,
        })
    } catch (error) {
        return res.status(400).send({
            error : "Something went wrong"
        })
    }
}