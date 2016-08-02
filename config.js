const development = {
  db: "4RES_Todo",
  host: "rethinkdb",
  port: 28015
};

const production = {

};

module.exports = {
  database: process.env === "production" ? production : development
};
