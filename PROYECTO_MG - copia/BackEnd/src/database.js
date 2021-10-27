const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sistema-MG',{

})

    .then(db => console.log('Database is Connected'))
    .catch(err => console.log(err));