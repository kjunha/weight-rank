<template>
    <div class="navigation">
        <ul>
            <li><a href="#service" class="servicecss">서비스 소개</a></li>
            <li><a href="#">채용</a></li>
            <li><a href="rank">랭킹</a></li>
            <li><a href="#">제휴문의</a></li>
            <li><a href="#">FAQ</a></li>
        </ul>
    </div>
</template>

<script>

export default {
    
}
</script>

<style scoped>
    @font-face {
        font-family: 'IBMPlexSansKR-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    .navigation {
        width: 600px;
        display: flex;
        align-items: center;
    }
    ul, li {
        list-style: none;
        margin: 0px;
        padding-left: 0px;
        font-weight: 700;
        font-size: 18px;
    }

    li {
        transition: transform .2s;
    }

    ul {
        display: flex;
        justify-content: space-between;
        flex-grow: 1;
    }

    a {
        text-decoration: none;
        color: white;
        transition: color 0.3s;
    }

    li:hover {
        transform: scale(1.2);
        
    }
    a:hover {
        color: tomato;
    }
    
    .servicecss {
        transition: 0.5s;
    }
</style>