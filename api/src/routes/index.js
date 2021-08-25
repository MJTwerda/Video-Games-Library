const { Router } = require('express');

const router = Router();
const gamesRouters = require('./routeGame.js');
const genresRouters = require('./routeGenre.js');
const gameDetailRouters = require('./routeDetailGame');
const allPlatforms = require('./routePlatforms');

router.use('/videogames', gamesRouters); 
router.use('/genres', genresRouters);
router.use('/videogame', gameDetailRouters);
router.use('/platforms', allPlatforms);

module.exports = router;

