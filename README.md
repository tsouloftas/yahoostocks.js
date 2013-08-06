YahooStocks.js
==============

The easiest way to display stock data on your website. (Thanks for the
idea, [jalcine!](http://github.com/jalcine))

## Usage

Here is a very simple example of how the library can be used:

```xhtml
<!DOCTYPE html>
<html>
  <head>
  </head> 
  <body>
    <div class="ys" data-stock-ticker="GOOG" data-stock-info="LastTradePriceOnly"></div>
    <div class="ys" data-stock-ticker="FB" data-stock-info="Open"></div>
    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
    <script src="yahoostocks.js"></script>
  </body>
</html>
```

In order for the program to work, the target divs must have 3 things:
* ``` class="ys" ``` - Tells the program this is a target div
* ``` data-stock-ticker="" ``` - Contains the stock ticker for the stock you want info about
* ``` data-stock-info="" ``` - What info you want about the stock. [Full list here - Use the "Name" column](https://code.google.com/p/yahoo-finance-managed/wiki/enumQuoteProperty)
* Note: Each div can currently only contain one ticker and one info param. Support for muliple may be coming in a future version.

In addition, you must inlcude [jQuery](http://jquery.com/) if you aren't already. 

## License 

* No Warranty Expressed or Implied. Software is as is.
* [MIT License](http://opensource.org/licenses/mit-license.php)
