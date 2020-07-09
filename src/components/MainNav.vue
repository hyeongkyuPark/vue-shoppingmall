<template>
  <div class="main-nav">
      <div class="category-box">
          <a v-bind:class="{active: category==='item'}" v-on:click="setCategory('item')">상품별</a>
          <a v-bind:class="{active: category==='brand'}" v-on:click="setCategory('brand')">브랜드별</a>
      </div>
      <ul class="items" v-if="category==='item'">
            <li v-bind:class="{select: categoryItem.view===selectCategory}" v-for="categoryItem in categoryList" v-bind:key="categoryItem" class="item">
              <a v-on:click="setSelectMenu(categoryItem)">{{categoryItem.view}}</a>
            </li>
      </ul>
      <ul class="items" v-if="category==='brand'">
          <li v-bind:class="{select: brandItem.view===selectCategory}" v-for="brandItem in brandList" v-bind:key="brandItem" class="item">
              <a v-on:click="setSelectMenu(brandItem)">{{brandItem.view}}</a>
            </li>
      </ul>
      <ul class="sub-nav">
          <li class="item">공지사항</li>
          <li class="item">고객센터</li>
      </ul>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            category: 'item',
            selectCategory: '전체',
            categoryList: [
                {name: 'all', view: '전체', config: 'category'},
                {name: 'shirt', view: '상의', config: 'category'},
                {name: 'pants', view: '바지', config: 'category'},
                {name: 'shooes', view: '신발', config: 'category'}
            ],
            brandList: [
                {name: 'nike', view: '나이키', config: 'brand'},
                {name: 'adidas', view: '아디다스', config: 'brand'},
                {name: 'LMC', view: 'LMC', config: 'brand'},
                {name: '티떠블유엔', view: '티떠블유엔', config: 'brand'},
                {name: '파르티맨토', view: '파르티맨토', config: 'brand'}
            ]
        }
    },
    methods: {
        setCategory: function(category) {
            this.category = category;
        },
        setSelectMenu: function(menuItem) {
            this.selectCategory = menuItem.view;
            this.$emit('selectEvent', menuItem);
        }
    }
}
</script>

<style>
    .main-nav {
        display: inline-block;
        width: 20%;
        border: 1px solid #ccc;
        font-family: 'Noto Sans KR', sans-serif;
    }
    .category-box > a {
        display: inline-block;
        width: 50%;
        padding: 10px 0;
        text-align: center;
        background: #ccc;
        font-weight: 700;
    }
    .category-box > .active {
        background: white;
    }
    .items {
        display: block;
        padding: 0;
        box-sizing: border-box;
    }
    .items > .item, .sub-nav > .item {
        display: block;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: 300;
        margin: 0;
    }
    .sub-nav {
        border-top: 1px solid #ccc;
        display: block;
        padding: 0;
        box-sizing: border-box;
    }

    .item.select {
        font-weight: bold;
    }


</style>