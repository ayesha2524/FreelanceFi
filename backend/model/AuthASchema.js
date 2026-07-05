const mongoose = require('mongoose')

const AuthSchema = new mongoose.Schema({
    walletAddress: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["client", "freelancer"],
        default: null
    },
    name: {
        type: String
    },
    bio: {
        type: String
    },
    skills: {
        type: [String],
        default: []
    },
    profileCompleted: {
        type: Boolean,
        default: false
    },
    rating: {
        type: [Number]
    }
}, {timestamps: true})

AuthSchema.index({walletAddress: 1}, {unique: true})
const AuthModel = mongoose.model('Auth', AuthSchema)
module.exports = AuthModel