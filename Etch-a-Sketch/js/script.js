$(document).ready(function(){
$('.clear_grid').click(function() {
$('.container > div').remove();//remove all divs within .container div

	var input = prompt('Type an integer between 1 and 64');//ask user to pick a number
	if (input >= 1 && input <= 64){	// Check for input
		var square_size = $('.container').width()/input -2;	//define each grid size

		for(var i = 1; i <= input; i++){
			for(var j = 1; j <= input; j++){
				$('.container').append('<div class="grid_square"></div>');//write each to the .container div
			}
			
		}
		$('.grid_square').css('width',square_size);//define width of grid_square
		$('.grid_square').css('height',square_size);//define height of grid_square
}else{
	alert('Try again: please enter a value between 1 and 128. ');
}
});
/*Changes colors white when the mouse enters and back again when the mouse leaves*/
$('.mouse_trail').click(function(){
	$(".grid_square").mouseenter(function(){
		$(this).addClass('selected');
		$(this).removeClass('not_selected');
	}).mouseleave(function(){
		$(this).removeClass('selected');
		$(this).addClass('not_selected');

	});
});
//display random colors button when the mouse enters and reverts when mouse leaves
$('.random_color').click(function(){
	$(".grid_square").mouseenter(function(){
		 var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);//gets random hex color
			$(this).css("background-color", randomColor);//sets background of each individual grid using keyword "this"

		$(this).removeClass('not_selected');									
	}).mouseleave(function(){
		$(this).removeClass('selected');
		$(this).addClass('not_selected');

	});
});
//Change Opacity when you use mouse enter
$('.opacity').click(function(){
	$(".grid_square").mouseenter(function(){
		 var currentOpacity = $(this).css('opacity');
					if(currentOpacity > 0){
						$(this).css('opacity', currentOpacity - 0.1);
					}//sets background of each individual grid using keyword "this"

		$(this).removeClass('not_selected');									
	}).mouseleave(function(){
		$(this).removeClass('selected');
		$(this).addClass('not_selected');

	});
});
});