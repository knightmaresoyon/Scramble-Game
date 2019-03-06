var $draggedItem;
var $sourceLocation;
var $destinationLocation;
var emptySquare = 15;
$(document).ready(function () {

    //jQuery.event.props.push('dataTransfer');

    $('.tile').on('dragstart', dragging);
    $('.tile').on('dragend', draggingEnded);
    $('.square').on('dragenter', preventDefault);
    $('.square').on('dragover', preventDefault);
    $('.square').on('drop', dropItem);
    scramble();
});


function dragging() {

    $(this).addClass('dragged');
    $draggedItem = $(this);
    $sourceLocation = $draggedItem.parent().data('square');
    
}
function draggingEnded() {

    $(this).removeClass('dragged');
}
function preventDefault(e) {

    e.preventDefault();
}

function dropItem() {

    var $square = $(this);

    if ($square.hasClass('square') && $square.children().length == 0) {

        $destinationLocation = $square.data('square');

        //alert($sourceLocation);

        //alert($destinationLocation);

        var distance = $destinationLocation - $sourceLocation
        if (distance < 0) distance = -(distance)

        //alert(distance);


        if (distance == 1 || distance == 4) {

            swapTile($square);

        }

        else {

            alert('Wrong Move...!!!');
        }



    }

    else {

        alert('Wrong Move...!!!');
    }

    checkForWinner();
}

function swapTile($square) {


    $draggedItem.appendTo($square);

}

function scramble(){

    var random = Math.floor((Math.random())*10);

   // alert(random);
    
    var distance=random;


   // $('#tile15').appendTo($('#square16'));
    

     if(distance<=3){

         $('#tile'+distance).appendTo($('#square16'));
         $('#tile4').appendTo($('#square'+distance));



     }

     else if(distance<=6)
     {
         $('#tile'+distance).appendTo($('#square16'));
         $('#tile10').appendTo($('#square'+distance));

     }

     else 
     {
         $('#tile'+distance).appendTo($('#square16'));
         $('#tile11').appendTo($('#square'+distance));

     }  

}

function checkForWinner(){


 for(var i=1;i<16;i++){

    if($('#tile'+i).parent().attr('id') != 'square'+i)return;


 }

  $('#message').html('<Marquee> Winner!!!! Refresh to Scramble Again </Marquee>');

   



  
    
}

