function admin_delete_user(user_id) {
    $.ajax({
        url: "../rest/deleteUser.php",
        method: "POST",
        data: {
            id: user_id
        },
        success: function (result) {
            console.log(result);
            var json_result = JSON.parse(result)
            console.log(json_result);
            var id = json_result.id;
            if (json_result.status >= 0) {
                $(`#user-data-${id}`).remove();
            } else {
                alert(json_result.message);
            }
        }
    });
}


$(document).ready(function () {
   
    $.ajax({
        url: "../rest/getAllUser.php",
        method: "GET",
        success: function (result) {
            console.log(result);
            var json_result = JSON.parse(result)
            console.log(json_result);
            if (json_result.length >= 0) {
                json_result.forEach(function (element) {
                    var id = element.id;
                    var email = element.email;
                    var birthdate = element.birthdate;
                    var address = element.address;
                    var first_name = element.firstname;
                    var last_name = element.lastname;
                    var phone = element.phone;
                    var country = element.country;
                    var user_type = element.type;
                    var user_role = element.role;
                    var add_data = `<tr id="user-data-${id}">
                        <td id="user-data-id-${id}">${id}</td>
                        <td id="user-data-email-${id}">${email}</td>
                        <td id="user-data-first-name-${id}">${first_name}</td>
                        <td id="user-data-last-name-${id}">${last_name}</td>
                        <td id="user-data-phone-${id}">${phone}</td>
                        <td id="user-data-country-${id}">${country}</td>
                        <td id="user-data-birthday-${id}">${birthdate}</td>
                        <td id="user-data-address-${id}">${address}</td>
                        <td id="user-data-type-${id}">${user_type}</td>
                        <td id="user-data-role-${id}">${user_role}</td>
                        <td>
                          <button class="btn btn-danger" id="user-btn-delete-${id}" onclick="admin_delete_user(${id})">Delete</button>
                        </td>
                      </tr>`
                    $("#user-table-body").append(add_data);
                });
                

            }
            else {
                alert(json_result.message);
            }
            $('#dataTable').DataTable();
        }
    });
});