const user = require('../../models/user');
const userSession = require('../../models/userSession');

module.exports = (app) => {
  // app.get('/api/counters', (req, res, next) => {
  //   Counter.find()
  //     .exec()
  //     .then((counter) => res.json(counter))
  //     .catch((err) => next(err));
  // });

  // app.post('/api/counters', function (req, res, next) {
  //   const counter = new Counter();

  //   counter.save()
  //     .then(() => res.json(counter))
  //     .catch((err) => next(err));
  // });

  //sign up
  app.post('/api/account/signup', (req, res, next) => {
    const { body } = req;
    const {
      firstName,
      lastName,
      password
    } = body;
    let {
      email
    } = body;

    if (!firstName) {
      return res.send({
        success: false,
        message: 'Error: Last name cannot be empty.'
      });
    }
    if (!lastName) {
      return res.send({
        success: false,
        message: 'Error: Last name cannot be empty.'
      });
    }
    if (!email) {
      return res.send({
        success: false,
        message: 'Error: email name cannot be empty.'
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: 'Error: password name cannot be empty.'
      });
    }

    email = email.toLowerCase();

    // steps:
    // 1. verify email doesn't already exist
    // 2. save to DB

    user.find({  
      email: email
    }, (err, previousUsers) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      } else if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: 'Error: Account already exists'
        })
      } 
      const newUser = new user();

      newUser.email = email;
      newUser.firstName = firstName;
      newUser.lastName = lastName;
      newUser.password = newUser.generateHash(password);
      newUser.save((err, user) => {
        if (err) {
          res.end({
            success: false,
            message: 'Error: Server error'
          });
        }
        res.end({
          success: true,
          message: 'Signed up!'
        });
      });
    });
  });

  app.post('/api/account/signin', (req, res, next) => {
    const { body } = req;
    const {
      password
    } = body;
    let {
      email
    } = body;

    if (!email) {
      return res.send({
        success: false,
        message: 'Error: email name cannot be empty.'
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: 'Error: password name cannot be empty.'
      });
    }

    email = email.toLowerCase();

    user.find({
      email: email
    }, (err, users) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: server error'
        });
      }
      if (users.length != 1) {
        return res.send({
          success: false,
          message: 'Error: Invalid user'
        });
      }

      const user = users[0];
      if (!user.validPassword(password)) {
        return res.send({
          success: false,
          message: 'Error: Invalid password'
        });
      }

      const userSession = new userSession();
      userSession.userId = users._id;
      userSession.save((err, doc) => {
        if (err) {
          return res.send({
            success: false,
            message: 'Error: server error'
          });
        }

        return res.send({
          success: true,
          message: 'Valid sign in',
          token:  doc._id
        });
      });
    });
  });

  app.get('/api/account/verify', (req, res, next) => {
    //get token
    const { query } = req;
    const { token } = query

    //verify token is unique
    userSession.find({
      _id: token,
      isDeleted: false
    }, (err, sessions) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }
      if (sessions.length !=1) {
        return res.send({
          success: false,
          message: 'Error: Invalid'
        });
      } else {
        return res.send({
          success: true,
          message: 'Good to go'
        });
      }
    });
  });

  app.get('/api/account/logout', (req, res, next) => {
    //get token
    const { query } = req;
    const { token } = query

    //verify token is unique
    userSession.findOneAndUpdate({
      _id: token,
      isDeleted: false
    }, {
      $set: { isDeleted:true }
    }, null, (err, sessions) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }
      return res.send({
        success: true,
        message: 'Good to go'
      });
    });
  });
};