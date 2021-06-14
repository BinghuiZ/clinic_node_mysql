const { isValidEmail, isValidPassword, isValidDate, convertDateTimeString } = require("../Utils/utils")
const md5 = require("md5")

const JWT = require('../Utils/jwt')
const User = require('../models/User')
const Doctor = require("../models/Doctor")
const Record = require("../models/Record")
const sequelize = require('../db')
const { QueryTypes } = require("sequelize")
var moment = require('moment');

exports.register = async (req, res) => {
    let { email, password, phone_no, address } = req.body
    try {
        if (!isValidEmail(String(email))) {
            res.status(400).json({ success: false, message: 'Email format is not correct', data: {} })
        }

        if (!isValidPassword(String(password))) {
            res.status(400).json({ success: false, message: 'Password is no matching format minimum 8 charaters with at least 1 uppercase, 1 lowercase and 1 number', data: {} })
        }

        const [user, created] = await User.findOrCreate({
            where: { email },
            defaults: {
                email: email,
                password: md5(password),
                phone_no: phone_no,
                address: address
            }
        });

        console.log(user)
        console.log(created)

        let token = await JWT.genToken({ email: email })

        if (created) {
            res.status(200).json({ success: true, message: 'Registration success', data: { token: `Bearer ${token}` } })
        } else {
            res.status(400).json({ success: false, message: 'Account has been created, please create another account.', data: {} })
        }

    } catch (e) {
        console.log(e)
        res.status(400).json({ success: false, message: 'error occurs', data: {} })
    }
}

exports.login = async (req, res) => {
    let { email, password } = req.body
    try {
        if (!isValidEmail(String(email))) {
            res.status(400).json({ success: false, message: 'Email format is not correct', data: {} })
        }

        if (!isValidPassword(String(password))) {
            res.status(400).json({ success: false, message: 'Password is no matching format minimum 8 charaters with at least 1 uppercase, 1 lowercase and 1 number', data: {} })
        }

        const user = await User.findOne({ where: { email: email, password: md5(password) } });
        if (user === null) {
            res.status(400).json({ success: false, message: 'Email or Password is not correct', data: {} })
        } else {
            let token = await JWT.genToken({ email: user.email })
            res.status(200).json({ success: true, message: 'Logged in', data: { token: `Bearer ${token}` } })
        }


    } catch (e) {
        console.log(e)
        res.status(400).json({ success: false, message: 'error occurs', data: {} })
    }
}

exports.addRecord = async (req, res) => {
    let { doctor_name, patient_name, diagnosis, medication, consultation, follow_up } = req.body
    try {
        let doc = await Doctor.findOne({ where: { name: doctor_name } })
        if (doc === null) {
            res.status(400).json({ success: false, message: 'Doctor not found', data: {} })
        } else {
            let createdResult = await Record.create({
                doctor_id: doc.doctor_id,
                patient_name: patient_name,
                diagnosis: diagnosis,
                medication: medication,
                consultation: consultation,
                date: new Date(),
                follow_up: follow_up
            })
            // .toISOString().replace(/T/, ' ').replace(/\..+/, '')
            console.log(createdResult)
            res.status(200).json({ success: true, message: 'reord has been created' })
        }


    } catch (e) {
        console.log(e)
        res.status(400).json({ success: false, message: 'error occurs', data: {} })
    }
}

exports.listRecords = async (req, res) => {
    let { from, to, limit, offset } = req.query
    console.log(req.query)
    try {
        if (isNaN(limit) || isNaN(offset)) {
            res.status(400).json({ success: false, message: 'data limit or offset is not number', data: {} })
        }
        if (limit < 0 || offset < 0) {
            res.status(400).json({ success: false, message: 'data limit or offset is negative number', data: {} })
        }
        if (!isValidDate(from) || !isValidDate(to)) {
            res.status(400).json({ success: false, message: 'date format is not correct', data: {} })
        }
        if (moment(from) > moment(to)) {
            res.status(400).json({ success: false, message: 'from(Date) cannot be after to(Date)', data: {} })
        }

        let queryString = `SELECT c.name as clinic, d.name as doctor_name, r.patient_name, r.diagnosis, r.medication, r.consultation, r.date, r.follow_up
                            FROM record as r, clinic as c, doctor as d
                            WHERE r.doctor_id = d.doctor_id AND d.clinic_id = c.clinic_id
                            AND (r.date BETWEEN '${from}' AND '${to}')
                            ORDER BY r.rid ASC LIMIT ${offset}, ${limit}`
        const result = await sequelize.query(queryString, { type: QueryTypes.SELECT })
        const finalJson = result.map((data) => {
            return {
                clinic: data.clinic,
                doctor_name: data.doctor_name,
                patient_name: data.patient_name,
                diagnosis: data.diagnosis,
                medication: data.medication,
                consultation: data.consultation,
                date: convertDateTimeString(data.date),
                follow_up: data.follow_up
            }
        })

        res.status(200).json({ success: true, message: 'reord has been created', data: finalJson })
    } catch (e) {
        console.log(e)
        res.status(400).json({ success: false, message: 'error occurs', data: {} })
    }
}