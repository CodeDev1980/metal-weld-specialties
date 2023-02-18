module.exports = async (req, res) => {

    res.status(200).render('index', {
        title: "Metal-Weld Specialties - America's Most Experienced & Trusted Fabricator"
    })
}