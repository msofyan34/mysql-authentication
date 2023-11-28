import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Product = db.define(
  "product",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
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
    price: {
      type: DataTypes.INTEGER,
      allowNull: false, // tidak boleh bernilai null
      validate: {
        notEmpty: true, // tidak boleh bernila empty string
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false, // tidak boleh bernilai null
      validate: {
        notEmpty: true, // tidak boleh bernila empty string
      },
    },
  },
  { freezeTableName: true }
);

// relation one to many
Users.hasMany(Product);
Product.belongsTo(Users, { foreignKeys: "userId" });

export default Product;
