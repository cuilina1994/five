var app=angular.module("myApp",["ionic"]);
app.controller("myCtrl", function ($scope, $ionicModal) {
    // 初始化模态窗
    $ionicModal.fromTemplateUrl(
        "modal",
        {
            scope:$scope,
            animation:"slide-in-up"
        }
    ).then(function(modal) {
        $scope.dialog = modal;
    });

    // 打开窗口的函数
    $scope.openModal = function() {
        $scope.dialog.show();
    }

    // 退出模态窗
    $scope.back = function() {
        $scope.dialog.hide();
        /* 模态框一旦在项目中不再需要使用，切记一定要调用remove删除*/
        // $scope.dialog.remove();
    }
});