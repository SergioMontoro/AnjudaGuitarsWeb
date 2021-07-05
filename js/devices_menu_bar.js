var menu = document.getElementsByClassName('devices_menu');
var submenu = document.getElementsByClassName('devices_submenu');
var on_offM = 0;
var on_offS = 0;

function unfoldedMenu(n) {
    on_offM += n;  

    if (on_offM == 1) {
        menu[0].style.display = "block";
    } else {
        menu[0].style.display = "none";
        on_offM = 0;
    }

}
function unfoldedSubmenu(n) {
    on_offS += n;  

    if (on_offS == 1) {
        submenu[0].style.display = "block";
    } else {
        submenu[0].style.display = "none";
        on_offS = 0;
    }

}