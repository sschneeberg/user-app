const db = require('./models');


//make a user in the user table
/*
db.user.create({
    firstName: 'Simone',
    lastName: 'Schneeberg',
    age: 23
}).then(createdUser => {
    console.log(createdUser);
}) */


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
/*
db.user.update({
    age: 68
}, {
    where: { firstName: 'Ben' }
}).then(changedRows => console.log(changedRows))
*/

/*
//delete
db.user.destroy({
    where: { firstName: 'Simone' }
}).then(deltedRows => console.log(deltedRows))
*/

//ONE TO MANY RELATIONSHIPS
// Add a pet, userId will auto populate
/*
db.user.findOne({ where: { firstName: 'Ben' } }).then(foundUser => {
    foundUser.createPet({
        name: 'Anna',
        type: 'Cat'
    })
})
*/

/*
//find with associated tables
db.user.findOne().then(foundUser => {
    foundUser.getPets().then(foundPet => {
        console.log(foundPet)
    })
}) */

/*
db.pet.create({
    name: 'Merlin',
    type: 'Cat'
})*/
/* Assign an unlinked pet to a user
db.pet.findOne({ where: { name: 'Merlin' } }).then(pet => {
    db.user.findOne({ where: { firstName: 'Simone' } }).then(foundUser => {
        pet.setUser(foundUser);
    })
})
*/

db.pet.findOne({ where: { name: 'Spike' } }).then((Spike) => {
    db.toy.findOne({ where: { type: "ball" } }).then(toy => {
        toy.addPet(Spike)
    })
});

//find or create can cause problems trying to compare a boolean to an id once the thing already exists

db.toy.findOne({ where: { type: 'stick' } }).then((toy) => {
    db.pet.findOne({ where: { name: 'Spike' } }).then(Spike =>
        Spike.addToy(toy))
})

db.toy.findOne({ where: { type: 'ball' } }).then(toy => {
    db.pet.findOne({ where: { name: 'RagsB' } }).then(RagsB => {
        RagsB.addToy(toy)
    })
})

db.toy.findOrCreate({ where: { type: 'ball' } }).then(toy => {
    toy[0].getPets().then(pets => {
        pets.forEach(pet => console.log(pet.get()))
    })
})

//use include to work from only one model
db.pet.findOne({ where: { name: 'Spike' }, include: [db.toy] }).then((pet) => {
    pet.toys.forEach(toy => {
        console.log(pet.name, 'loves', toy.color);
    })
})