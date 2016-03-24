(function(){
		"use strict";
		
		angular
			.module('common.services')
			.factory('productService', ['$resource', function($resource){
				
				return $resource("/product/:id");
			}// end of the anonymous function for the  product factory method 
			
		]); // end of the factory function
	
}())