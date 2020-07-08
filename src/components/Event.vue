<template>
  <div class="event-box">
      
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .event-box {
        width: 100%;
        height: 35vw;
        box-sizing: border-box;
        background: url('../assets/images/event-banel.jpg');
        background-size: auto 35vw;
        background-position: left;

        animation-name: event;
        animation-duration: 10s;
        animation-iteration-count: infinite;

        margin-bottom: 20px;
    }

    @keyframes event {
        0% {background-position: left;}
        30% {background-position: center;}
        60%{background-position: right;}
        100%{background-position: left;}
    }
</style>