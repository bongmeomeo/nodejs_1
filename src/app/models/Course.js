const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;



const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
});

// add plugin
const mongooseDelete = require('mongoose-delete');
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});


module.exports = mongoose.model('Course', Course);