var lds_type = 'default';
function loading(type="", start=true) {
    if (type !== '') lds_type = type;
    var cls = document.getElementsByClassName('lds-'+lds_type);
    var frm = document.getElementById('loading');
    if (start === true) {
        var con = document.getElementById('lds-con');
        cls[0].style.display = 'inline-block';
        con.style.top = (window.innerHeight/2-50)+'px';
        con.style.left = (window.innerWidth/2-50)+'px';
        frm.style.display = 'block';
        return lds_type;
    } else {
        cls[0].style.display = 'none';
        frm.style.display = 'none';
        return 'off';
    }
}
function loaded() {
    return loading(lds_type, false);
}