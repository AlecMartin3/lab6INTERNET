const express = require('express');
const artistController = require('../controllers/artist');
const loginController = require('../controllers/login');
const router = express.Router();


router.post('/login', loginController.loginLogout);

router.post('/logout', artistController.loginLogout);

router.get('/artists', artistController.getAllartist);

// router.get('/artist/add', artistController.getAddartist);

router.get('/artist/search', artistController.getartist);

router.post('/artists/add', artistController.postAddartist)

router.get('/artists/delete/:id', artistController.postDeleteArtists)




module.exports = router;
