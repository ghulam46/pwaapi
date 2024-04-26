$(document).ready(function() {
    let products = "https://my-json-server.typicode.com/ghulam46/pwaapi/products";

    let dataResults = '';
    let catResults = '';
    let categories = [];

    $('#products').html('<p>Loading...</p>');

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
        $('#cat-select').html("<option value='all'>All</option>" + catResults);
    });

    // Fungsi filter
    $('#cat-select').on('change', () => {   
        updateProduct($('#cat-select').val());
    });

    function updateProduct(cat) {
        let dataResults = '';
        let _newProduct = products; 

        if(cat != 'all') {
             _newProduct = products + '?category=' + cat;
        }

        $('#products').html('<p>Loading...</p>');

        $.get(_newProduct, (product) => {
            $.each(product, (key, items) => {
    
                _cat = items.category;
    
                dataResults += "<div>"
                                + "<h3>" + items.name + "</h3>"
                                + "<h3>" + _cat + "</h3>"
                            + "</div>";
            })
    
            $('#products').html(dataResults);
        });
    }

});