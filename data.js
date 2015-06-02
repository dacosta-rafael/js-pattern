

	
			var View = View || {};
			var utag_data = {};
			View.getTemplate = function(){
				return jQuery( "#data").attr( "data-tmpl" );
			}
			View.getCats = function(){
				//return jQuery("#data").attr('data-cats');
				return ( jQuery("#data").attr('data-cats') ) ? jQuery("#data").attr('data-cats') : false;
			}
			View.getTaxonomy= function(){
				//return jQuery("#data").attr('data-taxonomy');
				return ( jQuery("#data").attr('data-taxonomy') ) ? jQuery("#data").attr('data-taxonomy') : false;
			}
			View.getTags= function(){
				//return jQuery("#data").attr('data-tags');
				return ( jQuery("#data").attr('data-tags') ) ? jQuery("#data").attr('data-tags') : false;
			}
			View.getDataObj = function() {
				var tmpl = View.getTemplate();
				var data_cats = View.getCats();
				var data_taxonomy = View.getTaxonomy();
				var data_tags = View.getTags();
				tmp =false;
					tmp = {
					"article_category": data_cats,
			      	"age_segment": data_taxonomy,
					"article_tags": data_tags,
				  	};		
				return tmp;
			}
			
			///build obj from dom for tealium///
			var utag_content = View.getDataObj();	
			///for tealium use below///
			var utag_data = utag_content;
			//console.log(utag_data);	
	
	
	
	
