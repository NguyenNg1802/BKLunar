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
        url: "../rest/getAllOrders.php",
        method: "GET",
        success: function (result) {
            //console.log(result);
            var json_result = JSON.parse(result)
            //console.log(json_result);
            if (json_result.length >= 0) {
                json_result.forEach(function (element) {
                    var id = element.id;
                    var quantity = element.quantity
                    var product_id = element.product_id;
                    var product_name = element.product_name;
                    var user_id = element.user_id;
                    var address = element.address;
                    var first_name = element.firstname;
                    var last_name = element.lastname;
                    var phone = element.phone;
                    var country = element.country;
                    var add_data = `<tr id="order-data-${id}">
                        <td id="order-data-id-${id}">${id}</td>
                        <td id="order-data-product-id-${id}">${product_id}</td>
                        <td id="order-data-product-name-${id}">${product_name}</td>
                        <td id="order-data-product-quantity-${id}">${quantity}</td>
                        <td id="order-data-user-id-${id}">${user_id}</td>
                        <td id="order-data-first-name-${id}">${first_name}</td>
                        <td id="order-data-last-name-${id}">${last_name}</td>
                        <td id="order-data-phone-${id}">${phone}</td>
                        <td id="order-data-address-${id}">${address}</td>
                        <td id="order-data-country-${id}">${country}</td>
                        <td>
                          <button class="btn btn-danger" id="order-btn-delete-${id}" onclick="admin_delete_order(${id})">Delete</button>
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