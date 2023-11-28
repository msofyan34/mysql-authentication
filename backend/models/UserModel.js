import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Users = db.define(
  "users",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4, // generate otomatis dengan uuid versi 4
      allowNull: false, // tidak boleh bernilai null
      validate: {
        notEmpty: true, // tidak boleh bernila empty string
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, // tidak boleh bernilai null
      validate: {
        notEmpty: true, // tidak boleh bernila empty string
        len: [3, 100],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, // tidak boleh bernilai null
      validate: {
        notEmpty: true, // tidak boleh bernila empty string
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false, // tidak boleh bernilai null
      validate: {
        notEmpty: true, // tidak boleh bernila empty string
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false, // tidak boleh bernilai null
      validate: {
        notEmpty: true, // tidak boleh bernila empty string
      },
    },
  },
  { freezeTableName: true }
);

export default Users;
