(function() {
  'use strict';
  
  angular
    .module('todoApp')
    .component('todoStats', {
      templateUrl: 'components/todo-stats/todo-stats.template.html',
      controller: TodoStatsController
    });
    
  TodoStatsController.$inject = ['TodoService'];
  
  function TodoStatsController(TodoService) {
    var ctrl = this;
    
    ctrl.todos = TodoService.todos;
    ctrl.remainingTodos = TodoService.remainingTodos;
  }
})();