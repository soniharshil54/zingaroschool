let mongoose = require("mongoose");

let classSchema = mongoose.Schema(
    {
        classid: {
            type: 'String'
        },
        standard: {
            type: 'Date'
        },
        division: {
            type: 'String'
        },
        studentstrength: {
            type: 'Date'
        },
        timetable: {
            type: 'String'
        },
        homework: {
            type: [
                'Mixed'
            ]
        }
    }
)

let Class = module.exports = mongoose.model('Class',classSchema);