class ShoppingCart {

    constructor() {
        this.cart = []
    }
            
    getItems() {
        return this.cart
    }

    addItem(itemName, quantity, price) {
        const item = {
            'name': itemName,
            'quantity': quantity,
            'pricePerUnit': price 
        }
        this.cart.push(item)
    }

    clear() {
        this.cart.length = 0
    }
    
    total() {
        return this.cart
        .reduce((acc, item)=> {
            return acc + (item.pricePerUnit * item.quantity)
        },0)       
    }
}

module.exports = ShoppingCart