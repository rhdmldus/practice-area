//When inStock is false, bind a class to the “Out of Stock” p tag that adds  text-decoration: line-through to that element.

var app = new Vue({
el: '#app',
data: {
    onSale:true,
    selectedVariant:0,
    product: 'Socks',
    brand: 'Vue Mastery',
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
    {
        variantId: 2234,
        variantColor: 'green',
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        variantQuantity:10,
    },
    {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
        variantQuantity: 0,
    }
    ],
    cart: 0
},
methods: {
    addToCart() {
    this.cart += 1
    },
    updateProduct(index) {
    this.selectedVariant = index
    console.log(index)
    }
},
computed:{
    title(){
        return this.brand + ' ' + this.product
    },
    image(){
    return this.variants[this.selectedVariant].variantImage
    },
    inStock(){
        return this.variants[this.selectedVariant].variantQuantity
    },
    sale(){
        if(this.onSale) {
            return this.brand + ' ' + this.product + 'are on Sale!'
        }
            return this.brand + ' ' + this.product + 'are not on Sale!'
    }

}
})

