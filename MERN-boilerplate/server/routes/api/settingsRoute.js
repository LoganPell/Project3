const doughSettings = require('../../models/settings');

module.exports = (app) => {
  
  //post original form data to database
  app.post('/api/settings/add', (req, res, next) => {
    console.log("Hello Settings Add")
    const {body} = req;
    const {userID} = body;
    let {dataType} = body;
    const {dataDesc} = body;


    //making sure all fields are filled out
    if (!userID) {
      return res.send({
        success: false,
        message: 'Error: invalid user.'
      });
    }
    if (!dataDesc) {
      return res.send({
        success: false,
        message: 'Please Fill Out All Fields'
      });
    }
    

    //creating new document to add to data base
    const newSettings = new doughSettings();
      newSettings.userID = userID;
      newSettings.dataType = dataType;
      newSettings.dataDesc = dataDesc;

      console.log(newSettings)

    //adding new doucment to database
    newSettings.save((err, doughSettings) => {
        if (err) {
          res.send({
            success: false,
            message: 'Error: Server error'
          });
        }

        res.send({
          success: true,
          message: 'data added!'
      });
    });
  });

  // app.get('/api/data/all', (req, res, next) => {
  //   //get userID
  //   // const {body} = req;
  //   // const {userID} = body;
  //   // console.log(userID);
  //   const { query } = req;
  //   const { token } = query

  //   //get user data from dough data
  //   doughData.find({
  //     userID: token
  //   }, (err, returnedData) => {
  //     if (err) {
  //       return res.send({
  //         success: false,
  //         message: 'Error: Server error'
  //       });
  //     }
  //     if (returnedData.length === 0) {
  //       return res.send({
  //         success: false,
  //         message: 'No Data Found'
  //       });
  //     } else {
  //       return res.send({
  //         success: true,
  //         message: 'Good to go',
  //         data: returnedData
  //       });
  //     }
  //   });
  // });
};  