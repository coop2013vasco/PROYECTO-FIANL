/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function(){
 // Ouverture/fermeture des descriptions
  $( '.more-open' ).on( 'click', function() {
	var parent_this = $(this).parent().parent();
	var toggle_this = parent_this.find('.newsbox-desc');
	$('.newsbox-desc').not(toggle_this).slideUp( 300 );
	toggle_this.slideToggle( 300 );
	$('.newsbox').not(parent_this).removeClass('open');
	parent_this.toggleClass('open');
 });
});
// ------------------------
// Egalisation des hauteurs de box
function equalheight_newsbox(id) {
	var H = 0;
	$(id).height( 'auto' );
	$(id).each( function() {
		H = Math.max( Math.ceil($(this).find('figure').height() + $(this).find('header').height()), H );
	});
	$(id).height( H+'px' );
	$(id).find(id+'-desc').css({'top':H+'px'});
};
// ------------------------
// Centrage des images
function centerheight_img_newsbox(id) {
  $(id).find('figure img').css({'top':'0','left':'0','width':'100%', 'height':'auto'})
	$(id).each( function() {
      $(this).find('figure img').css({'width':'100%','height':'auto'})
    H_fig = $(this).find('figure').height();
    H_img = $(this).find('figure img').height();
    if( H_img > H_fig )
    {
      H = Math.floor( (H_fig - H_img )/2 );
      $(this).find('figure img').css({'top':H+'px','left':'0'})
    } else {
      $(this).find('figure img').css({'width':'auto','height':'100%'})
      W_fig = $(this).find('figure').width();
      W_img = $(this).find('figure img').width();
      W = Math.floor( (W_fig - W_img )/2 );
      $(this).find('figure img').css({'top':'0','left':W+'px'})
    }
	});
};
// ------------------------
$(window).on( 'load resize', function(){
	equalheight_newsbox('.newsbox');
  centerheight_img_newsbox('.newsbox');
});
// ------------------------
