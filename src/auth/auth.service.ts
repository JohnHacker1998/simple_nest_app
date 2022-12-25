import { Injectable } from "@nestjs/common";
import {InjectRepository} from '@nestjs/typeorm'
import { User } from "src/typeorm/entities/User.entity";
import {Repository} from 'typeorm'
import { SignIn,SignUp } from "src/utils/auth.types";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

Injectable({})
export class AuthService{
    constructor(@InjectRepository(User) private userRepository:Repository<User>){}
async signin(signInData:SignIn){
    const foundUser=await this.userRepository.findOne({
        where:{
            email:signInData.email
        }
    })
    if(!foundUser)
    return {
        message:"User not found"
    }
    const isPasswordCorrect=await bcrypt.compare(signInData.password,foundUser.password)
    if(!isPasswordCorrect)
    return "Email or password is incorrect"

    const token:string=jwt.sign({
        id:foundUser.id
    },process.env.JWT_KEY)
    const {password,...importantAttributes}=foundUser

    return {
        importantAttributes,
        token
    }



}

async signup(signUpData:SignUp){
    console.log(signUpData)
    const salt=bcrypt.genSaltSync(10)
    signUpData.password=bcrypt.hashSync(signUpData.password,salt)
    const user=await this.userRepository.create({
        first_name:signUpData.first_name,
        last_name:signUpData.last_name,
        email:signUpData.email,
        password:signUpData.password
    })
    return this.userRepository.save(user)

}
}