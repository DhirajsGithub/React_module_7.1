const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/ReactMoviesDB";
mongoose.connect(url, {useNewUrlParser: true});

const tempSchema = new mongoose.Schema({
    title:{
        type : String,
        required : [true, "name must not be empty"]
    },
    releaseDate:{
        type: Date,
        required : true,
    },
    openingText: {
        type : String
    }
})
const Movie = mongoose.model("Movie", tempSchema);
// const movie5 = new Movie({
//     title : "title5",
//     releaseDate: '2001-08-1',
//     openingText: "My birthday"
// })


module.exports = Movie;

