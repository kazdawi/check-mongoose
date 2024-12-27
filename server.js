const express = require('express')

require ('dotenv').config()

const app= express()

// connect to db
const connectDB= require('./config/connectDB')
connectDB()

app.get('/test',(req,res)=>{
    res.end('this is a test!!!')
})

const person = require('./models/person');
const Person = require('./models/person')
connectDB();



const newPerson={
    name:"Aziz",
    age:21,
    email:"aziz@gmail.com",
    favoriteFoods:["ma9rouna"],
};
async function createPerson(newPerson){
    try {
        const newP= await new Person(newPerson).save();
        console.log("the person is saved",newP)
    } catch (error) {
        console.log(error)
    }
}
// createPerson(newPerson);

const arraypresons=[
    {
        name:"ahmed",
        age:21,
        email:"ahmed@gmail.com",
        favoriteFoods:["mlewi"]
    },
    {
        name:"slim",
        age:21,
        email:"slim@gmail.com",
        favoriteFoods:["lablebi"]
    },
    {
        name:"khaled",
        age:21,
        email:"khaled@gmail.com",
        favoriteFoods:["kosksi"]
    },
    {
        name:"youssef",
        age:21,
        email:"youssef@gmail.com",
        favoriteFoods:["kafteji"]
    },
    {
        name:"hamza",
        age:21,
        email:"hamza@gmail.com",
        favoriteFoods:["makloub"]
    },
    {
        name:"omar",
        age:21,
        email:"omar@gmail.com",
        favoriteFoods:["makloub"]
    },
]
async function insertPersons(arr){
    try {
        const personToInsert= await Person.insertMany();
        console.log("the list of person is",personToInsert)
    } catch (error) {
        console.log(error)
    }
   

}

insertPersons(arraypresons);



// find
async function showPersons(){
    try {
        const personList= await Person.find();
        console.log("the list of person is",personList)
    } catch (error) {
        console.log(error)
    }
}
// showPersons();

async function findPerson(id){
    try {
        const personToFind = await Person.findById(id)
        console.log('the person is',personToFind)
    } catch (error) {
        console.log(error)
    }
}
// findPerson('id');


async function findPersonbyName(name){
    try {
        const personToFind= await Person.findOne({name:name})
        console.log(`the person with this name:${name} `,personToFind)
    } catch (error) {
        console.log(error)
    }
}
// findPersonbyName("omar");

// update

async function updateAge(id,age){
    try {
        const personToUpdate = await Person.findByIdAndUpdate(
            id,
            {$set:{age:age}},
            {new:true}
        );
        console.log('age updated successfully',personToUpdate);
    } catch (error) {
        console.log(error);
    }
}
// updateAge("id,the update");

async function updateFood(id,favoriteFoods){
    try {
        const personToUpdate = await Person.findByIdAndUpdate(
            id,
            {$push:{favoriteFoods:Food}},
            {new:true}
        );
        console.log(personToUpdate);
    } catch (error) {
        console.log(error);
    }
}
// updateFood("id,the update");

// delete
async function deletePerson(id){
    try {
        const personDelete = await person.findByIdAndDelete(id);
        console.log("deleted")
    } catch (error) {
        console.log(error)
    }
}
deletePerson('id');


// ****************************************************************************************************

// PORT
const PORT =process.env.PORT|| 4000


// server
app.listen(PORT,(err)=>{
    err? console.log('err')
        : console.log(`the server is running on : http://127.0.0.1:${PORT}`)
})