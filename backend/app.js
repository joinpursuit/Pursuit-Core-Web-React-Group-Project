const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/users/usersRoutes");
const postsRouter = require("./routes/posts/postRoutes");
const port = 3001;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", userRouter);
app.use("/api", postsRouter);

app.listen(port, () => {
  console.log(`Server Is Running On Port:${port}`);
});
