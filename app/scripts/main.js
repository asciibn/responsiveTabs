
(function() {
'use strict'

var targetContent;
var targetElement;

  var onHashChange = window.addEventListener('hashchange', checkCurrentHash, false);
  var desktopMediaQuery = window.matchMedia('(min-width: 800px)');
      desktopMediaQuery.addListener(cleanUpMobile);

  var mediaQueryInfo = window.matchMedia('(max-width: 800px)');
      mediaQueryInfo.addEventListener(setTabEvents);

    function setTabEvents(){

       if(mediaQueryInfo.matches){
         return true;
       }else{
         return false;
       }
    };

    function checkCurrentHash(e){
      if(location.hash.length > 0){
        targetContent = location.hash.slice(1,location.hash.length);
        var allATags = document.getElementsByTagName('a');
        for(var i = 0; i < allATags.length; i++){
          if(allATags[i].rel === targetContent){
              targetElement = allATags[i];
          }
        }
        contentLayout();
      }

    }

    function cleanUpMobile(){
      if(desktopMediaQuery.matches){
        removeFragments();
        for(let i = 0; i < document.querySelector('.items').childNodes.length; i++){

          if(document.querySelector('.items').childNodes[i].id === targetContent && document.querySelector('.items').childNodes[i] !== undefined){
              //console.log(document.querySelector('.items').childNodes[i].id);
            //  console.log(document.querySelector('.items').childNodes[i]);
              document.querySelector('.items').childNodes[i].className = 'displayItem, itemContent';
          }else{
              document.querySelector('.items').childNodes[i].className = 'dontDisplayItem';
          }
        }

        //console.log(document.targetContent);
      }

    }

document.getElementById('tabItemList').addEventListener('click', setupMobileTabs);

function setupMobileTabs(e){

      if(e.target.rel === undefined || e.target.parentElement != 'tabContainer'){
        targetContent = e.target.parentElement.rel;
        targetElement = e.target.parentElement;

        //console.log(e.target.parentElement);
      }else{
        targetContent = e.target.rel;
        targetElement = e.target;
        //console.log(e.target.href);
      }
        //console.log(e.target.parentElement)
        //console.log(setTabEvents());
        contentLayout();
}

function contentLayout(){
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
  }else{
    //document.getElementById('tabItemList').removeEventListener('click', setupMobileTabs, false);
    document.getElementById('item1').className = 'dontDisplayItem';
    document.getElementById('item2').className = 'dontDisplayItem';
    document.getElementById('item3').className = 'dontDisplayItem';
    switch (targetContent) {
      case 'item1':
        document.getElementById('item1').className = 'displayItem, itemContent';
      break;
      case 'item2':
        document.getElementById('item2').className = 'displayItem, itemContent';

      break;
      case 'item3':
        document.getElementById('item3').className = 'displayItem, itemContent';
      break;
      default:

    }
  }
}

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
       document.querySelector('.items').appendChild(navList.childNodes[i].childNodes[1].childNodes[0]);
       navList.childNodes[i].removeChild(navList.childNodes[i].childNodes[1]);
        //console.log(navList.childNodes[i].childNodes[1].childNodes[0]);
      }
    }
  }

})();
