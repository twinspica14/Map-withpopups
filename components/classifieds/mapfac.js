(function(){

	"use strict";

	angular
		.module("StarterApp")
		.factory("classifiedsFactory3", function($http, $firebaseArray){

			var ref= new Firebase('https://mapp-9d0d6.firebaseio.com/');
							
			return{
			ref: $firebaseArray(ref)
			//console.log('added record with id' + id);

					}
		});
})();