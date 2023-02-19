const InfoPost = require('../models/CaliforniaPost');

module.exports = async (req, res) => {
    const california = await InfoPost.findById(req.params.id).populate('userid');
    res.redirect.render(301,'singleCalifornia', {
        title: "California Detailed Post Information",
        california
    })
}