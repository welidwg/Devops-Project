import { Sequelize } from "sequelize";
const sequelize = new Sequelize({
    database: "cars",
    username: "phpmyadmin",
    password: "root",
    host: "localhost",
    dialect: "mysql",
});

export default sequelize;