(function() {
  'use strict';
  
  angular
    .module('todoApp')
    .component('todoList', {
      templateUrl: 'components/todo-list/todo-list.template.html',
      controller: TodoListController
    });
    
  TodoListController.$inject = ['TodoService'];
  
  function TodoListController(TodoService) {
    var ctrl = this;
    
    ctrl.todos = TodoService.todos;
    ctrl.removeTodo = TodoService.removeTodo;
  }
})();