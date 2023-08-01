import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title:{
        type: String,
        required: true
    }, 
    author:{
        type: String,
        required: true
    }, 
    description:{
        type: String,
        required: true
    },
    publication_year:{
        type: String,
        required: true
    } 
});

export default mongoose.model("Book", bookSchema);