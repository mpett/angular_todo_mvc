var app = angular.module('todoApp', []);

app.controller('todoController', function($scope){
  $scope.todoMessage = '';
  $scope.todoStatus = '';
 
  $scope.todoList=[
    
    {todoMessage:"Go out", statusMessage:"Done"},
    {todoMessage:"Buy food", statusMessage:"On going"},
    {todoMessage:"Finish demo", statusMessage:"Done"}
    ];    
    
    $scope.newItem = function(todoMessage, statusMessage){
      if (this.todoMessage === '') 
        return;   
       $scope.todoList.push({
    	   todoMessage: todoMessage,
    		 statusMessage: statusMessage
    	});

    	this.todoMessage= "";
    	this.todoStatus= "";

    	this.showForm = false;
    }
})