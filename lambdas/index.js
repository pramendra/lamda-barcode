'use strict';
// const rescode = require('rescode');
//lambda-local -l index.js -h handler -e index.js
//https://s3-ap-northeast-1.amazonaws.com/ean-barcode/test.zip

const index = (event, context, callback) => {

  // rescode.loadModules(['ean2', 'ean5', 'ean8', 'ean13']);
  // const data8 = rescode.create("ean8", event.queryParams.barcode);
  // context.done(null, data8.toString("base64"));
  // context.done(null, event.queryParams.barcode);
  // context.done(null, "<html><img src='data:image/png;base64,"+data8.toString("base64")+"' /></html>");


try {

  context.succeed(null, "<html><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==' /></html>");

  // context.succeed(
  //    {
  //       body: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
  //       header: {
  //           'Content-Type': 'image/png'
  //       }
  // });

} catch (err) {
    console.log('Resize operation failed:', err);
    context.fail(err);
}


}

exports.handler = index;
