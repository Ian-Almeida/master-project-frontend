import React from 'react';
import {IUser, IUserCreate} from '../interfaces/user'
import API from '../api'


let userModel: IUser[] = [];

const userCreateModel: IUserCreate = {id:'',name:'', email:'',password:'',active:false}

// const [userCreate, setUserCreate]: [IUserCreate, (userCreated: IUser) => void] = React.useState(userCreateModel);

// const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  
// const [error, setError]: [string, (error: string) => void] = React.useState("");

export default class userStore{

    public async createUser(user: IUserCreate) {
        try{
            const response = await API.createUser(user);
            if(response){
                console.log(response.data);
            }
        }
        catch(e){
            console.log(e)
        }
    }

    public async userLogin(email: string, password: string) {
        try {
            const response = await API.userLogin(email, password);
            if(response) {
                return response.data;
            }
        } catch(e) {
            console.log(e)
        }
    }
    
    public async setUser() {
        return
    }
}


