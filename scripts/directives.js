
/**
* directives Module
*
* 管理所有的指令
*/
angular.module('directives', [])

// 正在加载...
.directive('loading', function () {
	return {
		restrict: 'EAC',
		template: '<img src="" alt="" />',
		replace: true
	}
})
