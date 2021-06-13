const db = require('../db')

module.exports = db.define(
    'clinic',
    {
        clinic_id:
        {
            type: 'INT(11)',
            allowNull: false,
            defaultValue: null,
            primaryKey: true,
            autoIncrement: true
        },
        name:
        {
            type: 'VARCHAR(255)',
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
        tableName: 'clinic',
        freezeTableName: true,
        timestamps: false
    }
)
