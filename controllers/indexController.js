const { isValidEmail, isValidPassword } = require("../Utils/utils")
const md5 = require("md5")

const JWT = require('../Utils/jwt')
const User = require('../models/User')
const Doctor = require("../models/Doctor")
const Record = require("../models/Record")

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
                date: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
                follow_up: follow_up
            })

            console.log(createdResult)
            res.status(200).json({ success: true, message: 'reord has been created' })
        }


    } catch (e) {
        console.log(e)
        res.status(400).json({ success: false, message: 'error occurs', data: {} })
    }
}

exports.listRecords = async (req, res) => {

}