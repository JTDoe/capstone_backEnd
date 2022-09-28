const express = require("express");
const app = express();
const cors = require("cors");
const coachesRouter = require("./routes/coachRoute");
const teamsRouter = require("./routes/teamRoute");
const playersRouter = require("./routes/playerRoute");

const PORT = process.env.PORT || 3307;

app.use(cors());
app.use(express.json());
app.use("/coaches", coachesRouter);
app.use("/players", playersRouter);
app.use("/teams", teamsRouter);

app.get("/", (req, res) => {
  res.send("Hello from node!");
});

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
