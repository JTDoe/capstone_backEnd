const express = require("express");
const coachesRouter = require("./routes/coaches");
const teamsRouter = require("./routes/teams");
const playersRouter = require("./routes/players");
const { headCoaches, newTeams, newPlayers } = require("./data/data.js");
const { v4 } = require("uuid");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from the node");
});

app.get("/headCoaches", (req, res) => {});
app.get("/headCoaches/:id", (req, res) => {
  const coach = headCoaches.find((x) => x.id === +req.params.id);
  console.log(coach);
  res.json(coaches);
});

app.post("/headCoaches", (req, res) => {
  const { body } = req;

  let newCoach = {
    ...body,
    id: v4(),
  };

  coaches.push(newCoach);
  res.send(newCoach);
});

app.put("/headCoaches/:id", (req, res) => {
  const coach = headCoaches.find((x) => x.id === +req.params.id);
  const coachIndex = headCoaches.findindex((x) => x.id === +req.params.id);
  const { body } = req;

  let newCoach = {
    ...headCoaches,
    ...body,
  };

  coaches.push(newCoach);
  res.send(newCoach);
});

app.delete("/headCoaches/:id", (req, res) => {
  const coach = coaches.find((x) => x.id === +req.params.id);
  const coachIndex = coaches.findindex((x) => x.id === +req.params.id);
  const { body } = req;

  let newCoach = {
    ...headCoaches,
    ...body,
  };

  headCoaches.splice(coachIndex, 1);
  res.send(newCoach);
});

// app.use(express.json());
// app.use("/coaches", coachesRouter);
// app.use("/players", playersRouter);
// app.use("/teams", teamsRouter);

app.listen(PORT, () => {
  console.log("app is listening on:", PORT);
});
