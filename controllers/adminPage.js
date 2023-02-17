const NevadaDB = require('../models/NevadaPost');
const ArizonaDB = require('../models/ArizonaPost');
const HawaiiDB = require('../models/HawaiiPost');
const CaliforniaDB = require('../models/CaliforniaPost');
const UsersDB = require('../models/Users');

module.exports = async (req, res) => {
    const nevada = await NevadaDB.find({}).limit(3).sort({_id: -1}).populate('userid');
    const hawaii = await ArizonaDB.find({}).limit(3).sort({_id: -1}).populate('userid');
    const arizona = await HawaiiDB.find({}).limit(3).sort({_id: -1}).populate('userid');
    const california = await CaliforniaDB.find({}).limit(3).sort({_id: -1}).populate('userid');
    const user = await UsersDB.find({}).limit(3).sort({_id: -1});

    res.render('staffAccount', {
        title: "Metal-Weld Staff",
        nevada, hawaii, arizona, california, user
    })
}
