// import { Client } from 'pg';
// import { Client } from 'pg';
// const { Client } = require('pg');
import pkg from 'pg';
const { Client } = pkg;


const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "hemant",
    post: 5432
})

let isClientAvailable = 0;

export const getClientInstance = async () => {
    if (!isClientAvailable) {
        await client.connect()
        isClientAvailable = 1;
    }
    return client;
}