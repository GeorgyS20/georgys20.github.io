$(document).ready(function() {

	//E-mail Ajax Send
	$("callBack").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: '', //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});