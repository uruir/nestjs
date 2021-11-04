import { Document } from "mongoose";

export interface User extends Document {
    readonly username: string;
    readonly passport: string;
    readonly gender: 'male' | 'female';
    readonly birthdate: string;
    readonly alias: string;
    readonly profile: string;
    readonly headImg: string;
    readonly likes: string;
    readonly following: User[];
    readonly followers: User[];
}