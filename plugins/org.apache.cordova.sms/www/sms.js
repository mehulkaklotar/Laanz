//cordova.define("org.apache.cordova.sms.SmsSender", function(require, exports, module) {
//	
//var exec = require('cordova/exec');
//
//var sms = {
//	    send: function (phone, message, method, successCallback, failureCallback) {
//	    		//alert (phone+"_"+message+"_"+method+"_"+successCallback+"_"+failureCallback);
//		        cordova.exec(
//		            successCallback,
//		            failureCallback,
//		            "Sms",
//		            "send",
//		            [phone, message, method]
//		        );
//	    	}
//	}
//
////	if (typeof module !== "undefined") 
////	{
////		alert("module defined now");
//		module.exports = sms;
////	}
//
//});

var sms = {
	    send: function (phone, message, method, successCallback, failureCallback) {
	    		//alert (phone+"_"+message+"_"+method+"_"+successCallback+"_"+failureCallback);
		        cordova.exec(
		            successCallback,
		            failureCallback,
		            "Sms",
		            "send",
		            [phone, message, method]
		        );
	    	}
	}

	if (typeof module !== "undefined") 
	{
		alert("module defined now");
		module.exports = sms;
	}


