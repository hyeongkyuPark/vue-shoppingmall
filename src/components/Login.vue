<template>
  <div id="loginPage">
      <div class="login-page-wrap" v-bind:class="$mq">
        <h2>로그인</h2>
        <div class="login-box">
            <div class="left-box">
                <h3>회원 로그인</h3>
                <p>가입하신 아이디와 비밀번호를 입력해주세요.</p>
                <p>비밀번호는 대소문자를 구분합니다.</p>
                <input type="text">
                <input type="password">
                <input type="submit" value="LOG-IN">
            </div>
            <div class="right-box">
                <h3>회원가입</h3>
                <p>아직 회원이 아닌신가요?</p>
                <p>회원가입을 하시면 장바구니 기능을 이용하실 수 있습니다.</p>
                <button>JOIN-US</button>
                <p>아이디 혹은 비밀번호를 잊으셨나요?</p>
                <p>간단한 정보를 입력 후 잃어버린 정보를 찾으실 수 있습니다.</p>
                <button>ID/PASSWORD</button>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #loginPage {
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        font-family: 'Noto Sans KR', sans-serif;
    }

    .login-page-wrap {
        width: 1150px;
    }

    .login-page-wrap > h2, h3 {
        font-size: 17px;
        font-weight: bold;
    }

    #loginPage .login-box {
        border: 1px solid #ccc;
        border-top: 1.5px solid rgb(124, 124, 124);
        border-bottom: 1.5px solid rgb(124, 124, 124);
        display: flex;
        box-sizing: border-box;
    }

    .left-box {
        width: 50%;
        box-sizing: border-box;
        padding: 50px;
    }

    .right-box {
        width: 50%;
        box-sizing: border-box;
        padding: 50px;
    }

    input {
        width: 100%;
        height: 40px;
        box-sizing: border-box;

    }

    input[type=text] {
        margin-top: 20px;
        margin-bottom: 5px;
    }

    button {
        margin: 13px 0;
        background: white;
        border: 1px solid rgb(116, 116, 116);
        
    }

    button, input[type=submit] {
        height: 50px;
        width: 100%;
        font-weight: bold;
    }

    input[type=submit] {
        margin-top: 15px;
        border: none;
        background: black;
        color: white;
    }

    p {
        margin: 0;
        font-size: 11px;
        color: rgb(161, 160, 160);
    }

</style>
