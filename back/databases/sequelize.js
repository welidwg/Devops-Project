import { Sequelize } from "sequelize";
const sequelize = new Sequelize({
    database: "cars",
    username: "root",
    password: "root",
    host: "mysql",
    dialect: "mysql",
    port: 3306
});

export default sequelize;