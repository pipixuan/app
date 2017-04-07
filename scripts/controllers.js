
/**
* controllers Module
*
* 管理所有的控制器
*/
angular.module('controllers', [])

// 导航
.controller('NavsController', ['$scope', function ($scope) {
	// 构造数据
	$scope.navs = [
		{url: '#/', text: '今日一刻', icon: 'icon-home'},
		{url: '#/older', text: '往期内容', icon: 'icon-file-empty'},
		{url: '#/author', text: '热门作者', icon: 'icon-pencil'},
		{url: '#/category', text: '栏目浏览', icon: 'icon-menu'},
		{url: '#/favourite', text: '我的喜欢', icon: 'icon-heart'},
		{url: '#/settings', text: '设置', icon: 'icon-cog'}
	];

}])

// 今日一刻
.controller('TodayController', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	// 显示加载图标
	$rootScope.loaded = false;

	// 更换标题
	$rootScope.title = '今日一刻';

	// 当前导航索引
	$rootScope.index = 0;

	// Ajax请求数据
	$http({
		method: 'get',
		url: './api/stream.php'
	})
	.success(function (data) {
		// 添加数据
		$scope.data = data.result;

		// 隐藏图标
		$rootScope.loaded = true;
	})
	.error(function () {

	});

}])

// 往期内容
.controller('OlderController', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	// 开启加载图标
	$rootScope.loaded = false;

	// 更换标题
	$rootScope.title = '往期内容';

	// 当前导航索引
	$rootScope.index = 1;

	// 获取前n天的数据
	$scope.day = -1;

	// 数据以天计
	$scope.items = [];

	// Ajax请求数据
	$http({
		method: 'get',
		url: './api/stream.php',
		params: {
			// 以当天计算，获取前n天的数据
			day: $scope.day
		}
	})
	.success(function (data) {
		// 往期内容，后续要分页
		$scope.items.push(data.result);

		// 隐藏加载图标
		$rootScope.loaded = true;
	})
	.error(function () {

	});
}])

// 热门作者
.controller('AuthorController', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	// 显示加载图标
	$rootScope.loaded = false;

	// 更换标题
	$rootScope.title = '热门作者';

	// 当前导航索引
	$rootScope.index = 2;

	// Ajax请求
	$http({
		method: 'get',
		url: './api/author.php',
		params: {}
	})
	.success(function (data) {
		// 推荐作者
		$scope.rec = data.rec;

		// 热门作者
		$scope.all = data.all;

		// 隐藏加载图标
		$rootScope.loaded = true;
	});
}])