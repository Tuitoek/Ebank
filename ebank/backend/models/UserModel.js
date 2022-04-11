import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define('users', {
    firstname: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    },
    accountnumber: {
        type: DataTypes.INTERGER
    },
    password: {
        type: DataTypes.INTERGER
    },
    refresh_token: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true
});

(async() => {
    await db.sync();
})();

export default Users;