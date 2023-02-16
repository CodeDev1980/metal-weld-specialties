const DeletePost = require('../models/ArizonaPost');

module.exports = async (req, res) => {
    await DeletePost.findByIdAndDelete(req.params.id)
    res.redirect('/projects')
}