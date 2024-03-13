    const getAllMembers = async (req, res) => {
     var connect = require('../../dbFuncs/connect.js');
    const cors = require('cors');
    const knex = require('knex');
    require('dotenv').config();
    
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
// CORS implemented so that we don't get errors when trying to access the server from a different server location
    app.use(cors());
// GET: Fetch all movies from the database
    app.get('/', (req, res) => {
        db.select('*')
            .from('fementity_schema.Member')
            .then((data) => {
                console.log(data);
                res.json(data);
            })
            .catch((err) => {
                console.log(err);
            });
    });
    // GET: Fetch member by id from the database
    app.get('/:id', (req, res) => {
        const memberID = req.params.memberID;
        db.select('*')
            .from('fementity_schema.Member')
            .where('id', '=', memberID)
            .then((data) => {
                console.log(data);
                res.json(data);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    //POST: Add member to the database
    app.post('/add-member', (req, res) => {
        const {
            firstName,
            lastName,
            pronouns,
            occupation,
            emailAddress,
            phoneNumber,
            address,
            city,
            province,
            workshops,
            podcast,
            courseReferral,
            socialMedia,
            giveaway
        } = req.body;
        db('Member')
            .insert({
                first_name: firstName,
                last_name: lastName,
                pronouns: pronouns,
                occupation: occupation,
                email: emailAddress,
                phone_number: phoneNumber,
                address: address,
                city: city,
                province: province,
                workshops: workshops,
                podcast: podcast,
                course_referral: courseReferral,
                social_media_handle: socialMedia,
                giveaway_interest: giveaway
            })
            .then(() => {
                console.log('Member Added');
                return res.json({msg: 'Member Added'});
            })
            .catch((err) => {
                console.log(err);
            });
    });
    // DELETE: Delete member by memberID from the database
    app.delete('/delete-member', (req, res) => {
        const memberID = req.body;
        const memberIDToDelete = Number(memberID.memberID);
        console.log(memberIDToDelete);
        db('Member')
            .where('id', '=', memberIDToDelete)
            .del()
            .then(() => {
                console.log('Member Deleted');
                return res.json({ msg: 'Member Deleted' });
            })
            .catch((err) => {
                console.log(err);
            });
    });
    // PUT: Update member by memberID from the database
    app.put('/update-member', (req, res) => {
        db('Member')
            .where('id', '=', 1)
            .update({ first_name: 'Goldeneye' })
            .then(() => {
                console.log('Member Updated');
                return res.json({ msg: 'Member Updated' });
            })
            .catch((err) => {
                console.log(err);
            });
    });
    const port = process.env.PORT || 5001;
    app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));
}

module.exports = {getAllMembers};