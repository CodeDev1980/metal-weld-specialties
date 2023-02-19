const router = require('express').Router();

const homeController = require('../controllers/homePage');
const aboutController = require('../controllers/aboutPage');
const contactController = require('../controllers/contactPage');
// Users
// const registerUserController = require('../controllers/registerUser');
// const storeUserController = require('../controllers/StoreUser');
const loginController = require('../controllers/login');
const loginUserController = require('../controllers/loginUser');
const staffUserController = require('../controllers/adminPage');
const logoutUserController = require('../controllers/logoutUser');
// Projects
const projectsPage = require('../controllers/projectsPage');
// Arizona
const storeArizonaController = require('../controllers/storeArizona');
const deleteArizonaController = require('../controllers/deleteArizona');
const singleArizonaController = require('../controllers/arizonaInfoPost');
// Nevada
const storeNevadaController = require('../controllers/storeNevada');
const deleteNevadaController = require('../controllers/deleteNevada');
const singleNevadaController = require('../controllers/nevadaInfoPost');
// Hawaii
const storeHawaiiController = require('../controllers/storeHawaii');
const deleteHawaiiController = require('../controllers/deleteHawaii');
const singleHawaiiController = require('../controllers/hawaiiInfoPost');
// California
const storeCaliforniaController = require('../controllers/storeCalifornia');
const deleteCaliforniaController = require('../controllers/deleteCalifornia');
const singleCaliforniaController = require('../controllers/californiaInfoPost');
// middleware
const redirect = require('../middelware/redirect');
const authorized = require('../middelware/authorized');

router.get('/', homeController);
router.get('/about', aboutController);
router.get('/contact', contactController);
// Users
// router.get('/register', redirect, registerUserController);
// router.post('/store/user', storeUserController);
router.get('/login', redirect, loginController);
router.post('/login/user', loginUserController);
router.get('/staffAccount', authorized, staffUserController)
router.get('/logout', logoutUserController);
// Projects
router.get('/projects', projectsPage);
// Arizona Projects
router.post('/store/arizona', authorized, storeArizonaController);
router.get('/delete/arizona/:id', deleteArizonaController);
router.get('/singleArizona/:id', singleArizonaController)
// Nevada Projects
router.post('/store/nevada', authorized, storeNevadaController);
router.get('/delete/nevada/:id', deleteNevadaController);
router.get('/singleNevada/:id', singleNevadaController)
// California Projects
router.post('/store/california', authorized, storeCaliforniaController);
router.get('/delete/california/:id', deleteCaliforniaController);
router.get('/singleCalifornia/:id', singleCaliforniaController);
// Hawaii Projects
router.post('/store/hawaii', authorized, storeHawaiiController);
router.get('/delete/hawaii/:id', deleteHawaiiController);
router.get('/singleHawaii/:id', singleHawaiiController);

module.exports = router;
