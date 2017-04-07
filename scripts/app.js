
// 入口文件
var App = angular.module('App', ['ngRoute', 'controllers', 'directives', 'services']);

// 配置路由
App.config(['$routeProvider', function($routeProvider) {
	// 今日一刻
	$routeProvider.when('/', {
		templateUrl: 'views/today.html',
		controller: 'TodayController'
	})
	// 往期内容
	.when('/older', {
		templateUrl: 'views/older.html',
		controller: 'OlderController'
	})
	// 热门作者
	.when('/author', {
		templateUrl: 'views/author.html',
		controller: 'AuthorController'
	})
	// 个人中心（作者）
	.when('/center', {
		templateUrl: 'views/center.html'
	})
	// 栏目浏览
	.when('/category', {
		templateUrl: 'views/category.html'
	})
	// 栏目列表
	.when('/list', {
		templateUrl: 'views/list.html'
	})
	// 我的喜欢
	.when('/favourite', {
		templateUrl: 'views/favourite.html'
	})
	// 设置
	.when('/settings', {
		templateUrl: 'views/settings.html'
	});

}]);

App.run(['$rootScope', function ($rootScope, collapse) {
	// 显示加载图标
	$rootScope.loaded = false;

	// 侧边栏打开状态（未打开）
	$rootScope.collapsed = false;

	// 侧边栏索引
	$rootScope.index = 0;

	$rootScope.toggle = function (index) {
		// 切换侧边栏状态
		$rootScope.collapsed = !$rootScope.collapsed;

		// 获取所有导航
		var navs = document.querySelectorAll('.navs dd');

		// 设置当前导航状态
		document.querySelector('.navs dd.active').classList.remove('active');

		navs[$rootScope.index].classList.add('active');

		// 设置动国效果
		if($rootScope.collapsed) {

			for(var i=0; i<navs.length; i++) {
				navs[i].style.transitionDelay = '0.2s';
				navs[i].style.transform = 'translate(0)';
				navs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
			}

		} else {
			
			for(var i=navs.length - 1; i>=0; i--) {
				navs[i].style.transitionDelay = '';
				navs[i].style.transform = 'translate(-100%)';
				navs[i].style.transitionDuration = (navs.length - i + 1) * 0.05 + 's';
			}
		}
	}
}]);
