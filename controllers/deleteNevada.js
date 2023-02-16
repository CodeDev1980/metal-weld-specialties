const DeletePost = require('../models/NevadaPost');

module.exports = async (req, res) => {
    await DeletePost.findByIdAndDelete(req.params.id)
    res.redirect('/staffAccount')
}