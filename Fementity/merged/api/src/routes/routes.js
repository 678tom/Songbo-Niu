var connect = require('../dbFuncs/connect');

const { getAllBusinesses, getAllLocations, getAllCategories, getAllServices, getSimilar} = require("../controllers/business/index");
const { getAllMembers } = require('../controllers/member/getAllMembers');

const businessRoutes = express.Router();

router.get('/', getAllBusinesses);

router.get('/locations', getAllLocations);

router.get('/categories', getAllCategories);

router.get('/services', getAllServices);

router.get('/search', getSimilar);


const memberRoutes = express.Router();

router.get('/', getAllMembers);

const router = express.Router();

router.use('/business', businessRoutes);

router.use('/member', memberRoutes);

export default router;
