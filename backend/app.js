import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const port = 3001;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server Is Running On Port:${port}`);
});
