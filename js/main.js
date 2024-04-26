$(document).ready(function() {
    let products = "https://my-json-server.typicode.com/ghulam46/pwaapi/products";

    let dataResults = '';
    let catResults = '';
    let categories = [];

    $.get(products, (product) => {
        $.each(product, (key, items) => {

            _cat = items.category;

            dataResults += "<div>"
                            + "<h3>" + items.name + "</h3>"
                            + "<h3>" + _cat + "</h3>"
                        + "</div>";

            if($.inArray(_cat, categories) == -1) {
                categories.push(_cat);
                catResults += "<option value='" + _cat + "'>" + _cat + "</option>";
            }
        })

        $('#products').html(dataResults);
        $('#cat-select').html(catResults);
    })


});