

$(document).on('ready', function(){


	$("button").on('click',function(){
		var value = 
		$("#input_1").val()
		* $("#input_2").val()
		* $("#input_3").val();

		$("#display_result").html(value);

	})
})