import pg from "pg";

const { Client } = pg;

export const client = new Client({
  user: "user",
  password: "password",
  host: "localhost",
  port: 5433,
  database: "mydatabase",
});
