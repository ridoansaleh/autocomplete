(function(){
	"use strict";

	var cities = [
		{
			id: 1,
			name: "Jakarta"
		},
		{
			id: 2,
			name: "Kuala Lumpur"
		},
		{
			id: 3,
			name: "Bangkok"
		},
		{
			id: 4,
			name: "Manila"
		},
		{
			id: 5,
			name: "Hanoi"
		},
		{
			id: 6,
			name: "Singapore"
		},
		{
			id: 7,
			name: "Ragoon"
		}
	];

	console.log(cities);

	$("#cityAutocomplete").keypress(function(event) {
	  console.log("Clicked !!");
	});

})();