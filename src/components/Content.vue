<template>
  <div class="content-box">
      <Search />
      <div class="product-list" :class="$mq">
          
          <div v-for="product in products" v-bind:key="product" class="product-box">
              <div class="product">
                  <img v-bind:src="product.imageURL" class="product-img">
                  <div class="product-info">
                      <h3 class="brand">{{product.brand}}</h3>
                      <p class="name">{{product.name}}</p>
                      <p class="price">{{product.price}}</p>
                      <div class="attr">
                        <div>
                            <div v-if="product.orderRunaway" class="order-runaway">주문폭주</div>
                            <div v-if="product.todyDelivery" class="today-delivery">당일배송</div>
                        </div>
                        <p class="review">(리뷰 : {{product.review}})</p>
                      </div>
                  </div>
                  <div class="add-icon">
                      <font-awesome-icon icon="cart-plus" />
                  </div>
              </div>
          </div>
          <div v-for="product in products" v-bind:key="product" class="product-box">
              <div class="product">
                  <img v-bind:src="product.imageURL" class="product-img">
                  <div class="product-info">
                      <h3 class="brand">{{product.brand}}</h3>
                      <p class="name">{{product.name}}</p>
                      <p class="price">{{product.price}}</p>
                      <div class="attr">
                        <div>
                            <div v-if="product.orderRunaway" class="order-runaway">주문폭주</div>
                            <div v-if="product.todyDelivery" class="today-delivery">당일배송</div>
                        </div>
                        <p class="review">(리뷰 : {{product.review}})</p>
                      </div>
                  </div>
                  <div class="add-icon">

                  </div>
              </div>
          </div>
          <div v-for="product in products" v-bind:key="product" class="product-box">
              <div class="product">
                  <img v-bind:src="product.imageURL" class="product-img">
                  <div class="product-info">
                      <h3 class="brand">{{product.brand}}</h3>
                      <p class="name">{{product.name}}</p>
                      <p class="price">{{product.price}}</p>
                      <div class="attr">
                        <div>
                            <div v-if="product.orderRunaway" class="order-runaway">주문폭주</div>
                            <div v-if="product.todyDelivery" class="today-delivery">당일배송</div>
                        </div>
                        <p class="review">(리뷰 : {{product.review}})</p>
                      </div>
                  </div>
                  <div class="add-icon">

                  </div>
              </div>
          </div>
          
      </div>
  </div>
</template>

<script>
import Search from './Search'

export default {
    components: {
        Search
    },
    data: function() {
        return {
            products: [
                {
                    name: 'LMC TWIRLED OG TEE black',
                    category: 'shirt',
                    brand: 'LMC',
                    price: '39,000',
                    imageURL: require('../assets/images/products/LMC-shirt.jpg'),
                    review: 0,
                    orderRunaway: false,
                    todyDelivery: true
                },
                {
                    name: '[패키지]아이스버그 반팔 STST3279 + 스플래',
                    category: 'shirt',
                    brand: '티떠블유엔',
                    price: '47,800',
                    imageURL: require('../assets/images/products/TWN-shirt.jpg'),
                    review: 0,
                    orderRunaway: true,
                    todyDelivery: true
                },
                {
                    name: '[패키지][CHUBBY]EMBROIDERY',
                    category: 'shirt',
                    brand: '파르티맨토',
                    price: '59,800',
                    imageURL: require('../assets/images/products/파르티멘토-shirt.jpg'),
                    review: 0,
                    orderRunaway: false,
                    todyDelivery: false
                },
                {
                    name: '알파바운스 슬라이드 - 옐로우:블랙 / FX1327',
                    category: 'shooes',
                    brand: 'adidas',
                    price: '59,000',
                    imageURL: require('../assets/images/products/adidas-shoes (5).jpg'),
                    review: 0,
                    orderRunaway: false,
                    todyDelivery: false
                },
                {
                    name: '에어 베이퍼맥스 플라이니트 3 (AJ6900-012)',
                    category: 'shooes',
                    brand: 'nike',
                    price: '259,000',
                    imageURL: require('../assets/images/products/nike-shoes.jpg'),
                    review: 0,
                    orderRunaway: true,
                    todyDelivery: false
                },
                {
                    name: 'LMC THREE BEARS TEE white',
                    category: 'shooes',
                    brand: 'LMC',
                    price: '39,000',
                    imageURL: require('../assets/images/products/LMC-shirt (2).jpg'),
                    review: 0,
                    orderRunaway: true,
                    todyDelivery: false
                }
            ]
        }
    }
}
</script>

<style scoped> 
    * {
         font-family: 'Noto Sans KR', sans-serif;
    }
    .content-box {
        display: block;
        width: 80%;
        margin-left: auto;
        padding: 0 25px;
        box-sizing: border-box;
    }
    .product-list {
        width: 100%;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .product-list > .product-box {
        width: 100%;
        height: 40vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .product-box > .product {
        width: 90%;
        height: 95%;
        position: relative;
    }
    .product * {
        margin: 0;
        padding: 0;
    }
    .product > .product-img {
        width: 100%;
        height: 60%;
        padding: 0 20px;
        box-sizing: border-box;
    }

    .product-info > * {
        font-size: 14px;
        line-height: 1.2rem;
    }

    .product-info > .brand {
        padding: 5px 0;
    }  
    .product-info > .name {
        font-size: 16px;
        margin: 10px 0;
    }
    .product-info > .review {
        text-align: right;
    }
    .attr {
        margin-top: 10px;
        
        display: flex;
        justify-content: space-between;
    }
    .attr > div > div {
        display: inline-block;
        font-weight: 700;
        font-size: 11px;
        color: white;
        padding: 2px 5px;
        margin-right: 2px;
    }
    .order-runaway {
        background: rgb(255, 156, 156);
    }
    .today-delivery {
        background: rgb(105, 170, 255);
    }
    .attr > p {
        display: inline-block;
    }
    .add-icon {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 40px;
        display: none;
        justify-content: start;
        align-items: center;
        font-size: 25px;
        color: rgba(141, 141, 141, 0.883);
    }

    .product:hover .add-icon {
        display: flex;
    }

    .product-list.desktop {
        width: 100%;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .product-list.desktop > .product-box {
        width: 100%;
        height: 35vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .product-list.tablet {
        width: 100%;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .product-list.tablet > .product-box {
        width: 100%;
        height: 60vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .product-list.tablet .product-info > * {
        font-size: 12px;
        line-height: 1.1rem;
    }
    
    .product-list.mobile {
        width: 100%;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 1fr;
    }
    .product-list.mobile > .product-box {
        width: 100%;
        height: 110vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .product-list.mobile .product-info > * {
        font-size: 14px;
        line-height: 1.1rem;
    }




</style>