const Sam = require('../models/Sam');

exports.home = async (req, res) => {
    console.log('Lariicsa - Home')
    res.render('index')
}

exports.getLaraInfo = async (req, res) => {
    try {
      const [info] = await Sam.find()
      res.status(200).json({info})
    }
    catch {
      (err) => res.status(500).json({ err })
    }
  }