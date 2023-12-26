const {
    UserOTPService,
    UserVerify,
    UserProfileSave,
    UserProfileDetails
} = require("../Services/UserService");

exports.UserOTP=async (req,res)=>{
    let result=await UserOTPService(req)
    return res.status(200).json(result)
}


exports.VerifyLogin=async (req,res)=>{
    let result=await UserVerify(req)

    if(result['status']==="success"){

        // Cookies Option
        let cookieOption={expires:new Date(Date.now()+24*6060*1000), httpOnly:false}

        // Set Cookies With Response
        res.cookie('token',result['token'],cookieOption)
        return res.status(200).json(result)

    }else {
        return res.status(200).json(result)
    }
}


exports.UserLogout=async (req,res)=>{
    let cookieOption={expires:new Date(Date.now()-24*6060*1000), httpOnly:false}
    res.cookie('token',"",cookieOption)
    return res.status(200).json({status:"success"})
}


exports.CreateProfile=async (req,res)=>{
    let result=await UserProfileSave(req)
    return res.status(200).json(result)
}


exports.UpdateProfile=async (req,res)=>{
    let result=await UserProfileSave(req)
    return res.status(200).json(result)
}


exports.ReadProfile=async (req,res)=>{
    let result=await UserProfileDetails(req)
    return res.status(200).json(result)
}

