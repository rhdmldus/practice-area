//When inStock is false, bind a class to the “Out of Stock” p tag that adds  text-decoration: line-through to that element.
Vue.component('productDetail', {
    props: {
        details:{
            type: Array,
            required: true
        }
    },
    template:`
    <div v-for="detail in details">{{ detail }}</div>
    `
})
Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:`
        <div class="product">              
            <div class="product-image">
                <img :src="image" />
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                <p>shipping: {{ shipping }}</p>
                <p>{{ sale }}</p>
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
                <div class="color-box"
                        v-for="(variant, index) in variants" 
                        :key="variant.variantId"
                        :style="{ backgroundColor: variant.variantColor }"
                        @mouseover="updateProduct(index)"
                        >
                </div> 
                <button v-on:click="addToCart" 
                    :disabled="!inStock"
                    :class="{ disabledButton: !inStock }"
                    >
                Add to cart
                </button>
                <button v-on:click="removeItems" 
                    :disabled="!inStock"
                    :class="{ disabledButton: !inStock }"
                    >
                Remove Items
                </button>
            </div> 
        </div>
        `,
        data() {
            return(
                {
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
                }
            )
        },
        methods: {
            removeItems(){
                this.$emit('remove-items', this.variants[this.selectedVariant].variantId)
            },
            addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
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
            },
            shipping(){
                if(this.premium) {
                    return "Free"
                }
                return 2.99
            }
        
        }
})
var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeItems(id) {
            for(let i = this.cart.length - 1; i >= 0; i--) {
                if(this.cart[i] === id) {
                    this.cart.splice(i, 1);
                }
            }
        }
    }
})

