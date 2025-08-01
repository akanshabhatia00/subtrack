const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    renewalDate: {
        type: Date,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;
