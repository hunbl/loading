var lds_type = "default";
function loading(type="", start=true) {
    if (start === true) {
      if (type !== "") lds_type = type;
      $('.lds-'+lds_type).show();
      $('#lds-con').css('top', window.innerHeight/2-50);
      $('#lds-con').css('left', window.innerWidth/2-50);
      $('#loading').show();
    } else {
        $('.lds-'+lds_type).hide();
        $('#loading').hide();
    }
}
function loaded() {
    loading(lds_type, false);
}