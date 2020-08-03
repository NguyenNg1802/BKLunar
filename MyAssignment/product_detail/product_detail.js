function loadContent() {
    var url = document.location.href,
        params = url.split('?')[1].slice(5).split('%20').join(" ");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "product_detail/product_detail.php", true);
    var param = "name=" + params;
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result = this.responseText.split(',');
            var name = result[1];
            price = formatMoney(parseInt(result[2]));
            src = result[3];
            var id = result[0];
            /*console.log("id: "+ id);
            console.log("Name: "+name);
            console.log("Price: "+price);
            console.log("image: "+image);*/
            $('#product-content').html(`<div class="mb-3">
            <p id="detail" class="product-name">${name}</p>
        </div>
        <p class="product-price">
            <span id="price">${price}</span>
            <span>&#8363</span>
        </p>
        <p class="lead font-weight-bold">Quantity</p>
        <div class="add-quantity">
            <span class="change-qty decrease noSelect" onclick="decrease(${price})">-</span>
            <span class="quantity" id="quantityNumber">1</span>
            <span class="change-qty increase noSelect" onclick="increase(${price})">+</span>
        </div><br>
        
        <button class="btn btn-primary btn-md my-0 p" type="submit" onclick=makeOrder(${id})>Order
            <i class="fa fa-shopping-cart ml-1"></i>
        </button>`);
            /*document.getElementById('detail').innerText = name;
            document.getElementById('price').innerText = price;*/
            document.getElementById('image').src = src;
        }
    };
    xmlhttp.send(param);
}

loadContent();

function formatMoney(n, c, d, t) {
    var c = isNaN(c = Math.abs(c)) ? 0 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;

    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

function decrease(prod_price) {
    var quantity = document.getElementById("quantityNumber");
    var price = document.getElementById("price");
    var new_value = parseInt(quantity.innerText) - 1;
    if (new_value > 0) {
        quantity.innerText = new_value;
        price.innerText = formatMoney(new_value * 1000 * prod_price);
    }
}

function increase(prod_price) {
    var quantity = document.getElementById("quantityNumber");
    var price = document.getElementById("price");
    var new_value = parseInt(quantity.innerText) + 1;
    quantity.innerText = new_value;
    price.innerText = formatMoney(new_value * 1000 * prod_price);
}

function makeOrder(id) {
    var quantity = $('#quantityNumber').html();


    $.ajax(
        {
            type: "POST",
            url: "rest/makeOrder.php",
            data: {
                product_id: id,
                quantity: quantity
            },
            success: function (result) {
                var json_result = JSON.parse(result);
                if (json_result.status > 0) {
                    alert(json_result.message);
                }
                else {// signup successfull
                    alert(json_result.message);
                }
            }
        });
}