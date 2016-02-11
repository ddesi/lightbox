$(document).ready(function(){

	$(".lightbox-link").click(function(event){

		var imgUrl = $(event.target).data("img")

		var link_element = $(event.target);
		var imageURL = link_element.data("img-url");

		var image = $("#image");
		image.attr('src', imageURL);
		image.css("z-index", 1);

		$('.out').show();

		$(".out").click(function(){		
			$(".out").hide();
		});


  	})

})
