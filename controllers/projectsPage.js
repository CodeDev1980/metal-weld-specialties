const NevadaDB = require('../models/NevadaPost');
const HawaiiDB = require('../models/HawaiiPost');
const ArizonaDB = require('../models/ArizonaPost');
const CaliforniaDB = require('../models/CaliforniaPost');

module.exports = async (req, res) => {
    const nevadaPost = await NevadaDB.find({}).limit(20).sort({_id: -1}).populate('userid');
    const hawaiiPost = await HawaiiDB.find({}).limit(20).sort({_id: -1}).populate('userid');
    const arizonaPost = await ArizonaDB.find({}).limit(20).sort({_id: -1}).populate('userid');
    const californiaPost = await CaliforniaDB.find({}).limit(20).sort({_id: -1}).populate('userid');

    res.render(200, 'projects', {
        title: "View Metal-Weld Projects & Their Individual Details.",
        nevadaPost, hawaiiPost, arizonaPost, californiaPost
    })
}