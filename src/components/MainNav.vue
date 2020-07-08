<template>
  <div class="main-nav">
      <div class="category-box">
          <a v-bind:class="{active: category==='item'}" v-on:click="setCategory('item')">상품별</a>
          <a v-bind:class="{active: category==='brand'}" v-on:click="setCategory('brand')">브랜드별</a>
      </div>
      <ul class="items" v-if="category==='item'">
            <li v-bind:class="{select: categoryItem===selectCategory}" v-for="categoryItem in categoryList" v-bind:key="categoryItem" class="item">
              <a v-on:click="setSelectCategory(categoryItem)">{{categoryItem}}</a>
            </li>
      </ul>
      <ul class="items" v-if="category==='brand'">
          <li class="item">NIKE</li>
          <li class="item">ADIDAS</li>
          <li class="item">CANVAS</li>
          <li class="item">VANC</li>
          <li class="item">COVERNOT</li>
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
                '전체',
                '상의',
                '바지',
                '신발'
            ],
            brandList: [
                'NIKE',
                'ADIDAS',
                'CANVAS',
                'VANC',
                'COVERNOT'
            ]
        }
    },
    methods: {
        setCategory: function(category) {
            this.category = category;
        },
        setSelectCategory: function(categoryItem) {
            this.selectCategory = categoryItem;
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