import { getClientInstance } from "../index.js"

const client = await getClientInstance();
console.log("reached    1")
const query_ = `create table cars(
                    brand varchar(10) not null unique,
                    year int ,
                    total_modal int default(0))`

await client.query(query_)

