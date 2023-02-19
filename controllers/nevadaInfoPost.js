const InfoPost = require('../models/NevadaPost');

module.exports = async (req, res) => {
    const nevada = await InfoPost.findById(req.params.id).populate('userid');
    res.redirect.render(301,'singleNevada', {
        title: "Detailed Nevada Post Information",
        nevada
    })
}