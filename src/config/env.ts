import { config } from "dotenv";

config();

export const env = {
    mongoUri: process.env.MONGO_URI || "",
    port: process.env.PORT || 3000,
};