const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/users/usersRoutes");
const postsRouter = require("./routes/posts/postRoutes");
const tagsRouter = require("./routes/tags/tagsRoutes");
const port = 3001;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", userRouter);
app.use("/api/posts", postsRouter);
app.use("/api/tags", tagsRouter);

app.listen(port, () => {
  console.log(`Server Is Running On Port:${port}`);
});
