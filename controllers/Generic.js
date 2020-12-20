const db = require('../models');
const { sequelize } = require('../models');

// Task 4
// GET /api/v1/task4/
exports.taskFour = async (req, res, next) => {
    try {
        const d = await sequelize.query(`SELECT rname,
        sgname
    FROM   country AS c,
        (SELECT og.cname,
                bs.sgname
            FROM   band_origins AS og,
                band_styles AS bs,
                (SELECT bname
                    FROM   bands) AS table_b
            WHERE  bs.bname = table_b.bname
                AND og.bname = table_b.bname) AS table_c
    WHERE  c.cname = table_c.cname;`);

        res.status(200).json({ success: true, res: d });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: 'Server Error!' });
    }
};

// Task 5
// GET /api/v1/task5/:uid
exports.taskFive = async (req, res, next) => {
    try {
        const d = await sequelize.query(
            `SELECT bs.bname,
        bs.sgname
    FROM   band_styles AS bs,
        (SELECT f.bname,
                bs.sgname
            FROM   favorites AS f
                LEFT JOIN band_styles AS bs
                        ON bs.bname = f.bname
            WHERE  f.uid = :uid) AS table_a
    WHERE  bs.sgname = table_a.sgname
        AND bs.bname != table_a.bname;`,
            { replacements: { uid: req.params.uid } }
        );

        res.status(200).json({ success: true, res: d });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: 'Server Error!' });
    }
};

// Task 6
// GET /api/v1/task6/:uid
exports.taskSix = async (req, res, next) => {
    try {
        const d = await sequelize.query(
            `SELECT bs.bname,
            bs.sgname,
            sg.gname
     FROM   band_styles AS bs,
            sub_genre AS sg,
            (SELECT f.bname,
                    bs.sgname,
                    sg.gname
             FROM   favorites AS f
                    LEFT JOIN band_styles AS bs
                           ON bs.bname = f.bname
                    LEFT JOIN sub_genre AS sg
                           ON sg.sgname = bs.sgname
             WHERE  uid = :uid) AS table_a
     WHERE  sg.gname = table_a.gname
            AND bs.sgname = sg.sgname
            AND bs.bname != table_a.bname;`,
            { replacements: { uid: req.params.uid } }
        );

        res.status(200).json({ success: true, res: d });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: 'Server Error!' });
    }
};

// Task 7
// GET /api/v1/task7/:uid/:bname
exports.taskSeven = async (req, res, next) => {
    try {
        const d = await sequelize.query(
            `SELECT f.bname FROM favorites AS f, (SELECT uid, :bname AS bname FROM favorites f WHERE f.bname = :bname AND uid != :uid) AS table_a WHERE f.uid = table_a.uid AND f.bname != table_a.bname`,
            {
                replacements: {
                    bname: req.params.bname,
                    uid: req.params.uid,
                },
            }
        );

        res.status(200).json({ success: true, res: d });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: 'Server Error!' });
    }
};

// Task 8
// GET /api/v1/task8/:uid/
exports.taskEight = async (req, res, next) => {
    try {
        const d = await sequelize.query(
            `SELECT bs.bname,
            bs.sgname,
            sg.gname,
            bo.cname
     FROM   band_styles AS bs,
            sub_genre AS sg,
            (SELECT f.bname,
                    bs.sgname,
                    sg.gname
             FROM   favorites AS f
                    LEFT JOIN band_styles AS bs
                           ON bs.bname = f.bname
                    LEFT JOIN sub_genre AS sg
                           ON sg.sgname = bs.sgname
             WHERE  uid = ?) AS table_a
             LEFT JOIN band_origins AS bo ON bs.bname = bo.bname
     WHERE  sg.gname = table_a.gname
            AND bs.sgname = sg.sgname
            AND bs.bname != table_a.bname;`,
            { replacements: { uid: req.params.uid } }
        );

        res.status(200).json({ success: true, res: d });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: 'Server Error!' });
    }
};

// Task 10
// GET /api/v1/taskt10/add
exports.taskTenAdd = async (req, res, next) => {
    try {
        await sequelize.query(
            `INSERT INTO users (id, email, password, fname, lname, home_country) VALUES 
            (1, "fakeuser@real.site", "", "Totally", "Real", "United States"),
            (2, "realuser@fake.site", "", "Real", "Totally", "Canada"),
            (3, "realfake@real.fake", "", "Totally", "Fake", "Brazil");
            `
        );

        await sequelize.query(`INSERT INTO favorites (uid, bname) VALUES 
        (1,"Mozart"), 
        (1,"Twisted Sister"),
        (1,"Death"),
        (1,"Paul Pena"),
        (2,"Sade"),
        (2,"Tchaikovsky"),
        (2,"Testament"),
        (2,"Tengger Cavalry"),
        (3,"Led Zepplin"),
        (3,"Twisted Sister"),
        (3,"The Guess Who"),
        (3,"The Hu");`);

        res.status(200).json({
            success: true,
            msg: 'All Users and Favorites Added',
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: 'Server Error!' });
    }
};

// GET /api/v1/task10/delete
exports.taskTenDelete = async (req, res, next) => {
    try {
        const d = await sequelize.query(`DELETE FROM favorites WHERE uid = 3;`);

        res.status(200).json({
            success: true,
            msg: 'Users and Favorites Successfully Deleted',
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: 'Server Error!' });
    }
};
