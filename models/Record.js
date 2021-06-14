const { DataTypes } = require('sequelize')
const db = require('../db')
const Doctor = require('./Doctor')


module.exports = db.define(
    'record',
    {
        rid:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: null,
            primaryKey: true,
            autoIncrement: true
        },
        doctor_id:
        {
            type: DataTypes.INTEGER,
            references: {
                model: Doctor,
                key: 'doctor_id'
            }
        },
        patient_name:
        {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: null,
            primaryKey: false
        },
        diagnosis:
        {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: null,
            primaryKey: false
        },
        medication:
        {
            type: DataTypes.STRING,
            defaultValue: null,
            primaryKey: false
        },
        consultation:
        {
            type: DataTypes.INTEGER,
            defaultValue: null,
            primaryKey: false
        },
        date:
        {
            type: DataTypes.DATE,
            defaultValue: null,
            primaryKey: false
        },
        follow_up:
        {
            type: DataTypes.BOOLEAN,
            defaultValue: null,
            primaryKey: false
        }
    },
    {
        tableName: 'record',
        freezeTableName: true,
        timestamps: false
    }
)
