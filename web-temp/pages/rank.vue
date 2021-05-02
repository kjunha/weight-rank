<template>
    <div class="rankmain">
        <div class="main">
            <div class="top">
                <div class="logo">
                    <Logo />
                </div>
                <div class="nav">
                    <Navi />
                </div>
            </div>
        </div>

        <div class="rankers">

            <div class="wheresearch">   
                <div class="countryselect">
                    <div class="input-select">
                        <label>지역</label>
                        <select v-model="selected">
                            <option v-for="country in countries" v-bind:key="country.code">
                                {{ country.name }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="maintext">
                <h1>{{ selected }} TOP 10</h1>
            </div>
            <div class="toptier">
                <div class="rank2-wrap">
                    <div class="rank2">
                        <div></div>
                        <div>
                            <p>🥈</p>
                            <img src="https://whywetrain.com/wp-content/uploads/2017/12/1514142280_andrei-deiu-300x300.jpg" alt="profile">
                        </div>
                        <div class="nameandwhere">
                            <p>헨리 파웰</p>
                            <p>💪🏻Professional Gym</p>
                        </div>
                        <h1>2</h1>
                    </div>
                </div>

                <div class="rank1-wrap">
                    <div class="rank1">
                        <div></div>
                        <div>
                            <p>🥇</p>
                            <img src="https://lh3.googleusercontent.com/proxy/4c6kHjpilv7N1BJfD-WUOVoxsaa9tuK1SxEfx-fwT4lxOwUvI-C3qeXllazRD4Ha5lbXlkJ0RnLPN3DkuwjjWV67lEdyBqk96XwUARJDna1JEi6U173Ptq_oaHagXVjYdqS1lRfiEO5-0rp1li0nsVyFdRCJlEiRi6wjaUPL_k-TqYyMUh0r3OU1RMPa5HfpWdB2pC7MnoHFb5G7c-tWUnpkC7SJBxCSB_WBszit5PMMvFjTZOBxld7Jqniw2nrzKWbk5rYQmoHT9B7LG-SEhX8VROwiL-XJEQQB1U5WP37ixZ0efJV1jj7c8iLA_k9EF-3iuDokxF7S3-PcWHeIkgAGFDH7Pk_00KZNLwDnuIc7zpe2IukhK8qI-hXzwJs1jOUuQvrvoSNmyfIZy4cN-KKNE5McLJxvVTd885WK-ZfROlEPHo7oMwkZQkVJizk8sSP8HHTYaW5QUlF5CLstYvT63jCNmSvkrq8CS-BOwm-_Fvk" alt="profile">
                        </div>
                        <div class="nameandwhere">
                            <p>야엘 셀비아</p>
                            <p>💪🏻MyProtein Gym</p>
                        </div>
                        <h1>1</h1>
                    </div>
                </div>
                <div class="rank3-wrap">
                    <div class="rank3">
                        <div></div>
                        <div>
                            <p>🥉</p>
                            <img src="https://www.superprof.com/images/teachers/teacher-home-fitness-model-and-personal-trainer-give-advice-and-train-people-get-shape.jpg" alt="profile">
                        </div>
                        <div class="nameandwhere">
                            <p>그레고리 노비치</p>
                            <p>💪🏻MyProtein Gym</p>
                        </div>
                        <h1>3</h1>
                    </div>
                </div>
            </div>
            <div class="rest">
                <div class="oneperson">
                    <p>4위</p>
                    <div>
                        <img src="https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg" alt="profile">
                    </div>
                    <div class="nameandwhere">
                        <p>바바라 팔빈</p>
                        <p>💪🏻MVP Gym</p>
                    </div>
                    <div></div>
                    <p>494kg</p>
                    <p style="color: green;">▲4</p>
                </div>

                <div class="oneperson">
                    <p>5위</p>
                    <div>
                        <img src="https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg" alt="profile">
                    </div>
                    <div class="nameandwhere">
                        <p>바바라 팔빈</p>
                        <p>💪🏻MVP Gym</p>
                    </div>
                    <div></div>
                    <p>494kg</p>
                    <p style="color: green;">▲1</p>
                </div>

                <div class="oneperson">
                    <p>6위</p>
                    <div>
                        <img src="https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg" alt="profile">
                    </div>
                    <div class="nameandwhere">
                        <p>바바라 팔빈</p>
                        <p>💪🏻MVP Gym</p>
                    </div>
                    <div></div>
                    <p>494kg</p>
                    <p style="color: red;">▼2</p>
                </div>

                <div class="oneperson">
                    <p>7위</p>
                    <div>
                        <img src="https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg" alt="profile">
                    </div>
                    <div class="nameandwhere">
                        <p>바바라 팔빈</p>
                        <p>💪🏻MVP Gym</p>
                    </div>
                    <div></div>
                    <p>494kg</p>
                    <p style="color: red;">▼4</p>
                </div>

                <div class="oneperson">
                    <p>8위</p>
                    <div>
                        <img src="https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg" alt="profile">
                    </div>
                    <div class="nameandwhere">
                        <p>바바라 팔빈</p>
                        <p>💪🏻MVP Gym</p>
                    </div>
                    <div></div>
                    <p>494kg</p>
                    <p style="color: red;">▼4</p>
                </div>

                <div class="oneperson">
                    <p>9위</p>
                    <div>
                        <img src="https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg" alt="profile">
                    </div>
                    <div class="nameandwhere">
                        <p>바바라 팔빈</p>
                        <p>💪🏻MVP Gym</p>
                    </div>
                    <div></div>
                    <p>494kg</p>
                    <p style="color: red;">▼4</p>
                </div>

                <div class="oneperson">
                    <p>10위</p>
                    <div>
                        <img src="https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg" alt="profile">
                    </div>
                    <div class="nameandwhere">
                        <p>바바라 팔빈</p>
                        <p>💪🏻MVP Gym</p>
                    </div>
                    <div></div>
                    <p>494kg</p>
                    <p style="color: red;">▼4</p>
                </div>
            </div>
        </div>

        <div class="footer">
            <Footer />
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.countries.push(
                {
                    name: '대한민국',
                    code: 'KR',
                    lang: 'kor'
                }, {
                    name: 'United States',
                    code: 'US',
                    lang: 'eng'
                }, 
            )
        },
        data() {
            return {
                //bind selected option  to local variable identical to desired selected variable from ajax
                selected: 'World',
                //uncommenting below would select US initially
                //selected: 'US',
                //use ajax data in separate form to create v-for options
                countries: [
                    {
                        name: 'Please Select Your Country',
                        code: '',
                        lang: 'kor'
                    },                
                ]
            }
        },

        computed: {
            selectedName() {
                var self = this,
                    name = "";

                (this.countries || []).filter(country => {
                    if(country.code == self.selected) {
                        name = country.name
                        return;
                    }
                })
                return name;
            }
        }
    }
</script>

<style scoped>
    .rankmain {
        height: 100%;
        background-color: black;
        z-index: -1000;
    }   

    .rankers {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
    }

    .main {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        padding: 0;
    }

    .top { 
        width: 950px;
        display: flex; 
        justify-content: space-between; 
        padding-top: 30px;
    }

    .rest {
        width: 950px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        margin-top: 40px;
    }
    .oneperson {
        text-align: center;
        background-color: white;
        height: 80px;
        width: 800px;
        display: grid;
        grid-template-columns: 1fr 1fr 2fr 6fr 1fr 1fr;
        align-self: center;
        align-items: center;
        margin-top: 20px;
        border-radius: 12px;
        transition: transform .5s;
        cursor: pointer;
    }

    .oneperson:hover {
        transform: scale(1.05); 
    }

    .oneperson img {
        width: 50px;
        border-radius: 70%;
    }

    .nameandwhere p {
        margin: 0;
    }

    .rank1 {
        color: white;
        background-image: url(https://image.freepik.com/free-vector/stylish-black-and-gold-background-with-text-space_1017-24790.jpg);
        text-align: center;
        width: 220px;
        height: 420px;
        border-radius: 20px;
        clip-path: polygon(100% 0, 100% 85%, 50% 100%, 0 85%, 0% 0%);
        display: grid;
        grid-template-rows: 1fr 10fr 4fr 5fr;
        transition: transform .5s;
        cursor: pointer;
    }

    .rank1-wrap {
        transition: transform .5s;
        -moz-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;
        -webkit-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
    }

    .rank1-wrap:hover {
        filter: drop-shadow(0px 0px 20px #ffd621);
        -moz-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;
        -webkit-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
    }

    .rank1:hover {
        transform: scale(1.05); 
        
    }

    .rank2 {
        color: white;
        background-image: url(https://image.freepik.com/free-vector/abstract-silver-line-shadow-slash-on-black-with-blank-space-design-modern-luxury-background_33869-1997.jpg);
        text-align: center;
        width: 200px;
        height: 400px;
        border-radius: 20px;
        clip-path: polygon(100% 0, 100% 85%, 50% 100%, 0 85%, 0% 0%);
        display: grid;
        grid-template-rows: 1fr 10fr 4fr 5fr;
        transition: transform .5s;
        cursor: pointer;
    }

    .rank2:hover {
        transform: scale(1.05); 
    }

    .rank2-wrap {
        transition: transform .5s;
        -moz-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;
        -webkit-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
    }

    .rank2-wrap:hover {
        filter: drop-shadow(0px 0px 20px #a3a3a3);
        -moz-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;
        -webkit-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
    }

    .rank3 {
        color: white;
        background-image: url(https://media.istockphoto.com/vectors/black-and-gold-abstract-background-vector-id1165373979?k=6&m=1165373979&s=612x612&w=0&h=uy_UMdtRM1HOF4kng9-ipqMEslO-gjdaZMDOQAnV2AA=);
        text-align: center;
        width: 180px;
        height: 380px;
        border-radius: 20px;
        clip-path: polygon(100% 0, 100% 85%, 50% 100%, 0 85%, 0% 0%);
        display: grid;
        grid-template-rows: 1fr 10fr 4fr 5fr;
        transition: transform .5s;
        cursor: pointer;
    }

    .rank3-wrap {
        transition: transform .5s;
        -moz-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;
        -webkit-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
    }

    .rank3-wrap:hover {
        filter: drop-shadow(0px 0px 20px #6e4433);
        -moz-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;
        -webkit-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
    }

    .rank3:hover {
        transform: scale(1.05); 
    }

    .rank1 img {
        width: 140px;
        border-radius: 70%;
    }
    .rank2 img {
        width: 100px;
        border-radius: 70%;
    }
    .rank3 img {
        width: 100px;
        border-radius: 70%;
    }
    .toptier {
        width: 750px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 0 auto;
        margin-top: 50px;
    }

    .maintext {
        text-align: center;
        color: white;
    }
    .footer {
        margin-top: 40px;
    }

    .wheresearch {
        width: 950px;
        margin: 0 auto;
    }

    .countryselect {
        font-family: "Helvetica", Arial, sans-serif;
        margin: 1em auto;
        max-width: 500px;
    }

    .countryselect .input-select {
        position: relative;
        display: inline-block;
        width: 100%;
    }
    .countryselect .input-select label {
        display: inline-block;
        width: 100%;
        font-size: 0.75em;
        color:white;
    }
    .countryselect .input-select select {
        padding-right: 1.875em;
        cursor: pointer;
        color: #000;
        height: 40px;
        padding-bottom: 8px;
        border-radius: 2px;
        appearance: none;
        position: relative;
        background-color: #fff;
        color: #000;
        font-size: 100%;
        padding: 0.625em 0.5em;
        border: 1px solid #d2d2d2;
        width: 100%;
    }
    .countryselect span {
        padding-top: 1em;
    }
</style>