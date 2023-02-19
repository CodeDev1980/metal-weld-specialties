const InfoPost = require('../models/CaliforniaPost');

module.exports = async (req, res) => {
    const california = await InfoPost.findById(req.params.id).populate('userid');
    res.render('singleCalifornia', {
        title: "California Detailed Post Information",
        california
    })
}