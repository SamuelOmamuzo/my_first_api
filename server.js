const express = require("express");
const mongoose = require("mongoose")
const url = "mongodb://localhost:27017/BarbingSaloon";
const port = 1998
const app = express();
app.use(express.json());
const path = require("./Routes/BarbingRoute")

mongoose.connect(url, {
    useNewUrlParser: true,
})
// mongoose.connection
// .on("open", () => {
//     console.log("database is connected successfully")
// })
// .once("error",() => {
//     console.log("failed to connect to database")
// });

app.get("/", async (req, res) => {
    res.status(200).send("barbing api")
});

app.use("/api", path)

app.listen(process.env.PORT,port,() => {
    console.log(`server is listening on port:${port}`)
})