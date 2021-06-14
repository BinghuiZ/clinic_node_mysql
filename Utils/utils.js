var moment = require('moment-timezone');

exports.isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Minimum 8 char, at least 1 uppercase, 1 lowercase & 1 number
 */
exports.isValidPassword = (ps) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    return regex.test(String(ps))
}

exports.convertDateTimeString = (dateTimeString) => {
    let dateTime = moment(dateTimeString).tz('Asia/Hong_Kong').format('yyyy-MM-DD HH:mm:ss')
    // console.log(dateTime)
    return dateTime
}

exports.isValidDate = (dateTimeString) => {
    return moment(dateTimeString, 'yyyy-MM-DD HH:mm:ss').isValid()
}