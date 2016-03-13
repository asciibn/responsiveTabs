(function() {

  var mediaQueryInfo = window.matchMedia('(max-width: 800px)');
      mediaQueryInfo.addEventListener(setTabEvents);

      function setTabEvents(){
         if(mediaQueryInfo.matches){
           return true;
         }else{
           return false;
         }
      }
  document.getElementById('tabItemList').addEventListener('click', function(e){
      //console.log(e.target);
      console.log(setTabEvents())
  });

})();
