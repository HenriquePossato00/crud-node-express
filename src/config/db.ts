import mongoose from "mongoose";
import { env } from "./env.js"

export async function connectToDataBase() {
    try {
        await mongoose.connect(env.mongoUri);
        console.log("db connect successfuly");
    } catch (error) {
        console.log("Error connecting to db: " + error);
        process.exit(1);
    }
} 