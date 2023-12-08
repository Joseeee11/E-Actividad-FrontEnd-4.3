const contactosModel = require('../models/contactos.m') //requerimos modelo

class contactosControllers {

    async agregar(req, res, next) {  
        const {nombre, telefono, email, pregunta, fecha, importancia} = req.body;
        try {
            if ( !nombre || !telefono || !email || !pregunta || !fecha || !importancia) {
                throw("Ingresa los datos correctamente");
            };
            const campos = {nombre, telefono, email, pregunta, fecha, importancia};
            console.log('agregar:', campos)
            await contactosModel.create(campos);
            res.send('Se agregó correctamente').status('200'); 
        } catch (error) {
            console.log('Hubo algún error', error); 
            res.status('404').json({"error":error})
        }
    }
}

module.exports = new contactosControllers();