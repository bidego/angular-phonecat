'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phonecatApp').
  component('phoneList', {
    template:
        '<h1> {{$ctrl.user}} </h1>' +
        '<p>Total numbers of phones: {{ $ctrl.phones.length }}</p>' +
        '<ul>' +
          '<li ng-repeat="phone in $ctrl.phones">' +
            '<span>{{phone.name}}</span>' +
            '<p>{{phone.snippet}}</p>' +
          '</li>' +
        '</ul>' +
        '<table>' +
          '<tr ng-repeat="i in $ctrl.rows">' +
            '<td ng-repeat="j in $ctrl.rows">{{ j + (i*8) + 1 }}</td>' +
          '</tr>' +
        '</table>',
    controller: function PhoneListController() {
      this.rows = []
      for(let i = 0; i <8 ; i++) {
        this.rows.push(i);
      }

      this.user = 'Gon';


      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });
