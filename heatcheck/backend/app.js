const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")

// const postRouter = require('./routes/post')
const commentRouter = require('./routes/comments')

const port = 3000;

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.use("/posts", postRouter)
app.use("/comments", commentRouter)

app.listen(port, () => {
    console.log("listening on port: ", port)
    })