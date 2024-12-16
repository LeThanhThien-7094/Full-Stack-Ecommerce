
const userModel = require("../../models/userModel")
const bcrypt = require('bcryptjs');
const router = require('../../routes');

async function userSignUpController(req,res){
    try {
            const {email,password,name} = req.body

            const user = await userModel.findOne({email})

            console.log("user",user)

            if(user){
                throw new Error("NGƯỜI DÙNG ĐÃ TỒN TẠI !!!")
            }

            if(!email){
                throw new Error("Vui lòng nhập email !!! ")
            }
            if(!password){
                throw new Error("Vui lòng nhập password !!! ")
            }
            if(!name){
                throw new Error("Vui lòng nhập name !!! ")
            }

            const salt = bcrypt.genSaltSync(10);
            const hashPassword = await bcrypt.hashSync(password, salt);

            if(!hashPassword){
                throw new Error("Có lỗi !!!")
            }

            const payload = {
                ...req.body,
                role : "GENERAL",
                password : hashPassword
            }


            const userData = new userModel(payload)
            const saveUser = await userData.save()

            res.status(201).json({
                data : saveUser,
                success : true,
                error : false,
                message : "User created Successfully"
            })
            
    } catch (err) {
       
        res.json({
            message : err.message || err,
            error : true,
            success : false, 
        })
    }
}

module.exports = userSignUpController