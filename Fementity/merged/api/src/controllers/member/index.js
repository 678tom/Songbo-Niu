const getAllMembers = async (req, res) => {
    const client = req.prisma;
    let getAllMembers;
    try {
        getAllMembers = await client.business.findMany();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Could not retrieve businesses' });
    }
    res.status(200).json(getAllMembers);
};

const getAllCategories = async (req, res) => {
    const client = req.prisma;
    let allCategories;
    try {
        allCategories = await client.business.findMany({
        where: {},
        distinct: ['business_category'],
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Could not retrieve Categories' });
    }
    res.status(200).json(allCategories);
};

const getAllLocations = async (req, res) => {
    const client = req.prisma;
    let allLocations;
    try {
        allLocations = await client.business.findMany({
        where: {},
        distinct: ['location'],
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Could not retrieve locations' });
    }
    res.status(200).json(allLocations);
};

const getAllServices = async (req, res) => {
    const client = req.prisma;
    let allServices;
    try {
        allServices = await client.business.findMany({
        where: {},
        distinct: ['service'],
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Could not retrieve Services' });
    }
    res.status(200).json(allServices);
};

const getSimilar = async (req, res) => {
    const client = req.prisma;
    let allServices;
    let term = req.query.term;
    try {
      allServices = await client.$queryRawUnsafe(
        'SELECT * FROM "Business" WHERE (business_name ILIKE $1 OR location ILIKE $2 OR description ILIKE $3 or business_category ILIKE $4 or service ILIKE $5)',
        `%${term}%`,
        `%${term}%`,
        `%${term}%`,
        `%${term}%`,
        `%${term}%`,
      );
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error });
    }
    res.status(200).json(allServices);
};


module.exports = {getAllMembers, getAllCategories, getAllLocations, getAllServices, getSimilar}