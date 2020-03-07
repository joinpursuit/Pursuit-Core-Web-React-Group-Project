const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const hashtagsRouter = require("./routes/hashtags");
const likesRouter = require("./routes/likes");
const commentsRouter = require("./routes/comments");

app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/hashtags", hashtagsRouter);
app.use("/likes", likesRouter);
app.use("/comments", commentsRouter);

app.listen(port, () => {
  console.log("App is listening on port", port);
});
