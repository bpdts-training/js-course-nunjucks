let express = require("express");
let app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/url", (req, res, next) => {
    res.text("<h1>This is a website</h1>");
});
