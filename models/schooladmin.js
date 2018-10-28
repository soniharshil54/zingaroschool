let mongoose = require("mongoose");

let schooladminSchema = mongoose.Schema(
    {
        name: {
            type: 'String'
        },
        principal: {
            type: 'String'
        },
        profilephoto: {
            type: 'String'
        },
        schoollogo: {
            type: 'String'
        },
        gallary: {
            type: [
                'String'
            ]
        },
        notice: {
            type: [
                'Mixed'
            ]
        }
    }
)

let Schooladmin = module.exports = mongoose.model('Schooladmin',schooladminSchema);