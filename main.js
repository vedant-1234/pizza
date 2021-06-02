menu_list_array = ["Veg Margherita Pizza",
    "Chicken Tandoori Pizza",
    "Veg Supreme Pizza",
    "Paneer Tikka Pizza",
    "Deluxe Veggie Pizza",
    "Veg Extravaganza Pizza"];
function getmenu() {
    var html_data;
    html_data = "<ol class='menu_list'>"
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) { html_data = html_data + '<li>' + menu_list_array[i] + '</li>' }
    html_data = html_data + "</ol>"
    document.getElementById("display_menu").innerHTML = html_data;
}

function add_item() { var htmldata; 
    var item = document.getElementById("add_item").value;
     menu_list_array.sort();
      htmldata = "<section class='cards'>"
     for (var i = 0; i < menu_list_array.length; i++ ) 
        { 
            htmldata = htmldata + '<div class="card">' + '<img src="images/pizzaImg.png"/>' + menu_list_array[i] + '</div>' 
        } htmldata = htmldata + "</section>" 
        document.getElementById("display_addedmenu").innerHTML = htmldata; }
        function add_top() {
            var item = document.getElementById("add_item").value; menu_list_array.push(item); add_item();
        
        }