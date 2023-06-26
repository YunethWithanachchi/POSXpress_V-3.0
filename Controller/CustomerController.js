$('#saveCustomer').click(function () {
    let cid = $('#customerId').val();
    let fName = $('#customerName').val();
    let address = $('#customerAddress').val();
    let tel = $('#customerTel').val();

    let res = saveCustomer(cid, fName, address,tel);
    if (res) clearAllCustomerText();
    CustomerIDAutoMake();
})

$("#deleteCustomer").click(function () {
    let cid = $("#customerId").val();
    let option = confirm(`Do you want to delete ID:${cid}`);
    if (option) {
        let res = deleteCustomer(cid);
        if (res) {
            alert("Customer Deleted");
        } else {
            alert("Delete Failed")
        }

    }
    loadAllCustomerToTheTable();
    clearAllCustomerText();
});

$("#updateCustomer").click(function () {
    let cid = $("#customerId").val();
    let fName = $("#customerName").val();
    let address = $("#customerAddress").val();
    let tel = $("#customerTel").val();

    let option = confirm(`Do you want to Update Customer ID:${cid}`);
    if (option) {
        let res = updateCustomer(cid, fName, address, tel);
        if (res) {
            alert("Customer Updated");
        } else {
            alert("Update Failed");
        }
    }
    loadAllCustomerToTheTable();
    clearAllCustomerText();

});
function saveCustomer(cid, fName, address, tel) {
    let customer = new CustomerModel(cid, fName,address, tel);
    customerTable.push(customer);// customer add

    // load the table
    loadAllCustomerToTheTable();
    return true;
}
function getAllCustomers() {
    return customerTable;
}

//delete customer

function deleteCustomer(cid) {
    let customer = searchCustomer(cid);
    if (customer != null) {
        let indexNumber = customerTable.indexOf(customer);
        customerTable.splice(indexNumber, 1);
        return true;
    } else {
        return false;
    }
}

// search customer
function searchCustomer(cid) {
    for (var i in customerTable) {
        if (customerTable[i].getCustomerCID() === cid) return customerTable[i];
    }
    return null;
}


function updateCustomer(cid, fName, address, tel) {
    let customer = searchCustomer(cid);
    if (customer != null) {
        customer.setCustomerFName(fName)
        customer.setCustomerAddress(address)
        customer.setCustomertel(tel);
        return true;
    } else {
        return false;
    }
}


function loadAllCustomerToTheTable() {
    let allCustomers = getAllCustomers();
    $('#CustomerTableView>tbody').empty(); // clear all the table before adding for avoid duplicate
    for (var i in allCustomers) {
        let cid = allCustomers[i].getCustomerCID();
        let fName = allCustomers[i].getCustomerFName();
        let address = allCustomers[i].getCustomerAddress();
        let tel = allCustomers[i].getCustomertel();

        var row = `<tr><td>${cid}</td><td>${fName}</td><td>${address}</td><td>${tel}</td></tr>`;
        $('#CustomerTableView>tbody').append(row);
    }
}

/*Validations*/
function clearAllCustomerText() {
    $("#customerId").val("");
    $("customerName").val("");
    $("#customerAddress").val("");
    $("#customerTel").val("");
}

$("#searchCustomer").click(function () {

    let customer = searchCustomer($('#cid').val());
    if (customer != null) {
        $("#customerId").val(customer.getCustomerCID());
        $("#customerName").val(customer.getCustomerFName());
        $("#customerAddress").val(customer.getCustomerAddress());
        $("#customerTel").val(customer.getCustomertel());
    } else {
        clearAllCustomerText();
    }

});

let cusRegEx = /^(C00)[0-9]{1,3}$/;
let cusNRegEx = /^[A-z]{1,100}$/;

let cusARegEx = /^[A-z,0-9]{1,200}$/;

$('#customerId').on('keyup', function (event) {
    let inputID = $("#customerId").val();
    if (cusRegEx.test(inputID)) {
        $("#customerId").css('border', '2px solid green');
    } else {
        $("#customerId").css('border', '2px solid red');
        $("#lblCid").text('Your Input Data Format is Wrong (C001)');
    }
});
$('#customerName').on('keyup', function (event) {
    let inputID = $("#customerName").val();
    if (cusNRegEx.test(inputID)) {
        $("#customerName").css('border', '2px solid green');
    } else {
        $("#customerName").css('border', '2px solid red');
        $("#lblFName").text('Your Input Data Format is Wrong (Udara)');
    }
});

$('#customerAddress').on('keyup', function (event) {
    let inputID = $("#customerAddress").val();
    if (cusARegEx.test(inputID)) {
        $("#customerAddress").css('border', '2px solid green');
    } else {
        $("#customerAddress").css('border', '2px solid red');
        $("#lblAddress").text('Your Input Data Format is Wrong (Homagama)');
    }
});

function CustomerIDAutoMake() {
    try {
        let lastID = customerTable[customerTable.length - 1].getCustomerCID();
        let newID = parseInt(lastID.substring(1, 4)) + 1;
        if (newID < 10) {
            $('#cid').val("C00" + newID);
        } else if (newID < 100) {
            $('#cid').val("O0" + newID);
        } else {
            $('#cid').val("O" + newID);
        }
    } catch (e) {
        $('#cid').val("C001");
    }


}
