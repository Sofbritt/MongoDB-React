const mongoose = require('mongoose')
const clothesSchema = new mongoose.Schema({
    clothesName: String,

    clothesColor: String,

    clothesImg: String,

    clothesSize:String

})

const skinCareSchema = new mongoose.Schema({
    skinCareName: String,

    skinCareColor: String,

    skinCareImg: String

})

const cosmeticSchema = new mongoose.Schema({
    cosmeticsName: String,

    cosmeticsColor: String,

    cosmeticsImg: String


})

const webSchema = new mongoose.Schema({

    itemName: String,

    img: String,

    clothes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Clothes' }],

    cosmetics:[{type:mongoose.Schema.Types.ObjectId,ref:'Clothes'}],

    skinCare:[{type:mongoose.Schema.Types.ObjectId,ref:'SkinCare'}],

    category:String,


    price: Number,

    rating: Number,




})

module.exports = {
    Web: mongoose.model('Web', webSchema),
    Clothes: mongoose.model('Clothes', clothesSchema),
    SkinCare: mongoose.model('SkinCare', skinCareSchema),
    Cosmetic:mongoose.model('Cosmetics',cosmeticSchema)
}