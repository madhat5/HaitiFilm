// SETUP ============================================
// DEPENDENCIES
var express       = require('express'),
    logger        = require('morgan'),
    mongoose      = require('mongoose'),
    cookieParser  = require('cookie-parser'),
    bodyParser    = require('body-parser'),
    md5           = require('md5');

// EXPRESS
var app = express();

// PORT & LISTENER
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Silence please...' + '\n' + 'Curtains up...' + '\n' + 'Server started on: ' + port);

// MIDDLEWARE
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

// MONGO
mongoose.connect('mongodb://localhost/haiti_flix');

// MODELS
var User = require('./models/user.js');

// ROUTES ============================================
// TEST
// app.get('/test', function(req, res){
//   res.send("Open Sesame");
// });

// USER AUTH:
// INDEX
app.get('/users', function(req, res){
  User.find().then(function(users){
    console.log('Users displayed');
    res.send(users);
  })
});

// REGISTER
app.post('/users', function(req, res){
  var passwordHash = md5(req.body.password);

  var user = new User ({
    username: req.body.username,
    password_hash: passwordHash
  });

  user.save(function(err){
    if (err){
      console.log(err);
      res.statusCode = 503;
    } else {
      console.log(user.username + ' registered');
      res.cookie('loggedinId', user.id);
      res.send({
        id: user.id,
        username: user.username
      });
    };
  });
}) // end of REGISTER

// LOGIN
app.post('/login', function(req, res){
  var requestUsername     = req.body.username,
      requestPasswordHash = md5(req.body.password);

  User.findOne({'username': requestUsername}).exec(function(err, user){
    if (user != null && requestPasswordHash == user.password_hash){
      res.cookie('loggedinId', user.id);
      res.send(user);
    } else {
      console.log(err);
      res.statusCode = 400;
      res.send("D'OH...something's wrong");
    };
  });
}); // end of LOGIN

// USER INFO
app.get('/user/:id', function(req, res){
  User.findById(req.params.id).exec(function(err, user){
    if (err){
      console.log(err);
      res.statusCode = 503;
    } else {
      res.send(user);
    };
  });
}); // end of USER INFO


// TEMP ============================================


