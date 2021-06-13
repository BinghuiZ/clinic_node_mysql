const { isValidEmail, isValidPassword } = require("../Utils/utils")
const User = require('../models/User')
const md5 = require("md5")

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

        if (created) {
            res.status(200).json({ success: true, message: 'Registration success', data: {} })
        } else {
            res.status(400).json({ success: false, message: 'Account has been created, please create another account.', data: {} })
        }
        
    } catch (e) {
        console.log(e)
        res.status(400).json({ success: false, message: 'system error', data: {} })
    }
}