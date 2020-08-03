function admin_delete_order(order_id) {
    $.ajax({
        url: "../rest/deleteOrder.php",
        method: "POST",
        data: {
            id: order_id
        },
        success: function (result) {
            //console.log(result);
            var json_result = JSON.parse(result)
            //console.log(json_result);
            var id = json_result.id;
            if (json_result.status >= 0) {
                $(`#order-data-${id}`).remove();
            } else {
                alert(json_result.message);
            }
        }
    });
}


$(document).ready(function () {
    $.ajax({
        url: "../rest/getUserOrders.php",
        method: "GET",
        success: function (result) {
            //console.log(result);
            var json_result = JSON.parse(result)
            //console.log(json_result);
            if (json_result.length >= 0) {
                json_result.forEach(function (element) {
                    var id = element.id;
                    var product_name = element.product_name;
                    var product_image = "../" + element.image;
                    var quantity = parseInt(element.quantity);
                    var product_price = parseInt(element.price);
                    var total = product_price * quantity;
                    var add_data = `<tr id="order-data-${id}">
                        <td id="order-data-image-${id}">
                            <img src="${product_image}" class="prod-img">
                        </td>
                        <td id="order-data-product-name-${id}">${product_name}</td>
                        <td id="order-data-product-price-${id}">${product_price}</td>
                        <td id="order-data-product-quantity-${id}">${quantity}</td>
                        <td id="order-data-product-total-${id}">${total}</td>
                        <td>
                          <button class="btn btn-danger" id="order-btn-delete-${id}" onclick="admin_delete_order(${id})">Cancel</button>
                        </td>
                      </tr>`
                    $("#order-table-body").append(add_data);
                });
                

            }
            else {
                alert(json_result.message);
            }
            $('#dataTable').DataTable();
        }
    });
});