(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    const vm = this;

    // Properties
    vm.lunchItems = '';
    vm.message = '';
    vm.messageClass = '';

    // Methods
    vm.checkLunch = function () {
      const items = vm.lunchItems.split(',').filter(item => item.trim() !== '');
      if (items.length === 0) {
        vm.message = 'Please enter data first';
        vm.messageClass = 'red red-border';
      } else if (items.length <= 3) {
        vm.message = 'Enjoy!';
        vm.messageClass = 'green green-border';
      } else {
        vm.message = 'Too much!';
        vm.messageClass = 'green green-border';
      }
    };
  }
})();
