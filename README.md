YahooStocks.js
==============

The easiest way to display stock data on your website. (Thanks for the
idea, [jalcine!](http://github.com/jalcine))

## Usage

```xhtml
<!DOCTYPE html>
<html>
  <head>
  </head> 
  <body>
    <div class="ys" data-stock-ticker="GOOG"
      data-stock-info="LastTradePriceOnly"></div>
    <div class="ys" data-stock-ticker="GOOG"
      data-stock-info="Open"></div>
    <div class="ys" data-stock-ticker="FB"
      data-stock-info="LastTradePriceOnly"></div>
    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
    <script src="../yahoostocks.js"></script>
  </body>
</html>
```
