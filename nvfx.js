/**
 * JavaScript implemented Effects for NexVend.com website
 **
 * @author		Soumya Deb <deb@nexvend.com>
 * @copyright	NexVend Sdn. Bhd.
 *
 **/

//	------------------------------------- Declare namespace, objects and methods
//		----------------------------------------- The global/container namespace
var nvc = {};
//		========================================================================

//		------------------------------------- Now the children objects & methods
nvc.title = "Who we are...";					//// The current article's title
nvc.titles = {									///// Storage for ALL the titles
	"1"	:	"Who we are...",
	"2"	:	"What we do...",
	"3"	:	"Where we are..."
}
nvc.resetTitle = function () {
	nvc.setTitle( nvc.title );						/// Read & set default title
}
nvc.setTitle = function ( title ) {
	if ( title === $("#title").html() ) return;		// Don't change if it's same
	$("#title").hide().html( title ).fadeIn(200);	// if not, then change title
}
nvc.setArticle = function ( id ) {
	$("article").hide();
	$("article#" + id).fadeIn();
}
//		========================================================================

//	-------------------------------------------------- Initiate DOM manipulation
nvc.setArticle(1);
//	============================================================================

//	------------------------------------------------------------- Event Listenrs
$(".switch").each(function () {
	var $this = $(this)					//
	,	index = $this.data("title")		//
	,	title = nvc.titles[ index ];	//// Pre-evaluation for faster-execution
	$this.hover( function () {			// Hover catches both MouseEnter & Leave
		nvc.setTitle( title );				// MouseEnter handler, wraped method
	},	nvc.resetTitle );					/// MouseLeave handler, function ref
});
$(".switch").on("click", function () {
	var index = $(this).data("title");		/// Read the title value of the menu
	nvc.title = nvc.titles[ index ];		///// Change the default title value
	nvc.setTitle( nvc.title );							/// First, set the title
	nvc.setArticle( index );							/// Then set the article

	$(".switch.active").removeClass("active");	//
	$(this).addClass("active");					//// Then apply the active-class
});
//	============================================================================
