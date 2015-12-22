'use strict';

eventsApp.controller('EventController',
		function EventController($scope) {
		
		$scope.event = {
				name: 'Angular boot Camp',
				date: '1/1/2016',
				time: '12:30 am',
				location: {
					address: 'Cecil',
					city: 'Jacksonville',
					province: 'FL'
				},	
				imageUrl: '/img/angularjs-logo.png',
				sessions: [
				       {
				    	   		name: 'Directives Masterclass',
				    	   		creatorName: 'Parker',
				    	   		duration: '1h',
				    		    level: 'Advanced',
				    		    abstract: 'Blah Blah Blah',
				    		    upVoteCount: 0
				       },
				       {
				    	   name: 'Controllers',
			    	   		creatorName: 'Parker',
			    	   		duration: '1h',
			    		    level: 'beginner',
			    		    abstract: 'Blooh Blooh Blooh Blooh',
			    		    upVoteCount: 0
				       },
				       {
				    	   name: 'Directives Part 2',
			    	   		creatorName: 'Parker',
			    	   		duration: '2h',
			    		    level: 'Advanced',
			    		    abstract: 'Blah Blah Blah',
			    		    upVoteCount: 0	
				       }
				]
		}
	
		}
);