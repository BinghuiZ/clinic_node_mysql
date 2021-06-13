const db = require('../db')

module.exports = db.define(
    'users',
    {
        uid:
        {
            type: 'INT(11)',
            allowNull: false,
            defaultValue: null,
            primaryKey: true,
            autoIncrement: true
        },
        email:
        {
            type: 'VARCHAR(255)',
            unique: true,
            allowNull: false,
            defaultValue: null,
            primaryKey: false
        },
        password:
        {
            type: 'VARCHAR(255)',
            allowNull: false,
            defaultValue: null,
            primaryKey: false
        },
        phone_no:
        {
            type: 'VARCHAR(8)',
            allowNull: false,
            defaultValue: null,
            primaryKey: false
        },
        address:
        {
            type: 'VARCHAR(255)',
            allowNull: true,
            defaultValue: null,
            primaryKey: false
        }
    },
    {
        tableName: 'users',
        freezeTableName: true,
        timestamps: false
    }
)
