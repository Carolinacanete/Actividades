const pool = require("./models/bd");

pool.query("SELECT * FROM reservas", function(error, results) {
  if(error) {
    throw error;
  }

  results.forEach(element => {
    console.log(element);
  });
});