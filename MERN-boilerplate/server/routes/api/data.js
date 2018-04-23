const doughData = require('../../models/doughData');

module.exports = (app) => {
  
  //post original form data to database
  app.post('/api/data/add', (req, res, next) => {
    const {body} = req;
    const {userID} = body;
    let {dataType} = body;
    const {dataDesc} = body;
    const {dataAmount} = body;
    const {dataDate} = body;
    const {dataReccurance} = body;


    if (dataType === 0){
      dataType = "Dough";
    } else if (dataType === 1){
      dataType = "Bill";
    } else if (dataType === 2) {
      dataType = "Goal"
    } else {
      return res.send({
        success: false,
        message: 'Error: invalid dataType.'
      });
    }

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
    if (!dataAmount) {
      return res.send({
        success: false,
        message: 'Please Fill Out All Fields'
      });
    }
    if (!dataDate) {
      return res.send({
        success: false,
        message: 'Please Fill Out All Fields'
      });
    }

    //creating new document to add to data base
    const newDoughData = new doughData();
    newDoughData.userID = userID;
    newDoughData.dataType = dataType;
    newDoughData.dataDesc = dataDesc;
    newDoughData.dataAmount = dataAmount;
    newDoughData.dataDate = dataDate;
    newDoughData.dataReccurance = dataReccurance;

    //adding new doucment to database
    newDoughData.save((err, doughData) => {
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

  app.get('/api/data/all', (req, res, next) => {
    //get userID
    // const {body} = req;
    // const {userID} = body;
    // console.log(userID);
    const { query } = req;
    const { token } = query

    //get user data from dough data
    doughData.find({
      userID: token
    }, (err, returnedData) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }
      if (returnedData.length === 0) {
        return res.send({
          success: false,
          message: 'No Data Found'
        });
      } else {
        return res.send({
          success: true,
          message: 'Good to go',
          data: returnedData
        });
      }
    });
  });

  //delete
  app.get('/api/data/delete', (req, res, next) => {
    const { query } = req;
    const { id } = query
    //get user data from dough data
    doughData.remove({
      _id: id
    }, (err, returnedData) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      } else {
        return res.send({
          success: true,
          message: 'Good to go'
        });
      }
    });
  });

};  