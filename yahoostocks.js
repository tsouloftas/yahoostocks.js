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
    // array that we will use later & create an array of the unique
    // tickers to use for the query
    var stocks = [];
    var tickers = [];

    $('div[class="ys"]').each(function(index) {
      var stockticker = $(this).data('stock-ticker');
      var stockinfo = $(this).data('stock-info');
      var stock = {
       ticker: stockticker,
       info: stockinfo
      }; 
      // Make sure ticker is not already in array
      var exists = $.inArray(stockticker, tickers);
      if (exists == -1) { 
        tickers.push(stockticker);
      }
      stocks.push(stock);
    });
    
    // Construct our YQL request
    var tickers_string = tickers.join("%22%2C%20%22");
    var query = "select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + tickers_string + "%22)%0A%09%09&";
    var url = baseurl + query + formatjson;

    // Retrieve json, find which ticker corresponds to the stock, and
    // update the correct div with the proper info
    $.getJSON(url, function(data) {
      $.each(stocks, function(index, value) {
        var x = $.inArray(value.ticker, tickers);
        $('.ys:eq('+ index +')').text(data.query.results.quote[x][value.info]);
      });
    });

    return false;

  });
}).call(this);
