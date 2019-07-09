# **Legendary Fiesta**
---

A Neural Network implementation in JS using the MeteorJS stack that tells whether a user is sitting, walking or running from data collected and classified from the accelerometer and the gyroscope of mobile devices

***
### **Features**
* Collect the data directly and classify them
* Train the Neural Network with your own collected data or the ones supplied here by the project
* Feed test data to the network and see how the neural network decides the user's state (sitting, walking or running)
* Easy to use API where you can upload data directly to that DB or get results right away

***
### **To-Do**
* Store Data in MongoDB.
* Break down the `/server` folder into smaller files
* add https://jqueryvalidation.org/ to project
* is hammer.js really needed?

***
### **Folder Tree**
use this to generate a file Tree `ls -R | grep ":$" | sed -e 's/:$//' -e 's/[^-][^\/]*\//--/g' -e 's/^/   /' -e 's/-/|/'`

***
### **Setup**
Clone this repo to your desktop and `run npm` install to install all the dependencies.

***
### **Usage**
After you clone this repo to your desktop, go to its root directory and run `npm install` to install its dependencies.

Once the dependencies are installed, you can run `meteor run` to start the application. You will then be able to access it at localhost:3000

***
### **API Usage**

***
### **Changelog**

***
### **Packages Used**
  * [brain.js](https://brain.js.org/)
  * [moment.js](https://momentjs.com/)
  * [bootstrap3](https://getbootstrap.com/docs/3.3/)
  * [mongoDB](https://atmospherejs.com/meteor/mongo)
  * [flowRouter](https://atmospherejs.com/kadira/flow-router)
  * [hammer.js](https://hammerjs.github.io/)

***
### **License**
> You can check out the full license [here](https://github.com/bakuur/legendaryFiesta/blob/master/LICENSE)

This project is licensed under the terms of the MIT license.
