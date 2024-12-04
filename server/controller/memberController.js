import memberModel from "../model/memberModel.js";

export const createMember = async(req, res) => {
    
    console.log(req.body);

    try {
        const newMember = new memberModel(req.body);

        const {mobile} = newMember;
        const memberExist = await memberModel.findOne({mobile});
        if(memberExist){
            return res.status(500).json({message: "Member already exists."});
        }
        await newMember.save();
        res.status(200).json({message: "Member registered successfully."});
    } catch (error) {
        res.status(500).json({errorMessage:error.message});
    }
}