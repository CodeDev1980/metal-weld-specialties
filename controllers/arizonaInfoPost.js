const InfoPost = require('../models/ArizonaPost');

module.exports = async (req, res) => {
    const arizonaInfo = await InfoPost.findById(req.params.id).populate('userid');
    res.redirect.render(301, 'singleArizona', {
        title: "Arizona Detailed Post Information",
        arizonaInfo
    })
}