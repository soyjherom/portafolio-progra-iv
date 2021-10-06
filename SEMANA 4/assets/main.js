function guardar_usuario(){
    var cookie_name = "name=cookie_progra_iv;";
    var expiration_date = 'expires=Thu;';
    var max_age_in_seconds = 3600;
    var route = 'path=/;';
    var domain = '';
    var user_name = "user_name="+document.getElementById("user_name_text").value+";";
    document.cookie = cookie_name + expiration_date + route + user_name;
}