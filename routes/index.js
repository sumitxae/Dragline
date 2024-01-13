var express = require('express');
var router = express.Router();
// const mysql = require('mysql2');

// const db = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'sumit',
//   password: 'root',
//   database: 'graph',
// });

// Define a route to fetch sensor data from the database
router.get('/api/data', (req, res) => {
  fetchSensorDataFromDatabase((sensorData) => {
    res.json(sensorData);
  });
});


// function fetchSensorDataFromDatabase(callback) {
//   const query = 'SELECT * FROM obcycle';

//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error executing query: ' + err.stack);
//       callback(null);
//     } else {
//       callback(results); // Send the entire array of results
//     }
//   });
// }

/* GET home page. */
router.get('/graph', function(req, res, next) {
  fetchSensorDataFromDatabase((sensorData) => {
    console.log(sensorData);
    res.render('sh', { sensorData });
  });
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Boom');
});

router.get('/rear', function(req, res, next) {
  res.render('Rear')
});

router.get('/tst', function(req, res, next) {
  res.render('tst')
});

// Define a route for /effec
router.get('/effec', (req, res) => {
  res.render('sh')
});

router.get('/echo', (req, res, next) => {
  res.render("temp")
})

router.get('/guide', (req, res, next) => {
  res.render("index")
})

module.exports = router;
