require('dotenv').config()
const model = require('../model/users')
const { requestResponse } = require('../utils/index')

let response

const login = async ({ EMAIL, PASSWORD }) => {
    const email = await model.findOne({ EMAIL: EMAIL }, { _id: false }, { lean: true })
    if (email === null) {
        response = { ...requestResponse.unauthorized }
        response.message = 'EMAIL TIDAK TERDAFTAR'
        return response
    }
    if (PASSWORD !== email.PASSWORD) {
        response = { ...requestResponse.unauthorized }
        response.message = 'PASSWORD ANDA SALAH'
        return response
    }
    const result = {
        ...requestResponse.success, data: {
            user: { ...email }
        }
    }
    return result
}

module.exports = {
    login
}