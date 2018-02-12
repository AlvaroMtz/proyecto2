const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    type: String,
    name: String,
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    user_name: String,
    limit: Number,
    price: Number,
    location: {
        lat: String,
        lng: String
    },
},
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    });

var Event = mongoose.model("Event", eventSchema);
module.exports = Event;
