const ArizonaMain = require('../models/ArizonaPost');

module.exports = async (req, res) => {
   const arizona = await ArizonaMain.find({}).limit(30).sort({_id: -1}).populate('userid');

    res.render('arizonaProjects', {
        title: "Our Gallery of Success in Arizona",
        arizona
    })
}