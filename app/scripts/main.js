
(function() {
'use strict'

var targetContent;
var targetElement;


  var mediaQueryInfo = window.matchMedia('(max-width: 800px)');
      mediaQueryInfo.addEventListener(setTabEvents);

    function setTabEvents(){

       if(mediaQueryInfo.matches){
         return true;
       }else{
        console.log('larget than 800px');
         return false;
       }
    };

  document.getElementById('tabItemList').addEventListener('click', function(e){

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
      removeFragments();
      if(targetElement.parentElement.childNodes.length != 2){
        addNewElement(document.getElementById('item1'));
      }

      break;
      case 'item2':
        removeFragments();
        if(targetElement.parentElement.childNodes.length != 2){
          addNewElement(document.getElementById('item2'));
        }

      break;
      case 'item3':
        removeFragments();
        if(targetElement.parentElement.childNodes.length != 2){
          addNewElement(document.getElementById('item3'));
        }
      break;
      default:

    }
  }
}.bind(this));

function addNewElement(content){
  var tempDiv = document.createElement('div');
  var docFragment = document.createDocumentFragment();
    tempDiv.appendChild(content);
    docFragment.appendChild(tempDiv);
    targetElement.parentElement.appendChild(docFragment);
}

  function removeFragments(){
    var navList = document.getElementById('tabItemList');
    for(var i = 0; i < navList.childNodes.length; i++){
      //console.log(navList.childNodes[i] +' ' + navList.childNodes[i].nodeType);
      if(navList.childNodes[i].nodeType === 1 && navList.childNodes[i].childNodes[1] !== undefined){
        document.querySelector('.items').appendChild(navList.childNodes[i].childNodes[1]);
      }
    }
  }

})();
