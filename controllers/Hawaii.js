const HawaiiPost = require('../models/HawaiiPost');

module.exports = async (req, res) => {
    const HawaiiDB = await HawaiiPost.find({}).limit(50).sort({_id: -1}).populate('userid');

    res.render('hawaiiProjects', {
        title: "Projects In Hawaii",
        HawaiiDB
    })
}