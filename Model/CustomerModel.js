function CustomerModel(cid, fName, address, tel)
{
    var __cid = cid;
    var __fName = fName;
    var __address = address;
    var __tell = tel;

    this.getCustomerCID = function () {
        return __cid;
    }
    this.getCustomerFName = function () {
        return __fName;
    }
    this.getCustomerAddress = function () {
        return __address;
    }
    this.getCustomertel = function () {
        return __tell;
    }
    this.setCustomerCID = function (newCID) {
        __cid = newCID;
    }
    this.setCustomerFName = function (newFName) {
        __fName = newFName;
    }
    this.setCustomerAddress = function (newAddress) {
        __address = newAddress;
    }
    this.setCustomertel = function (newTel) {
        __tell = newTel;
    }

}
