export function format_number(x)  {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}
export function fomat_hanpheduyet(x){
    var year = x.toString().substr(0,4);
    var month =x.toString().substr(5,2);
    var day=x.toString().substr(8,2);
    var hanpheduyet=day+'/'+month+'/'+year;
    return hanpheduyet;
}
export function format_ngaytao(x){
    var year = x.toString().substr(0,4);
    var month =x.toString().substr(5,2);
    var day=x.toString().substr(8,2);
    var hour=x.toString().substr(11,5);
    var ngaytao= hour+' '+day+'/'+month+'/'+year;
    return ngaytao;
}
export function format_time(x){
    var hour=x.toString().substr(11,5);
    return hour;
}