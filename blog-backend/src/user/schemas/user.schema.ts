import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    gender: String,
    birthdate: String,
    alias: String,
    profile: String,
    headImg: String,
    likes: String,
    following: [],
    followers: []
})