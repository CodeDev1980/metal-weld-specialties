const DeletePost = require('../models/CaliforniaPost');

module.exports = async (req, res) => {
    await DeletePost.findByIdAndDelete(req.params.id)
    res.redirect('/staffAccount')
}