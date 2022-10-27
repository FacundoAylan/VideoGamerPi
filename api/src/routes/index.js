const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videoGamerRouter = require('./videoGames');
const genreRouter= require('./genreRoute')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videoGamerRouter)
router.use('/genres', genreRouter)



module.exports = router;
