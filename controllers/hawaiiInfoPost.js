const InfoPost = require('../models/HawaiiPost');

module.exports = async (req, res) => {
    const hawaii = await InfoPost.findById(req.params.id).populate('userid');
    res.redirect.render(301,'singleHawaii', {
        title: "Detailed Hawaii Post Information",
        hawaii
    })
}