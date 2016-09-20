angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicPlatform, $cordovaMedia, $timeout) {

  $scope.AudioIzquierda = function(){

    $ionicPlatform.ready(function() {

      try{
        var src = "izquierda.mp3";
        $scope.audioIzq = $cordovaMedia.newMedia(src);
        $scope.audioIzq.startRecord();
        //var detalles = JSON.stringify($scope.audioIzq);
        //alert(detalles);

        /*$timeout(function(){
          $scope.audioIzq.stopRecord();
          alert("grabado!!!");
        }, 2000)*/

      } catch(ex){

        alert(ex);
      }
      
    });

  }

  $scope.Detener = function(btn){
    try{

      if(btn == 'btnIzquierda'){

        $scope.audioIzq.stopRecord();

      }

      if(btn == 'btnDerecha'){

        $scope.audioDer.stopRecord();

      }

      if(btn == 'btnAbajo'){

        $scope.audioAbajo.stopRecord();

      }

      if(btn == 'btnArriba'){

        $scope.audioArriba.stopRecord();

      }

      if(btn == 'btnAcostado'){

        $scope.audioAcostado.stopRecord();

      }
      

    } catch(ex){
      alert(ex);
    }
  }

  $scope.ReproducirIzquierda = function(){

    $ionicPlatform.ready(function(){
      try{

        $scope.audioIzq.play();

      } catch(ex){

          alert(ex);

      }
    });
  }

  $scope.AudioDerecha = function(){
    
    $ionicPlatform.ready(function() {

      try{
        var src = "derecha.mp3";
        $scope.audioDer = $cordovaMedia.newMedia(src);
        $scope.audioDer.startRecord();

      } catch(ex){

        alert(ex);
      }
      
    });

  }

  $scope.ReproducirDerecha = function(){

    $ionicPlatform.ready(function(){
      try{

        $scope.audioDer.play();

      } catch(ex){

          alert(ex);

      }
    });
  }



  $scope.AudioAbajo = function(){
    
    $ionicPlatform.ready(function() {

      try{
        var src = "abajo.mp3";
        $scope.audioAbajo = $cordovaMedia.newMedia(src);
        $scope.audioAbajo.startRecord();

      } catch(ex){

        alert(ex);
      }
      
    });

  }

  $scope.ReproducirAbajo = function(){

    $ionicPlatform.ready(function(){
      try{

        $scope.audioAbajo.play();

      } catch(ex){

          alert(ex);

      }
    });
  }


  $scope.AudioArriba = function(){
    
    $ionicPlatform.ready(function() {

      try{
        var src = "arriba.mp3";
        $scope.audioArriba = $cordovaMedia.newMedia(src);
        $scope.audioArriba.startRecord();

      } catch(ex){

        alert(ex);
      }
      
    });

  }

  $scope.ReproducirArriba = function(){

    $ionicPlatform.ready(function(){
      try{

        $scope.audioArriba.play();

      } catch(ex){

          alert(ex);

      }
    });
  }


  $scope.AudioAcostado = function(){
    
    $ionicPlatform.ready(function() {

      try{
        var src = "acostado.mp3";
        $scope.audioAcostado = $cordovaMedia.newMedia(src);
        $scope.audioAcostado.startRecord();

      } catch(ex){

        alert(ex);
      }
      
    });

  }

  $scope.ReproducirAcostado = function(){

    $ionicPlatform.ready(function(){
      try{

        $scope.audioAcostado.play();

      } catch(ex){

          alert(ex);

      }
    });
  }



})

.controller('AutorCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})
