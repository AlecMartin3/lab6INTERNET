let artistModel = require('../models/artistData');

exports.getAllartist = (req,res,next) => {
   let artists = artistModel.getall();
   artists.then( ([rows, fieldData]) => {
        res.render('artists', { artist: rows});
   });
   
};

exports.getartist = (req,res,next) => {
    let id = req.params.id;
    let artist = artistModel.getartist(id);
    artist.then( ([data,metadata]) => {
        res.render('artist', {artist: data[0], artistCSS: true});
    });
}

exports.postAddartist =  async (req,res,next) => {
    let p_name = req.body.Name;
    let p_about = req.body.About;
    let p_imageURL = req.body.ImageURL;
    
    let pOject = {
       name: p_name,
       about: p_about,
       imageURL: p_imageURL
    }
    
    let Artists = await artistModel.add(pOject);
    res.redirect('back');
    res.redirect(301, '/artists');
}

exports.postDeleteArtists = async (req, res, next) => {
       let id = req.params.id;
       let Artists = await artistModel.delete(id);
       res.redirect(301, '/artists');
    
 };


exports.loginLogout = (req,res,next) => {

        res.render('login',{layout: "login"});

};