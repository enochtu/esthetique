(function(){
        "use strict";
    
        var app = angular.module('esthetiqueApp', ['ui.router','common.services','ngAnimate', 'ui.bootstrap']);
        
            app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
                        $urlRouterProvider.otherwise('/');
                    
                        $stateProvider
                                .state('welcome',
                                       {
                                    url:'/',
                                    templateUrl:'views/welcome/welcome.html'
                                                                
                                })
                                .state('about',
                                       {
                                    url:'/about',
                                    templateUrl:'views/about/about.html'
                                })
                                .state('patients',
                                       {
                                    url:'/patients',
                                    templateUrl:'views/patients/patients.html'    
                                })
                                .state('doctors',
                                       {
                                    url:'/doctors',
                                    templateUrl:'views/doctors/doctors.html'
                                })
                                .state('models',
                                       {
                                    url:'/models',
                                    templateUrl:'views/models/models.html'
                                })
                                .state('products',
                                       {
                                    url:'/products',
                                    templateUrl:'views/products/products.html'
                                })
								/*.state('products-details',
                                       {
                                    url:'/products-details/:product_id',
                                    templateUrl:'views/products/products-details.html',
									controller: 'ProductDetailsController as panel'
                                })*/
								.state('product-details',
                                       {
                                    //url:'/products-details/:product_id',
									url:'/product-details',
                                    templateUrl:'views/products/product-details.html'
									
                                })
                                .state('training',
                                       {
                                    url:'/training',
                                    templateUrl:'views/training/training.html'
                                })
                                .state('beforeAndAfter',
                                       {
                                    url:'/beforeAndAfter',
                                    templateUrl:'views/beforeAndAfter/beforeAndAfter.html'
                                })
                                .state('contactUs',
                                       {
                                    url:'/contactUs',
                                    templateUrl:'views/contactUs/contactUs.html'
                                })
								.state('tabs',
                                       {
                                    url:'/tabs',
                                    templateUrl:'tabs.html',
									controller:'AccordionDemoCtrl'
                                })
                                .state('feedback',
                                       {
                                    url:'/feedback',
                                    templateUrl:'views/feedback/feedback.html'
                                })
                
                    }]
            );
}());