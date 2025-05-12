(function() {
  'use strict';

  // Định nghĩa module và các dependency
  angular.module('todoApp', [])
    .controller('TodoController', [function() {
      var vm = this;
      
      vm.todoList = [
        { text: 'Learn AngularJS', done: false },
        { text: 'Build a To-Do App', done: false }
      ];
      vm.todoInput = '';

      vm.addTodo = function() {
        if (vm.todoInput) {
          vm.todoList.push({ text: vm.todoInput, done: false });
          vm.todoInput = '';
        }
      };

      vm.removeTodo = function(index) {
        vm.todoList.splice(index, 1);
      };

      vm.removeCompleted = function() {
        vm.todoList = vm.todoList.filter(function(todo) {
          return !todo.done;
        });
      };
      
      vm.hasCompletedTodos = function() {
        return vm.todoList.some(function(todo) {
          return todo.done;
        });
      };
      
      vm.remainingTodos = function() {
        return vm.todoList.filter(function(todo) {
          return !todo.done;
        }).length;
      };
    }]);
})();
