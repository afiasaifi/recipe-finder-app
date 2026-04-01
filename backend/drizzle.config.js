//Configures Drizzle to use schema and migration output folder
import { ENV } from "./src/config/env.js";

export default {
    schema: "./src/db/schema.js",
    out: "./src/db/migrations",
    dialect: "postgresql",
    dbCredentials: { url: ENV.DATABASE_URL },
};