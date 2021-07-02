//When inStock is false, bind a class to the “Out of Stock” p tag that adds  text-decoration: line-through to that element.
Vue.component('product-review', {
    template: `
        <form class="review-form" @submit.prevent="onSubmit">
            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </p>
            <p>
                <label for="name">Name:</label>
                <input id="name" v-model="name" placeholder="name">
            </p>
            <p>
                <label for="review">Review:</label>
                <textarea id="review" v-model="review" placeholder="review"></textarea>
            </p>
            <p>
                <label for="rating">Rating:</label>
                <select id="rating" v-model.number="rating">
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
            </p>
            <p>Would you recommend this product?</p>
                <label>
                    yes
                    <input type="radio" value="yes" v-model="recommend"/>
                </label>
                <label>
                    no
                    <input type="radio" value="no" v-model="recommend"/>
                </label>
            <p>
                <input type="submit" value="submit">
            </p>
        </form>
    `,
    data(){
        return {
            name:null,
            review:null,
            rating:null,
            recommend:null,
            errors: []
        }
    },
    methods: {
        onSubmit() {
            if(this.name && this.review && this.rating && this.recommend) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating,
                    recommend: this.recommend
                }
                this.$emit('review-submitted', productReview)
                this.name = null
                this.review = null
                this.rating = null
                this.recommend = null
            }
            else {
                if(!this.name) this.errors.push('Name required.')
                if(!this.review) this.errors.push('Review required.')
                if(!this.rating) this.errors.push('Rating required.')
                if(!this.recommend) this.errors.push('Recommendation required.')
            }
        }
    }
})
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
                <div>
                    <h2>Reviews</h2>
                    <p v-if="!reviews.length">There are no reviews yet.</p>
                    <ul>
                        <li v-for="review in reviews">
                            <p>name: {{ review.name }}</p>
                            <p>review: {{ review.review }}</p>
                            <p>rating: {{ review.rating }}</p>
                            <p>recommendation: {{ review.recommend }}</p>
                        </li>
                    </ul>
                </div>
                <product-review @review-submitted="addReview"></product-review>
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
                    reviews: []
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
            },
            addReview(productReview){
                this.reviews.push(productReview)
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
