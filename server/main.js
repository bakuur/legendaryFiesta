//transactionLog = new Mongo.Collection('transactionLog');

let net;


const fs = require('fs');
const readline = require('readline');

var processLineByLine = async function processLineByLine() {

  var data = Assets.getText('weakPasswords.txt');

  const fileStream = fs.createReadStream(data);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    console.log("{input: \'"+ line +"\', output:  \'weak\' }");
  }
};


Meteor.startup(function () {

//Something major is wrong here
  //processLineByLine();


  let brain = require("brain");

  const config = {
    inputSize: 20,
    inputRange: 20,
    hiddenLayers: [20,20],
    outputSize: 20,
    learningRate: 0.01,
    decayRate: 0.999,
  };

  net = new brain.recurrent.LSTM(config);

  var data = [{input: 'ewlkf342WW' , output: 'strong'},
              {input: 'LWindows@9150', output:  'strong' },
              {input: 'HELLO_blend837502', output:  'strong' },
              {input: 'M@k3!tS0!', output:  'strong' },
              {input: 'hello', output:  'weak' },
              {input: '123', output: 'weak' },
              {input: 'kingdom', output:  'weak' },
              {input: 'poopoo1', output:  'weak' },
              {input: 'admin', output:  'weak' },
              {input: 'gunner', output:  'weak' },
              {input: 'ranger1', output:  'weak' },
              {input: '1234asdf', output:  'weak' },
              {input: 'anhyeuem', output:  'weak' }];
  var trainingConfig = {
                            // Defaults values --> expected validation
      //iterations: 20000,    // the maximum times to iterate the training data --> number greater than 0
      errorThresh: 0.01234,   // the acceptable error percentage from training data --> number between 0 and 1
      log: true,           // true to use console.log, when a function is supplied it is used --> Either true or a function
      logPeriod: 1000,        // iterations between logging out --> number greater than 0
      //learningRate: 0.3,    // scales with delta to effect training rate --> number between 0 and 1
      //momentum: 0.1,        // scales with next layer's change value --> number between 0 and 1
      //callback: null,       // a periodic call back that can be triggered while training --> null or function
      //callbackPeriod: 10,   // the number of iterations through the training data between callback calls --> number greater than 0
      timeout: Infinity     // the max number of milliseconds to train for --> number greater than 0
    };

  net.train(data, trainingConfig);

  console.log("Training Complete");

});

//example
//http://localhost:3000/request?token=1234567890
WebApp.connectHandlers.use('/request', (req, res, next) => {
  res.writeHead(200);
  res.end(net.run(req.query.password));
});

randomNumber = function (low, high) {
  return Math.floor((Math.random() * high) + low);
};
