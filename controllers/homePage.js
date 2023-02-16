const NevadaPost = require('../models/NevadaPost');
const ArizonaPost = require('../models/ArizonaPost');
const HawaiiPost = require('../models/HawaiiPost');
const CaliforniaPost = require('../models/CaliforniaPost');

module.exports = async (req, res) => {
    const nevada = await NevadaPost.find({}).limit(3).sort({_id: -1}).populate('userid');
    const hawaii = await HawaiiPost.find({}).limit(3).sort({_id: -1}).populate('userid');
    const arizona = await ArizonaPost.find({}).limit(3).sort({_id: -1}).populate('userid');
    const california = await CaliforniaPost.find({}).limit(3).sort({_id: -1}).populate('userid');

    res.render('index', {
        title: "Metal-Weld Specialties",
        nevada, hawaii, arizona, california
    })
}