import {v4 as uuidv4} from 'uuid';
uuidv4();
let users = [];

export const createUser = (req,res)=>{   
    const user = req.body;

    const userWithId = {...user, id: uuidv4()};

    users.push(userWithId);
    res.send(`User with Name:  ${user.firstName} added to the database`);
}

export const getUser = (req,res) =>{
    res.send(users);
}

export const getUserID = (req,res)=>{
    const {id} = req.params;

    const foundUser = users.find((us)=>
        us.id === id); //iterate through users array to find user with id similar to parameter of GET req
    res.send(foundUser);
}

export const deleteUser = (req,res)=>{
    const {id} = req.params;

    users = users.filter((us) => us.id !== id); //if true it stays in array 
    res.send(`User with id ${id} is deleted from the database`);
}

export const updateUser = (req,res)=>{
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const us = users.find((us)=> us.id===id);
    
    if(firstName)us.firstName = firstName;
    
    if(lastName)us.lastName = lastName;
    
    if(age)us.age = age;

    res.send(`User with id: ${id} has been updated`);
}