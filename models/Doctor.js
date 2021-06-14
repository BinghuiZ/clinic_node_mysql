const db = require('../db')
const Clinic = require('./Clinic')

module.exports = db.define(
    'doctor',
    {
        doctor_id:
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
        clinic_id:
        {
            type: 'INT(11)',
            references: {
                model: Clinic,
                key: 'clinic_id'
            }
        }
    },
    {
        tableName: 'doctor',
        freezeTableName: true,
        timestamps: false
    }
)
