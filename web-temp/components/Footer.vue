<template>
    <div class="footerrrr">
        <div class="covering">
            <div class="one">
                <p>(주)옥스콜프 | 서울 금천구 시흥대로 165, 남서울 힐스테이트</p>
                <p>010-6337-9039</p>
                <p>사업자등록번호: 808-89-26588</p>
                <p>대표: 안광옥 | 기술담당: 김준하</p>
                <br>
                <p>©copyright 2021. OaksCorp. All rights reserved.</p>
            </div>
            <div class="border-bar"></div>
            <div class="two">
                <a href="#">이용약관</a>
                <a href="#">개인정보 수집방침</a>
                <a href="#">참가규칙</a>
                <a href="#">체육관 등록 약관</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    
}
</script>

<style scoped>
    .footerrrr {
        color: white;
        height: calc(40vh);
        background-color: rgb(17, 43, 68);
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .covering {
        width: 1050px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        height: 100%;
        align-items: center;
    }

    .border-bar {

    }

    .one {
        width: 500px;
    }

    .two {
        width: 500px;
        display: flex;
        justify-content: space-between;
    }

    .two a {
        color: white;
    }
</style>