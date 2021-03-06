angular.module('starter').factory('FriendFactory', ['$http', function ($http) {
    var url = 'http://localhost:3000/api/friends/register/';
    return {
        registerUser: function (user, callback) {
            var data = {
                userName: user.userName,
                loc: user.loc
            };
            $http.post(url + user.distance, data).then(function (response) {
                callback(response);
            }, function (err) {
                console.error(err);
            });
        }
    };
}]);
