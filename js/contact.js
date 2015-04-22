jQuery(document).ready(function ($) {

	$("#submitBtn").click(function () {
	console.log(($("#inputEmail").val().indexOf("@")));
		if($("#inputName").val().length==0) {
			$("#inputName").css("background-color" , "#ffa07a");
			alert('Put down your name or I will not know who you are');
		} else {
			$("#inputName").css("background-color" , "");
			if (($("#inputEmail").val().length==0) || ($("#inputEmail").val().indexOf("@")==-1)) { //add one more OR condition that checks if the string has "@" character
				$("#inputEmail").css("background-color" , "#ffa07a");
				alert('Give me a valid electronic mail address so I can reply your heartwarming message');
			} else {
				$("#inputEmail").css("background-color" , "");
				if ($("#inputMessage").val().length==0) {
					$("#inputMessage").css("background-color" , "#ffa07a");
					alert('Don\'t you have anything to say to me? Don\'t you?');
				} else {
					$("#inputMessage").css("background-color" , "");
					if ($("#checkbox").is(':checked') == false) {
						alert('Please agree to deliver Leo the box of donuts. Please. \n\nDonuts.');
					} else {
						alert('Message sent! Thank you and expect a reply from Leo soon, but only AFTER you deliver the donuts. \n\nThem donuts are his inspiration in life.\n\nThem donuts.');
					}
				}				
			}
		}
	});

});