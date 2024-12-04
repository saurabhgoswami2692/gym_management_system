import mongoose, { mongo } from "mongoose";

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    mobile: {
        type: String,
    },
    membershipType:{
        type: String,
    },
    startDate: {
        type:Date,
        default: Date.now,
    },
    endDate: {
        type:Date,
    },
    status: {
        type:String,
    }
},{timestamps:true});

export default mongoose.model('Members',memberSchema);