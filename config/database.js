const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb+srv://userAdmin:qweasdzxc1234@fiaptecnico.5oane.mongodb.net/crud')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://userAdmin:qweasdzxc1234@fiaptecnico.5oane.mongodb.net/crud')
}

module.exports = conexao