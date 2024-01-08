const express = require("express");
const router = require("./routes");
const userRouter = require("./routes/users");
const { sequelize } = require("./models");

const app = express();
app.use(express.json());

app.use("/", router);
app.use("/users", userRouter);

app.listen({ port: 3000 }, async () => {
  console.log("Listening on port: 3000");
  await sequelize.authenticate();
  console.log("Database Connected");
});
