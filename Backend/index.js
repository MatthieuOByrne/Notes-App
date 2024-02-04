const express = require("express");
const logger = require("morgan");
const config = require("./config.js");
const app = express();
const router = express.Router();
app.use(logger("dev"));

router.get("/ViewNotes", require('./Routes/ViewNotes.js'));
//router.get("/CreateNote", require('./Routes/CreateNote.js'));
router.get("/Login", require("./Routes/Login.js"))
router.get("/Register", require("./Routes/Register.js"))


app.use("/", router);

app.listen(config.port, () => {
    console.log("App is listening on " + config.port);
});
