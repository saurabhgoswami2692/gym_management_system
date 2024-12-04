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

export const getAllMembers = async(req,res) => {
    try {
        const members = await memberModel.find();
        const totalMembers = await memberModel.countDocuments();
        if(!members || members.length === 0 ) {
            return res.status(400).json({message:"Data not found."});
        }

        res.status(200).json({
            members:members,
            totalMembers: totalMembers
        });


    } catch (error) {
        res.status(500).json({errorMessage:error.message});
    }
}

export const updateMember = async(req, res) => {

    try {
        const id = req.params.id;
        const userExist  = await memberModel.findById(id);
        if(!userExist){
            return res.status(400).json({message:"Data not found."});
        }

        const updatedData = req.body;
        await memberModel.findByIdAndUpdate(id,updatedData);
        
        res.status(200).json({message:"Member updated successfully."});

    } catch (error) {
        res.status(500).json({errorMessage: error.message});
    }

}

export const deleteMember = async(req, res) => {
    try {
        const id = req.params.id;
        await memberModel.findByIdAndDelete(id);
        res.status(200).json({message:"Member deleted successfully."});
    } catch (error) {
        res.status(500).json({errorMessage:error.message});
    }
}