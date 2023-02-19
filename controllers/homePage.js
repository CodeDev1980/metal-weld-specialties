const Users = require('../models/Users');

module.exports = async (req, res) => {
    const userAdmin = await Users.find().limit(1).sort({_id: -1}).populate('userid');
    res.render('index', {
        title: "Metal-Weld Specialties - America's Most Experienced & Trusted Fabricator"
        userAdmin
     })
}
