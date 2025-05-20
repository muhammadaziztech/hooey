function openProdModal(id=null){
    document.getElementById(id).style.display = 'block';
  }
function closeProdModal(id=null){
  	document.getElementById(id).style.display = 'none';
  }

document.addEventListener('DOMContentLoaded', function(){
  
  jQuery('.hooey-dropdown-select').change(function(){
  jQuery('span.ProductMeta__SkuNumber').html(jQuery('option:selected', this).attr('data-sku'));
  jQuery('span.ProductForm__SelectedValue').html(jQuery('option:selected', this).html());
});	
});