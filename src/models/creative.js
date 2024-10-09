import mongoose,{Schema} from "mongoose";

const creativeSchema = new Schema({
    title:String,
    description:String,
    fileName:String,
},{
    timestamps:true,
})

const Creative = mongoose.models.Creative  || mongoose.model('Creative', creativeSchema);

export default  Creative;

