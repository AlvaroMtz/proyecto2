const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comentSchema = new Schema({
    description: String,
    name: String,
    date: Date,
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    user_name: String,
    event_id: {
        type: Schema.Types.ObjectId,
        ref: "Event"
    },
    imgUrl: { type: String, default: "https://placeholdit.imgix.net/~text?txtsize=50&txt=Ironfunding&w=250&h=250" }
},
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    });

var Coment = mongoose.model("Coment", comentSchema);
module.exports = Coment;
