// //lambda-local -l index.js -h handler -e index.js
// var rescode = require('rescode');
//
//https://s3-ap-northeast-1.amazonaws.com/ean-barcode/test.zip
//
exports.handler = function(event, context) {
//
  // rescode.loadModules(['ean2', 'ean5', 'ean8', 'ean13']);
  // var data8 = rescode.create("ean8", event.queryParams.barcode);
  // context.done(null, data8);
  context.done(null, "data8");
//
//   // context.done(null, "<html><img src='data:image/png;base64,"+data8.toString("base64")+"' /></html>");
//
};



'use strict';

import { name, version } from './package.json';

export default (event, context, callback) => {
  console.log('event:', event);
  console.log('context:', context);
  context.done(null, "data8");

  // console.log('env:', process.env);
  //
  // callback(null, { name, version });
}
