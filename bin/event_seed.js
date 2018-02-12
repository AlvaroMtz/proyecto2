const mongoose = require('mongoose');
const {
    dbUrl
} = require('../config');
const Coment = require('../models/Coment');
const User = require('../models/User');
const Event = require('../models/Event');
mongoose.connect(dbUrl).then(() => console.log('db running'));

function getRandomUser() {
    User.find().exec((err, result) => {
        let randomIndex = Math.floor(Math.random() * (result.length + 1));
        let event = new Event({
            type: "Fútbol",
            name: "Partido de fútbol 5",
            limit: "10",
            price: 5,
            user_id: "5a8174230abd42c57aef7b10",
            user_name : "pepe",
        })
        event.save((err) => {
            if (err) {
                throw err;
            }
            console.log(`event added by ${event.user_name}`)
            //cierra la conexion
            mongoose.connection.close();
        });
    });
};
getRandomUser();