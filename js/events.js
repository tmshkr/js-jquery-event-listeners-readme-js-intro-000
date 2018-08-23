function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  document.querySelector('img').onload = this.className('tasty')
}

$(document).ready(function(){

getIt()
frameIt()
});
