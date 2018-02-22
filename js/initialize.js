$(document).ready(function(){
  $('.tooltipped').tooltip({html: true});
  $('.tabs').tabs();
  $('.sidenav').sidenav({draggable: true});
  $('.dropdown-trigger').dropdown({constrainWidth: true, coverTrigger: false});


  if (matchMedia) {
  	const mq = window.matchMedia("(min-width: 601px)");
		mq.addListener(WidthChange);
		WidthChange(mq);
	}
	function WidthChange(mq) {
	  if (mq.matches) {
	  	$('#encounters').pushpin({top: 64});
	  } else {
	  	$('#encounters').pushpin({top: 5, offset: 46});
	  }
  }
  


});