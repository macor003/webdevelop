// =====================
//   MODELO DE USUARIO 
// =====================
const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true]
    }
});