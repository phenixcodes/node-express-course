const { CustomAPIError } = require('../errors/custom-error.js')

const errorHandlerMiddleware = (err,req,res,next) => {
    if(err instanceof CutstomAPIError){
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(500), json({ msg: 'Something went wronf, please try again' })
}

module.exports = errorHandlerMiddleware