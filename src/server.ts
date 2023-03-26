import app from './app';
import constants from './utils/constants';

app.listen(constants.PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on requests on PORT: ", constants.PORT);
});

