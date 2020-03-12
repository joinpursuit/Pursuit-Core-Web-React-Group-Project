const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/users/usersRoutes");
const postsRouter = require("./routes/posts/postRoutes");
const tagsRouter = require("./routes/tags/tagsRoutes");

const port = 3001;
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, "./public")));

app.use("/api/users", userRouter);
app.use("/api/posts", postsRouter);
app.use("/api/tags", tagsRouter);

app.use((error, req, res, next) => {
  if (error.status) {
    res.status(error.status).json(error);
  } else {
    res.json(error);
  }
});

app.get("*", (req, res, next) => {
  res.status(404).json({
    status: 404,
    error: "No route found"
  });
});

app.listen(port, () => {
  console.log(`Server Is Running On Port:${port}`);
});
