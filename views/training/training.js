(function(){
		"use strict";
	
		angular
			.module('esthetiqueApp')
				.controller('TrainingCtrl', ['$scope','moment', 'alert', function($scope, moment, alert){
					
					//for calendar
					var vm = this;

    //These variables MUST be set as a minimum for the calendar to work
    vm.calendarView = 'month';
    vm.viewDate = new Date();
    vm.events = [
      {
        title: 'An event',
        type: 'warning',
        startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
        endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
        draggable: true,
        resizable: true
      }, {
        title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
        type: 'info',
        startsAt: moment().subtract(1, 'day').toDate(),
        endsAt: moment().add(5, 'days').toDate(),
        draggable: true,
        resizable: true
      }, {
        title: 'This is a really long event title that occurs on every year',
        type: 'important',
        startsAt: moment().startOf('day').add(7, 'hours').toDate(),
        endsAt: moment().startOf('day').add(19, 'hours').toDate(),
        recursOn: 'year',
        draggable: true,
        resizable: true
      }
    ];

    vm.isCellOpen = true;

    vm.eventClicked = function(event) {
      alert.show('Clicked', event);
    };

    vm.eventEdited = function(event) {
      alert.show('Edited', event);
    };

    vm.eventDeleted = function(event) {
      alert.show('Deleted', event);
    };

    vm.eventTimesChanged = function(event) {
      alert.show('Dropped or resized', event);
    };

    vm.toggle = function($event, field, event) {
      $event.preventDefault();
      $event.stopPropagation();
      event[field] = !event[field];
    };
					
					
					
					
					  $scope.oneAtATime = true;

					  $scope.groups = [
						{
						  title: 'Princess Lift- Stage 1 & 2 PDO Threads Training course:',
						 /* content: 'Dynamic Group Body - 1'*/
						},
						{
						  title: 'Dynamic Group Header - 2',
						  content: 'Dynamic Group Body - 2'
						}
					  ];

					  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

					  $scope.addItem = function() {
						var newItemNo = $scope.items.length + 1;
						$scope.items.push('Item ' + newItemNo);
					  };

					  $scope.status = {
						isFirstOpen: true,
						isFirstDisabled: false
					  };

									}]);
	
	
	
}());