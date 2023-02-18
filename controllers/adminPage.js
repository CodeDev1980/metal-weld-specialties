const NevadaDB = require('../models/NevadaPost');
const ArizonaDB = require('../models/ArizonaPost');
const HawaiiDB = require('../models/HawaiiPost');
const CaliforniaDB = require('../models/CaliforniaPost');
const UsersDB = require('../models/Users');

module.exports = async (req, res) => {
    const nevada = await NevadaDB.find({}).limit(1).sort({_id: -1}).populate('userid');
    const hawaii = await HawaiiDB.find({}).limit(1).sort({_id: -1}).populate('userid');
    const arizona = await ArizonaDB.find({}).limit(1).sort({_id: -1}).populate('userid');
    const california = await CaliforniaDB.find({}).limit(1).sort({_id: -1}).populate('userid');
    const user = await UsersDB.find({}).limit(1).sort({_id: -1});

    res.render('staffAccount', {
        title: "Metal-Weld Staff CMS Page",
        nevada, hawaii, arizona, california, user
    })
}
