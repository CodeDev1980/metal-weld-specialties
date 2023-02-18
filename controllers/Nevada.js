const NevadaPost = require('../models/NevadaPost');

module.exports = async (req, res) => {
    const NevadaDB = await NevadaPost.find({}).limit(50).sort({_id: -1}).populate('userid');

    res.render('nevadaProjects', {
        title: "Our Projects In The Nevada Area",
        NevadaDB
    })
}