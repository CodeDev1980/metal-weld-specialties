const InfoPost = require('../models/ArizonaPost');

module.exports = async (req, res) => {
    const arizona = await InfoPost.findById(req.params.id).populate('userid');
    res.render('singleArizona', {
        title: "Arizona Post Information",
        arizona
    })
}