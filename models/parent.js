let mongoose = require("mongoose");

let parentSchema = mongoose.Schema(
  {
    pid: {
      type: 'String'
    },
    parentname: {
      type: 'String'
    },
    password: {
      type: 'String'
    },
    studentname: {
      type: 'String'
    },
    classid: {
      type: 'String'
    },
    fees: {
      total: {
        type: 'String'
      },
      paid: {
        type: 'String'
      },
      remaining: {
        type: 'String'
      }
    },
    leave: {
      type: [
        'Mixed'
      ]
    },
    attendance: {
      type: [
        'Mixed'
      ]
    },
    result: {
      finalexam: {
        type: [
          'Mixed'
        ]
      },
      semester1: {
        type: [
          'Mixed'
        ]
      }
    }
  }
)

let Parent = module.exports = mongoose.model('Parent',parentSchema);