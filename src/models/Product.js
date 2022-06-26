import  { Schema, model } from 'mongoose'

const productSchema = new Schema({
    nombre: String,
    marca: String,
    imgURL: String,
    valor: Number,
    stock: Number
},{ 
    timestamps: true,
    versionKey: false
})

export default model('Product', productSchema);