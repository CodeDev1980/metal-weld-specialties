const InfoPost = require('../models/NevadaPost');

module.exports = async (req, res) => {
    const nevada = await InfoPost.findById(req.params.id).populate('userid');
    res.render('singleNevada', {
        title: "Detailed Nevada Post Information",
        nevada
    })
}