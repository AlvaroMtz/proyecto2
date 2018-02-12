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
        let coment = new Coment({
            description : "ola k ase",
            user_id: "5a8174230abd42c57aef7b10",
            user_name : "pepe",
            event_id : "5a817bc8f8f895c8908f00b6",
            event_name : "Partido de fútbol 5"
        })
        coment.save((err) => {
            if (err) {
                throw err;
            }
            console.log(`coment added by ${coment.user_name}`)
            //cierra la conexion
            mongoose.connection.close();
        });
    });
};
getRandomUser();