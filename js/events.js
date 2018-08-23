function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  $('img').on('load', function(){
    addClass('tasty')
  })
}
frameIt()

$(document).ready(function(){

getIt()
});
