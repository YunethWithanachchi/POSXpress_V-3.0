function ItemModel(itemID,itemName,itemQTY,itemPrice) {
    var __itemID = itemID;
    var __itemName = itemName;
    var __itemQTY = itemQTY;
    var __itemPrice = itemPrice;

    this.getItemID= function () {
        return __itemID;
    }
    this.getItemName = function () {
        return __itemName;
    }
    this.getItemQTY = function () {
        return __itemQTY;
    }
    this.getItemPrice = function () {
        return __itemPrice;
    }

    this.setItemID = function (newItemID) {
        __itemID = newItemID;
    }
    this.setItemName = function (newItemName) {
        __itemName = newItemName;
    }
    this.setItemQTY = function (newItemQTY) {
        __itemQTY = newItemQTY;
    }
    this.setItemPrice = function (newPrice) {
        __itemPrice = newPrice;
    }


}
