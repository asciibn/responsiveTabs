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
    var targetContent;
    var targetElement;
    var docFragment = document.createDocumentFragment();
    var tempDiv = document.createElement('div');
    var selectedTab;

    if(e.target.rel === undefined){
      targetContent = e.target.parentElement.rel;
      targetElement = e.target.parentElement;

      //console.log(e.target.parentElement.href);
    }else{
      targetContent = e.target.rel;
      targetElement = e.target;
      //console.log(e.target.href);
    }
      //console.log(e.target.parentElement)
      //console.log(setTabEvents());
  if(setTabEvents()){
    switch (targetContent) {
      case 'item1':

      if(targetElement.parentElement.childNodes.length != 2){
        tempDiv.appendChild(document.getElementById('item1'))
        docFragment.appendChild(tempDiv);
        targetElement.parentElement.appendChild(docFragment);
      }
            //console.log(document.getElementById('item1'));
            //console.log(targetElement.parentElement.childNodes.length);
            //console.log(selectedTab.childNodes[0]);
        break;
      case 'item2':

      if(targetElement.parentElement.childNodes.length != 2){
        tempDiv.appendChild(document.getElementById('item2'))
        docFragment.appendChild(tempDiv);
        targetElement.parentElement.appendChild(docFragment);
      }
      //selectedTab.removeChild(docFragment);
          //console.log(document.getElementById('item2'));
        break;
      case 'item3':
      if(targetElement.parentElement.childNodes.length != 2){
        tempDiv.appendChild(document.getElementById('item3'))
        docFragment.appendChild(tempDiv);
        targetElement.parentElement.appendChild(docFragment);
      }
        break;
      default:

    }
  }



  });

})();
