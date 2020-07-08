<template>
  <div class="search-box">
      <div class="input-box-wrap">
          <div class="input-box">
            <input type="text">
            <font-awesome-icon class="search-icon" icon="search" />
          </div>
      </div>
      <div class="sort-box">
        <ul class="sort-list">
            <li>등록일</li>
            <li>상품명</li>
            <li>낮은가격</li>
            <li>높은가격</li>
            <li>인기순</li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        warn: function() {
            alert('asdas');
        }
    }
}
</script>

<style>
    .search-box {
        display: block;
    }
    .input-box-wrap {
        display: flex;
        width: 100%;
        justify-content: center;
    }
    .input-box {
        display: flex;
        width: 80%;
        justify-content: center;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 10px;
    }
    .input-box input {
        width: 90%;
        height: 30px;
        border: none;
        font-size: 17px;
        text-indent: 20px;
        margin-left: 10px;
    }
    .input-box input:focus {
        outline: none;
    }
    .input-box .search-icon {
        width: 30px;
        height: 30px;
        margin-left: auto;
        margin-right: 10px;
        padding: 3px;
        box-sizing: border-box;
    }
    .sort-list li {
        display: inline-block;
        padding: 2px 10px;
        margin-left: auto;
    }

    .sort-box {
        display: flex;
        font-size: 14px;
        margin: 10px 0;
    }
    .sort-box ul {
        margin-left: auto;
    }
</style>