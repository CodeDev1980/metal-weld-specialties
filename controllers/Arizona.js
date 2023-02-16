const ArizonaPost = require('../models/ArizonaPost');

module.exports = async (req, res) => {
    const ArizonaDB = await ArizonaPost.find({}).limit(50).sort({_id: -1}).populate('userid');

    res.render('arizonaProjects', {
        title: "Projects In Arizona",
        ArizonaDB
    })
}