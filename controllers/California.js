const CaliforniaPost = require('../models/CaliforniaPost');

module.exports = async (req, res) => {
    const CaliforniaDB = await CaliforniaPost.find({}).limit(50).sort({_id: -1}).populate('userid');

    res.render('californiaProjects', {
        title: "Projects In California",
        CaliforniaDB
    })
}