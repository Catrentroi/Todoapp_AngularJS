(function() {
  'use strict';
  
  angular
    .module('todoApp')
    .factory('TodoService', TodoService);
    
  function TodoService() {
    var service = {
      todos: [
        { text: 'Học AngularJS', done: false },
        { text: 'Xây dựng ứng dụng Todo', done: false }
      ],
      addTodo: addTodo,
      removeTodo: removeTodo,
      removeCompleted: removeCompleted,
      hasCompletedTodos: hasCompletedTodos,
      remainingTodos: remainingTodos
    };
    
    return service;
    
    // Các phương thức của dịch vụ
    
    function addTodo(text) {
      if (text) {
        service.todos.push({ text: text, done: false });
      }
    }
    
    function removeTodo(index) {
      service.todos.splice(index, 1);
    }
    
    function removeCompleted() {
      service.todos = service.todos.filter(function(todo) {
        return !todo.done;
      });
    }
    
    function hasCompletedTodos() {
      return service.todos.some(function(todo) {
        return todo.done;
      });
    }
    
    function remainingTodos() {
      return service.todos.filter(function(todo) {
        return !todo.done;
      }).length;
    }
  }
})();