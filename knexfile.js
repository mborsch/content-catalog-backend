// Update with your config settings.

const path = require("path");

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require("dotenv").config();
const { DATABASE_URL } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
  },
};
