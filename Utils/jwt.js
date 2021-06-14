const jwt = require('jsonwebtoken')
const { token } = require('morgan')

const PUB_KEY = [
    '-----BEGIN PUBLIC KEY-----',
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCZSQ7438arSli/EDNUHtIZWmZA',
    'ClTjv2GD4kucXGwo5xW439LBFdjyYsHdj+v4BQpMiUSXRxW67dvG1Cq0Tp9xMhem',
    'RjgSTk987fGIz8E6LJnMCL4SZHtu0/MLhPAFaOPICLKAYGkxG2mIrjM8H0BKlumY',
    'XW3yaAUdFRiJ8Po43wIDAQAB',
    '-----END PUBLIC KEY-----'
].join('\n')

const PRI_KEY = [
    '-----BEGIN PRIVATE KEY-----',
    'MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAJlJDvjfxqtKWL8Q',
    'M1Qe0hlaZkAKVOO/YYPiS5xcbCjnFbjf0sEV2PJiwd2P6/gFCkyJRJdHFbrt28bU',
    'KrROn3EyF6ZGOBJOT3zt8YjPwTosmcwIvhJke27T8wuE8AVo48gIsoBgaTEbaYiu',
    'MzwfQEqW6ZhdbfJoBR0VGInw+jjfAgMBAAECgYA5hCdhDR6PwVrhfmO0KchuCPSb',
    'DQVjW7lscioq5qcTBfqpnxqGpvr7oEDcMRe6vbFqnIsnNF4cAQpZZd0MQQAkNL7F',
    'vWzhsmjiUwbxq8VR3srl1++hVhivl0dQZ77sj2m4vLYtyRb30MJfNtnmkz1RW5mx',
    'reicTOSb6y+fPE+KgQJBANy2JhgpW7REVJIIChR0glY3oantnC+xly3Mv9KFxnD5',
    'o6PN2Yln3QdLYzzAIVTiniYqdeCYS0PaCw9iSIjXbUECQQCxyx5iJOrOcWvBnjih',
    'rhQ/pQDlvMiN+9iraw8hDWn9oH+AK0fPzccNjAGucUSbdUnTCk3/GIbNNjtyc9Kp',
    'nn4fAkEAwxb6ezbriV8wxdf3WPdXUfBgpLyT5xB6ChDGqcZ3jtsKyzqkg7FcDRuU',
    '/1jw3YBmvGOhyEG1nac5SYLdjJ+nQQJAEQuDFy+o3y/af852aXGx+UQNaPkHVS1e',
    '4Vg7NBUAI1OexZ/gm5iDy9WvV5T+WdUNxdDIF3u3eLcJTfiyqpZKSwJAIRN1nSaK',
    'RVeecJM+ZQ9aROiPWHpTqjyYBi3AAPpKfv/QXx0mDxl5bsCXE0og6qBTQTE+8kKJ',
    'w77qsfKbw5ahKw==',
    '-----END PRIVATE KEY-----'
].join('\n')

const signOptions = {
    algorithm: 'RS256',
    expiresIn: '1h'
}

const verifyOptions = {
    algorithm: ['RS256']
}

class JWT {
    static genToken(payload) {
        return new Promise((res, rej) => {
            jwt.sign(payload, PRI_KEY, signOptions, (err, token) => {
                if (err) {
                    console.log(err);
                    rej({ msg: 'error on genToken' });
                }
                else
                    res(token);
            });
        });
    }
    static verifyToken(token) {
        return new Promise((res, rej) => {
            jwt.verify(token, PUB_KEY, verifyOptions, (err, decoded) => {
                if (err)
                    rej({ msg: err });
                else
                    res(decoded);
                console.log('decoded: ', decoded);
            })
        })
    }
}

module.exports = JWT