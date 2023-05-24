import dotenv from "dotenv";

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGOPASSWORD;
const MONGO_URL = process.env.MONGO_URL;

export const config = {
  mongo: {
    url: MONGO_URL,
  },
};
