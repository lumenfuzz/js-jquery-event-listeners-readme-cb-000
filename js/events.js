//define functions here
function getIt() {
  $('p').on('click', function(){
    alert('Hey!')
  });
}

function frameIt() {
  $(document).on('load', function(){
    $('img').append('.tasty')
  });
}

function submitIt() {

}

function pressIt() {
  $(document).on('keydown', function(key) {
    if(key.which == 71){
        alert('g was pressed');
    }
  });
}


$(document).ready(function(){

// call functions here

});
