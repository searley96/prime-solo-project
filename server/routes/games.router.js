const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

router.get("/", rejectUnauthenticated, (req, res) => {
  // GET route code to get all games
  let queryText = `SELECT * FROM "game_result"`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

//random generator functions
function randomPetGenerator(pet) {
  let r = Math.floor(Math.random() * 3);
  switch (r) {
    case 0:
      return pet.petOne;
      break;
    case 1:
      return pet.petTwo;
      break;
    case 2:
      return pet.petThree;
      break;
  }
}

function randomVehicleGenerator(vehicle) {
  let r = Math.floor(Math.random() * 3);
  switch (r) {
    case 0:
      return vehicle.vehicleOne;
      break;
    case 1:
      return vehicle.vehicleTwo;
      break;
    case 2:
      return vehicle.vehicleThree;
      break;
  }
}

function randomCityGenerator(city) {
  let r = Math.floor(Math.random() * 3);
  switch (r) {
    case 0:
      return city.cityOne;
      break;
    case 1:
      return city.cityTwo;
      break;
    case 2:
      return city.cityThree;
      break;
  }
}

function randomHobbyGenerator(hobby) {
  let r = Math.floor(Math.random() * 3);
  switch (r) {
    case 0:
      return hobby.hobbyOne;
      break;
    case 1:
      return hobby.hobbyTwo;
      break;
    case 2:
      return hobby.hobbyThree;
      break;
  }
}

function randomMashGenerator() {
  let r = Math.floor(Math.random() * 4);
  switch (r) {
    case 0:
      return "Mansion";
      break;
    case 1:
      return "Apartment";
      break;
    case 2:
      return "Shack";
      break;
    case 3:
      return "House";
      break;
  }
}

//hobby post route
router.post("/", rejectUnauthenticated, (req, res) => {
  // POST route code here

  console.log("hi req.body", req.body);
  let newPetResult = randomPetGenerator(req.body.pet);
  let newVehicleResult = randomVehicleGenerator(req.body.vehicle);
  let newCityResult = randomCityGenerator(req.body.city);
  let newHobbyResult = randomHobbyGenerator(req.body.hobby);
  let newMashResult = randomMashGenerator();
  const resultToAdd = req.body;
  const queryText = `INSERT INTO "game_result"
    ("user_id", "pets", "vehicle", "city", "hobby", "MASH")
    VALUES ($1, $2, $3, $4, $5, $6)`;
  let queryValues = [
    resultToAdd.user,
    newPetResult,
    newVehicleResult,
    newCityResult,
    newHobbyResult,
    newMashResult,
  ];
  pool
    .query(queryText, queryValues)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

router.get("/latest", rejectUnauthenticated, (req, res) => {
  // GET route code to get latest games
  let queryText = `SELECT * FROM "game_result" ORDER BY "id" DESC LIMIT 1`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete("/delete/:id", rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  const queryText = `DELETE FROM "game_result" WHERE id=$1 AND "user_id" = $2`;
  let queryValues = [req.params.id, req.user.id];
  pool
    .query(queryText, queryValues)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

//get random game from database
router.get("/random", rejectUnauthenticated, (req, res) => {
  // GET route code to get latest games
  let queryText = `SELECT * 
  FROM random_game_result
  ORDER BY RANDOM()
  LIMIT 1;`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
