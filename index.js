const express = require("express");
const coachesRouter = require("./routes/coaches");
const teamsRouter = require("./routes/teams");
const playersRouter = require("./routes/players");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json())
app.use("/coaches", coachesRouter)
app.use("/players", playersRouter)
app.use("/teams", teamsRouter)

app.listen(port, () => {
  console.log("app is listening on:", port)
})


