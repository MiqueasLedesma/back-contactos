import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config();
const { DB_HOST, DB_USER, DB_PASSWORD } = process.env;

export const sequelize = new Sequelize(DB_HOST, DB_USER, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  dialectOptions: {
    supportBigNumbers: true,
    bigNumberStrings: true
  }
}); 
