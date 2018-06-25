var moment = require('moment');

var date = moment();
date.add(1, 'years');
console.log(date.format('MMM Do, YYYY'));
