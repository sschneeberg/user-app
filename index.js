const db = require('./models');


//make a user in the user table
/*
db.user.create({
    firstName: 'Ben',
    lastName: 'Schneeberg',
    age: 23
}).then(createdUser => {
    console.log(createdUser);
})
*/

//find users
/*
db.user.findOne({
    where: { firstName: 'Ben' }
}).then(foundUser =>
    //returns an object
    console.log(foundUser.get()));

db.user.findAll({
    where: { age: 23 }
    //returns an array of objects
}).then(foundUsers =>
    foundUsers.forEach(user => console.log(user.get())));
*/

//update
db.user.update({
    age: 68
}, {
    where: { firstName: 'Ben' }
}).then(changedRows => console.log(changedRows))

//delete
db.user.destroy({
    where: { firstName: 'Simone' }
}).then(deltedRows => console.log(deltedRows))