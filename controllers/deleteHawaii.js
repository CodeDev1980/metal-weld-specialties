const DeletePost = require('../models/HawaiiPost');

module.exports = async (req, res) => {
    await DeletePost.findByIdAndDelete(req.params.id)
    res.redirect('/staffAccount')
}