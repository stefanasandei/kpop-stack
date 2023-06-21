import { type PostgresJsDatabase, drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";

import { env } from "~/env";

const client = postgres(env.DATABASE_URL, { ssl: "require" });
const needsMigrations = false && env.NODE_ENV == "development";
let db: null | PostgresJsDatabase = null;

export const getDB = async () => {
  if (db == null) {
    db = drizzle(client);
    if (needsMigrations)
      await migrate(db, { migrationsFolder: "./migrations" });
  }
  return db;
};
