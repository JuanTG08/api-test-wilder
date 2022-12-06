const fs = require('fs-extra');

const initCtrl = {}

initCtrl.init = async (req, res) => {
    const a = await fs.readJSON('./src/data.json');
    res.json(a)
}

module.exports = initCtrl