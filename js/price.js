/*var xbtc = new XMLHttpRequest();
xbtc.open('GET', 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD', true);
xbtc.onreadystatechange = function(){
	if(xbtc.readyState == 4){
		var ticker = JSON.parse(xbtc.responseText);
		price = ticker.last;
		document.getElementById('btc').innerHTML = "$" + price;
	}
};
xbtc.send();
*/

var amount = 1
var price = 1000000 

function btcConvert(){
 var amount = document.getElementById("btcc").value;
 var btcCalc = amount * price;
 var btcCalc = btcCalc.toFixed(0);
 document.getElementById("usdc").value = btcCalc;
};

function usdConvert(){
 var amount = document.getElementById("usdc").value;
 var usdCalc =  amount / price;
 var usdCalc = usdCalc.toFixed(7);
 document.getElementById("btcc").value = usdCalc;
}

function copyFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
  alert("BTCM Contract Address Copied: " + copyText.value);
}