const db = require('../db.js')

module.exports = async function (req, res, next) {
    let userId = req.query.userId;
    let notes = await db.listNotes();
    console.log(notes);
    res.json(notes);
}
