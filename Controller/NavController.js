hideAll();
Show();

function Show(){
    $('#Home').css('display','block');
}

function hideAll(){
    $('#Customer,#Items,#PlaceOrder,#Home').css('display','none');
}

$('#btnCustomer').click(function () {
    hideAll();
    CustomerIDAutoMake();
    $('#Customer').css('display','block');
})
$('#btnItem').click(function () {
    hideAll();
    $('#Items').css('display','block');
})
$('#btnPlaceOrder').click(function () {
    hideAll();
    $('#PlaceOrder').css('display','block');
})
