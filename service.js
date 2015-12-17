var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {

  this.getUsers = function() {
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: 'http://reqres.in/api/users?page=1'
    }).then(function(response) {
      var data = response.data.data;
      for(var i = 0; i < data.length; i++){
        data[i].first_name = 'Skywalker';
      }
      deferred.resolve();
    });

    return deferred.promise;
  };

});
