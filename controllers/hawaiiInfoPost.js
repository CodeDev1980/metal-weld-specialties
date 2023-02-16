const InfoPost = require('../models/HawaiiPost');

module.exports = async (req, res) => {
    const hawaii = await InfoPost.findById(req.params.id).populate('userid');
    res.render('singleHawaii', {
        title: "Hawaii Post Information",
        hawaii
    })
}