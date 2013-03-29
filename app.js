/* global angular */
(function () {
  "use strict";

  // Utility function for preparing dates
  function iso( dateStr ) {
    var date = new Date( dateStr );

    if ( dateStr === undefined ) {
      console.warn('undefined dateStr');
      return '[?]';
    }

    return date.toISOString();
  }

  // Utility function for validating form
  function isUndefinedOrEmpty( value ) {
    return value === undefined || value === '';
  }

  // Depend on 'ui' to get the date picker and validation directives
  angular.module( 'validationDemo', ['ui'] )

  .controller( 'ProductCtrl', [ '$scope',
    function( $scope ) {

      // Default Data

      $scope.products = [
        {
          name      : 'pretty dresses',
          quantity  : 1000,
          startDate : iso('03/13/2013'),
          endDate   : iso('03/22/2013'),
          approved  : true
        },
        {
          name      : 'eye-catching shoes',
          quantity  : 200,
          startDate : iso('03/17/2013'),
          endDate   : iso('04/11/2013'),
          approved  : false
        }
      ];

      // Validation Errors

      $scope.dateInFuture = function( value ) {
        // A little ugly, but we can use toDateString to "floor" the
        // current timestamp to the start of the calendar day:
        var today = new Date( new Date().toDateString() ),
          date = new Date( value );

        // Don't validate unpopulated fields
        if ( isUndefinedOrEmpty( value ) ) {
          return true;
        }

        return today <= date;
      };

      $scope.datesInOrder = function() {
        var start = $scope.startDate,
          end = $scope.endDate,
          startDate = new Date( start ),
          endDate = new Date( end );

        // Don't validate unpopulated fields
        if ( isUndefinedOrEmpty( start ) || isUndefinedOrEmpty( end ) ) {
          return true;
        }

        return startDate <= endDate;
      };

      // Form Functionality

      $scope.addProduct = function() {
        $scope.products.push({
          name      : $scope.name,
          quantity  : $scope.quantity,
          startDate : iso( $scope.startDate ),
          endDate   : iso( $scope.endDate ),
          approved  : false
        });

        $scope.name = '';
        $scope.quantity = undefined;
        $scope.startDate = undefined;
        $scope.endDate = undefined;
      };

      $scope.unapproved = function() {
        var count = 0;

        angular.forEach( $scope.products, function( product ) {
          count += ! product.approved ? 0 : 1;
        });

        return count;
      };

      $scope.archive = function() {
        var oldProducts = $scope.products;

        $scope.products = [];

        angular.forEach( oldProducts, function( product ) {
          if ( ! product.approved ) {
            $scope.products.push( product );
          }
        });
      };
    }
  ]);
})();