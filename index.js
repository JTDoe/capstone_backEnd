const express = require("express");
const coachesRouter = require("./routes/coachRoute");
const teamsRouter = require("./routes/teamRoute");
const playersRouter = require("./routes/playerRoute");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(express.json());
app.use("/coaches", coachesRouter);
app.use("/players", playersRouter);
app.use("/teams", teamsRouter);

app.get("/", (req, res) => {
  res.send('Hello from node!')
}) 

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
