/*
 * yahoostocks.js v0.9.0
 * http://github.com/natehefner/yahoostocks.js
 * ==============================================
 * Copyright (c) 2013 Nathan Hefner
 *
 * Permission is hereby granted, free of charge, to any person 
 * obtaining a copy of this software and associated documentation 
 * files (the "Software"), to deal in the Software without restriction, 
 * including without limitation the rights to use, copy, modify, merge, 
 * publish, distribute, sublicense, and/or sell copies of the Software, 
 * and to permit persons to whom the Software is furnished to do so, 
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES O:
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY 
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


(function() {
  jQuery(function() {

    // Some variables we will need later
    var baseurl = "http://query.yahooapis.com/v1/public/yql?q=";
    var formatjson = "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

    // For each occurrence of stock class, create an object stored in an
    // array that we will use later
    var stocks = [];


    $('div[class="ys"]').each(function(index) {
      var stockticker = $(this).data('stock-ticker');
      var stockinfo = $(this).data('stock-info');
      var stock = {
       ticker: stockticker,
       info: stockinfo
      };
      stocks.push(stock);
    });
    
    // Construct and send our YQL request 
    var ticker = stocks[0].ticker; 
    var query = "select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + ticker + "%22)%0A%09%09&";
    var url = baseurl + query + formatjson;

    $.getJSON(url, function(data) {
      $('.ys').text(data.query.results.quote.LastTradePriceOnly);
    });

    return false;

  });
}).call(this);
