<template>
  <div class="main-header">
      <div class="left-item">
          <a href="/">BrandShop</a>
      </div>
      <div class="right-item">
          <ul v-if="login">
              <li class="menu"><a href="#">장바구니</a></li>
              <li class="menu"><a href="#">마이페이지</a></li>
          </ul>
          <ul v-else>
              <li class="menu"><a href="#">회원가입</a></li>
              <li class="menu"><a href="/login">로그인</a></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            login: false
        }
    }
}
</script>

<style scoped>

    .main-header {
        display: flex;
        padding: 20px 40px;
    }
    .right-item {
        margin-left: auto;
        display: flex;
        align-items: center;
    }
    .left-item {
        display: flex;
        align-items: center;
        font-family: 'Pacifico', cursive;
        font-size: 30px;
        border: 5px solid rgba(100, 100, 100, 0.904);
        border-radius: 10px;
        padding: 2px 10px;
        box-sizing: border-box;
        transition: .5s;
    }
    .left-item > a {
        color: rgba(100, 100, 100, 0.904);
        transition: .5s;
    }
    .left-item:hover > a {
        color: black;
    }
    .left-item:hover{
        border: 5px solid black;
    }

    .menu {
        display: inline-block;
        padding: 0 10px;
    }
</style>