/* clg-onReadFile - v1.0.0 - 2016-09-14 */
var mod;

mod = angular.module('clg-onReadFile', []);

mod.directive('onReadFile', function ($parse) {
	return {
		restrict: 'A',
        scope: {
            onReadFile : "&"
        },
		link: function(scope, element, attrs) {
			element.on('change', function(e) {
				var reader = new FileReader();
				reader.onload = function(e) {
					scope.$apply(function() {
                       scope.onReadFile({$content:e.target.result});                      
					});
				};
				reader.readAsText((e.srcElement || e.target).files[0]);
			});
		}
	};
});