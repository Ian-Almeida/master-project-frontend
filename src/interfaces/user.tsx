import React from 'react';

export interface ILogin {
    email: string,
    password: string,
}

export interface IUser {
    id: string,
    name: string,
    email: string,
    password: string,
    active: boolean,
}

export interface IUserCreate {
    id: string,
    name: string,
    email: string,
    password: string,
    active: boolean,
}

