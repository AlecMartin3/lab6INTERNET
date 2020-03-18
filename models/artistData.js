let db = require('../util/database');

// Add a single individual to the database
function addartist(data) {
    let sql = "Insert into artist (name, about, imageURL) values ('" + data.name+ "','"+ data.about+ "','" + data.imageURL + "')";
    db.execute(sql);
}

// Gets all the individuals in the database
function getAllartist() {
    return db.execute('Select * from artist');
}

// Gets a specific individual from the database
function getartist(id) {
    return db.execute("Select * from artist where id = " + id);
}


function deleteArtist(id) {
    return db.execute("Delete from artist where id= " + id);
}

module.exports = {
    add : addartist,
    delete: deleteArtist,
    getall : getAllartist,
    getartist: getartist,

}