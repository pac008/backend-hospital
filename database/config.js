const mongoose = require('mongoose');

const dbConnetion = async () => {

    try {
        
        await mongoose.connect(process.env.CNN_DB);

        console.log('DB Online ')
    
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la base de datos');
    }
}


module.exports = {
    dbConnetion
}