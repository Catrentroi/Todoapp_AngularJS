(function () {
  "use strict";

  angular.module("todoApp").component("todoForm", {
    templateUrl: "components/todo-form/todo-form.template.html",
    controller: TodoFormController,
  });

  TodoFormController.$inject = ["TodoService"];

  function TodoFormController(TodoService) {
    var ctrl = this;

    ctrl.todoInput = "";
    ctrl.addTodo = addTodo;

    // Thêm một todo mới
    // Gọi phương thức addTodo từ dịch vụ TodoService
    // và đặt lại giá trị của todoInput về chuỗi rỗng sau khi thêm todo mới
    function addTodo() {
      TodoService.addTodo(ctrl.todoInput);
      ctrl.todoInput = "";
    }
  }
})();
