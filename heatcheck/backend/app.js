const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")

const postRouter = require('./routes/post')
const commentRouter = require('./routes/comments')
const usersRouter = require("./routes/users.js")
const reactionsRouter = require('./routes/reactions.js')
const tagsRouter = require("./routes/tags.js")

const port = 3001;

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/posts", postRouter)
app.use("/comments", commentRouter)
app.use("/users", usersRouter);
app.use("/reactions", reactionsRouter)
app.use("/tags", tagsRouter)

app.listen(port, () => {
    console.log("listening on port: ", port)
    })