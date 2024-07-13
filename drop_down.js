function dropDown() {
    var elements = document.getElementsByClassName("drop_down_menu");
    if (elements.length === 0) {
        console.error("No elements found with class 'drop_down_menu'");
        return;
    }
    
    var dropdownMenu = elements[0]; 

    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
}