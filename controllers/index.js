const Sam = require('../models/Sam');

exports.home = async (req, res, next) => {
    const info = await Sam.find();
    console.log({info});
    
    res.render('index', { info });
}
