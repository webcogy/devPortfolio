/**
 * 1. firebase 모듈을 가져온다.
 * 2. firebase config 값을 적는다.
 * 3. firebase 변수를 해당 설정값으로 초기화한다.
 * 4. firebase database 객체를 database 변수에 넣어준다.
 * 5. 다른 곳에서 사용할 수 있도록 module 을 export 해주는데 
 *    firebase database 사용 할 것이기 때문에 database 변수를 export 해준다.
 */
const firebase = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyBMSuv2rKgiyjTTt4eJfdB9ynrgSb27Ap0",
    authDomain: "portfolio-c353c.firebaseapp.com",
    projectId: "portfolio-c353c",
    storageBucket: "portfolio-c353c.appspot.com",
    messagingSenderId: "1026297296328",
    appId: "1:1026297296328:web:24ae9a531703342029bcfd",
    measurementId: "G-LKLG7WCG28"
  };
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

module.exports = database;