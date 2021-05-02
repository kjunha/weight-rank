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
                <h1 v-if="selected=='Korea'">국내 TOP 10</h1>
                <h1 v-else-if="selected=='United States'">US TOP 10</h1>
                <h1 v-else-if="selected=='World'">World TOP 10</h1>
            </div>
            <div class="toptier" v-if="selected=='Korea'">
                <div class="rank2-wrap">
                    <div class="rank2">
                        <div></div>
                        <div>
                            <p>🥈</p>
                            <img :src="KoreaUsers[1].photo" alt="profile">
                        </div>
                        <div class="nameandwhere">
                            <p>{{KoreaUsers[1].name}}</p>
                            <p style="font-size:.7rem;">💪🏻{{KoreaUsers[1].belong}}</p>
                        </div>
                        <h5>{{KoreaUsers[1].sum}}kg</h5>
                        <h2>2</h2>
                    </div>
                </div>

                <div class="rank1-wrap">
                    <div class="rank1">
                        <div></div>
                        <div>
                            <p>🥇</p>
                            <img :src="KoreaUsers[0].photo" alt="profile">
                        </div>
                        <div class="nameandwhere">
                            <p>{{KoreaUsers[0].name}}</p>
                            <p style="font-size:.7rem;">💪🏻{{KoreaUsers[0].belong}}</p>
                        </div>
                        <h4>{{KoreaUsers[0].sum}}kg</h4>
                        <h1>1</h1>
                    </div>
                </div>
                <div class="rank3-wrap">
                    <div class="rank3">
                        <div></div>
                        <div>
                            <p>🥉</p>
                            <img :src="KoreaUsers[2].photo" alt="profile">
                        </div>
                        <div class="nameandwhere">
                            <p>{{KoreaUsers[2].name}}</p>
                            <p style="font-size:.7rem;">💪🏻{{KoreaUsers[2].belong}}</p>
                        </div>
                        <h5>{{KoreaUsers[2].sum}}kg</h5>
                        <h2>3</h2>
                    </div>
                </div>
            </div>

            <div class="toptier" v-else-if="selected=='United States'">
                <div class="rank2-wrap">
                    <div class="rank2">
                        <div></div>
                        <div>
                            <p>🥈</p>
                            <img :src="usaUsers[1].photo" alt="profile">
                        </div>
                        <div class="nameandwhere">
                            <p>{{usaUsers[1].name}}</p>
                            <p style="font-size:.7rem;">💪🏻{{usaUsers[1].belong}}</p>
                        </div>
                        <h5>{{usaUsers[1].sum}}kg</h5>
                        <h2>2</h2>
                    </div>
                </div>

                <div class="rank1-wrap">
                    <div class="rank1">
                        <div></div>
                        <div>
                            <p>🥇</p>
                            <img :src="usaUsers[0].photo" alt="profile">
                        </div>
                        <div class="nameandwhere">
                            <p>{{usaUsers[0].name}}</p>
                            <p style="font-size:.7rem;">💪🏻{{usaUsers[0].belong}}</p>
                        </div>
                        <h4>{{usaUsers[0].sum}}kg</h4>
                        <h1>1</h1>
                    </div>
                </div>
                <div class="rank3-wrap">
                    <div class="rank3">
                        <div></div>
                        <div>
                            <p>🥉</p>
                            <img :src="usaUsers[2].photo" alt="profile">
                        </div>
                        <div class="nameandwhere">
                            <p>{{usaUsers[2].name}}</p>
                            <p style="font-size:.7rem;">💪🏻{{usaUsers[2].belong}}</p>
                        </div>
                        <h5>{{usaUsers[2].sum}}kg</h5>
                        <h2>3</h2>
                    </div>
                </div>
            </div>

            <div class="toptier" v-else-if="selected=='World'">
                <div class="rank2-wrap">
                    <div class="rank2">
                        <div></div>
                        <div>
                            <p>🥈</p>
                            <img :src="orderedUsers[1].photo" alt="profile">
                        </div>
                        <div class="nameandwhere">
                            <p>{{orderedUsers[1].name}}</p>
                            <p style="font-size:.7rem;">💪🏻{{orderedUsers[1].belong}}</p>
                        </div>
                        <h5>{{orderedUsers[1].sum}}kg</h5>
                        <h2>2</h2>
                    </div>
                </div>

                <div class="rank1-wrap">
                    <div class="rank1">
                        <div></div>
                        <div>
                            <p>🥇</p>
                            <img :src="orderedUsers[0].photo" alt="profile">
                        </div>
                        <div class="nameandwhere">
                            <p>{{orderedUsers[0].name}}</p>
                            <p style="font-size:.7rem;">💪🏻{{orderedUsers[0].belong}}</p>
                        </div>
                        <h4>{{orderedUsers[0].sum}}kg</h4>
                        <h1>1</h1>
                    </div>
                </div>
                <div class="rank3-wrap">
                    <div class="rank3">
                        <div></div>
                        <div>
                            <p>🥉</p>
                            <img :src="orderedUsers[2].photo" alt="profile">
                        </div>
                        <div class="nameandwhere">
                            <p>{{orderedUsers[2].name}}</p>
                            <p style="font-size:.7rem;">💪🏻{{orderedUsers[2].belong}}</p>
                        </div>
                        <h5>{{orderedUsers[2].sum}}kg</h5>
                        <h2>3</h2>
                    </div>
                </div>
            </div>

            <div class="rest" v-if="selected=='Korea'">
                <div class="oneperson" v-for="(user, index) in KoreaUsers" v-bind:key="index">
                    <p>{{index+1}}위</p>
                    <div>
                        <img :src= "user.photo" alt="profile">
                    </div>
                    <div class="nameandwhere">
                        <p>{{ user.name }}</p>
                        <p style="font-size:.7rem;">💪🏻{{ user.belong }}</p>
                    </div>
                    <div></div>
                    <p>{{ user.sum }}kg</p>
                </div>
            </div>
            <div class="rest" v-else-if="selected=='United States'">
                <div class="oneperson" v-for="(user, index) in usaUsers" v-bind:key="index">
                    <p>{{index+1}}위</p>
                    <div>
                        <img :src= "user.photo" alt="profile">
                    </div>
                    <div class="nameandwhere">
                        <p>{{ user.name }}</p>
                        <p style="font-size:.7rem;">💪🏻{{ user.belong }}</p>
                    </div>
                    <div></div>
                    <p>{{ user.sum }}kg</p>
                </div>
            </div>
            <div class="rest" v-else-if="selected == 'World'">
                <div class="oneperson" v-for="index in 10" v-bind:key="index">
                    <p>{{index}}위</p>
                    <div>
                        <img :src= "orderedUsers[index].photo" alt="profile">
                    </div>
                    <div class="nameandwhere">
                        <p>{{ orderedUsers[index].name }}</p>
                        <p style="font-size:.7rem;">💪🏻{{ orderedUsers[index].belong }}</p>
                    </div>
                    <div></div>
                    <p>{{ orderedUsers[index].sum }}kg</p>
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
                    name: 'Korea',
                    code: 'KR',
                    lang: 'kor'
                }, {
                    name: 'United States',
                    code: 'US',
                    lang: 'eng'
                }, 
                {
                    name: 'World',
                    code: 'WD',
                    lang: 'eng'
                }
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
                ],

                //사용자 정보 더미 데이터
                users: [
                    {
                        name: '김정력',
                        belong: 'Professional Gym',
                        photo: 'https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg',
                        SQweight: 505,
                        DLweight: 680,
                        BPweight: 482,
                        nation: 'Korea'
                    },
                    {
                        name: '정력왕',
                        belong: 'Professional Gym',
                        photo: 'https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg',
                        SQweight: 508,
                        DLweight: 598,
                        BPweight: 410,
                        nation: 'Korea'
                    },
                    {
                        name: '박혁거세',
                        belong: 'Professional Gym',
                        photo: 'https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg',
                        SQweight: 508,
                        DLweight: 558,
                        BPweight: 440,
                        nation: 'Korea'
                    },
                    {
                        name: '장거근',
                        belong: 'Professional Gym',
                        photo: 'https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg',
                        SQweight: 528,
                        DLweight: 528,
                        BPweight: 520,
                        nation: 'Korea'
                    },
                    {
                        name: '임꺽정',
                        belong: 'Professional Gym',
                        photo: 'https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg',
                        SQweight: 608,
                        DLweight: 698,
                        BPweight: 610,
                        nation: 'Korea'
                    },
                    {
                        name: '존시나',
                        belong: 'Professional Gym',
                        photo: 'https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg',
                        SQweight: 508,
                        DLweight: 378,
                        BPweight: 380,
                        nation: 'Korea'
                    },
                    {
                        name: '홍길동',
                        belong: 'Professional Gym',
                        photo: 'https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg',
                        SQweight: 459,
                        DLweight: 408,
                        BPweight: 432,
                        nation: 'Korea'
                    },
                    {
                        name: '이순신',
                        belong: 'Professional Gym',
                        photo: 'https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg',
                        SQweight: 568,
                        DLweight: 518,
                        BPweight: 510,
                        nation: 'Korea'
                    },
                    {
                        name: '이산',
                        belong: 'Professional Gym',
                        photo: 'https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg',
                        SQweight: 408,
                        DLweight: 498,
                        BPweight: 410,
                        nation: 'Korea'
                    },
                    {
                        name: '심밧드',
                        belong: 'Professional Gym',
                        photo: 'https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg',
                        SQweight: 568,
                        DLweight: 458,
                        BPweight: 420,
                        nation: 'Korea'
                    },

                    //미국
                    {
                        name: 'Yael Shelbia',
                        belong: 'Professional Gym',
                        photo: 'https://lh3.googleusercontent.com/proxy/4c6kHjpilv7N1BJfD-WUOVoxsaa9tuK1SxEfx-fwT4lxOwUvI-C3qeXllazRD4Ha5lbXlkJ0RnLPN3DkuwjjWV67lEdyBqk96XwUARJDna1JEi6U173Ptq_oaHagXVjYdqS1lRfiEO5-0rp1li0nsVyFdRCJlEiRi6wjaUPL_k-TqYyMUh0r3OU1RMPa5HfpWdB2pC7MnoHFb5G7c-tWUnpkC7SJBxCSB_WBszit5PMMvFjTZOBxld7Jqniw2nrzKWbk5rYQmoHT9B7LG-SEhX8VROwiL-XJEQQB1U5WP37ixZ0efJV1jj7c8iLA_k9EF-3iuDokxF7S3-PcWHeIkgAGFDH7Pk_00KZNLwDnuIc7zpe2IukhK8qI-hXzwJs1jOUuQvrvoSNmyfIZy4cN-KKNE5McLJxvVTd885WK-ZfROlEPHo7oMwkZQkVJizk8sSP8HHTYaW5QUlF5CLstYvT63jCNmSvkrq8CS-BOwm-_Fvk',
                        SQweight: 708,
                        DLweight: 798,
                        BPweight: 710,
                        nation: 'United States'
                    },
                    {
                        name: 'Henrry Parwell',
                        belong: 'Professional Gym',
                        photo: 'https://whywetrain.com/wp-content/uploads/2017/12/1514142280_andrei-deiu-300x300.jpg',
                        SQweight: 703,
                        DLweight: 790,
                        BPweight: 700,
                        nation: 'United States'
                    },
                    {
                        name: 'Geregory Novich',
                        belong: 'Professional Gym',
                        photo: 'https://www.superprof.com/images/teachers/teacher-home-fitness-model-and-personal-trainer-give-advice-and-train-people-get-shape.jpg',
                        SQweight: 702,
                        DLweight: 791,
                        BPweight: 690,
                        nation: 'United States'
                    },
                    {
                        name: 'John Johnson',
                        belong: 'Professional Gym',
                        photo: 'https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg',
                        SQweight: 198,
                        DLweight: 191,
                        BPweight: 190,
                        nation: 'United States'
                    },
                    {
                        name: 'Michael Bundler',
                        belong: 'Professional Gym',
                        photo: 'https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg',
                        SQweight: 195,
                        DLweight: 185,
                        BPweight: 202,
                        nation: 'United States'
                    },
                    {
                        name: 'Ethan Dursteler',
                        belong: 'Professional Gym',
                        photo: 'https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg',
                        SQweight: 196,
                        DLweight: 199,
                        BPweight: 168,
                        nation: 'United States'
                    },
                    {
                        name: 'Ben Frank',
                        belong: 'Professional Gym',
                        photo: 'https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg',
                        SQweight: 210,
                        DLweight: 185,
                        BPweight: 165,
                        nation: 'United States'
                    },
                    {
                        name: 'DeWein Johnson',
                        belong: 'Professional Gym',
                        photo: 'https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg',
                        SQweight: 168,
                        DLweight: 136,
                        BPweight: 188,
                        nation: 'United States'
                    },
                    {
                        name: 'Kendrick Poster',
                        belong: 'Professional Gym',
                        photo: 'https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg',
                        SQweight: 200,
                        DLweight: 168,
                        BPweight: 194,
                        nation: 'United States'
                    },
                    {
                        name: 'Fredrick Doson',
                        belong: 'Professional Gym',
                        photo: 'https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg',
                        SQweight: 182,
                        DLweight: 184,
                        BPweight: 154,
                        nation: 'United States'
                    },
                ],
                
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
            },

            orderedUsers : function() {
                this.users.forEach(element => {
                    element.sum = element.SQweight+element.DLweight+element.BPweight;
                });
                return this.users.sort(function(a,b) { return b.sum - a.sum });
            },

            KoreaUsers : function() {
                return this.orderedUsers.filter(function(item) {
                    return item.nation == 'Korea';
                })
            },

            usaUsers : function() {
                return this.orderedUsers.filter(function(item) {
                    return item.nation == 'United States';
                })
            }
        },
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
        grid-template-rows: 1fr 9fr 3fr 2fr 4fr;
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
        grid-template-rows: 1fr 8fr 3fr 2fr 4fr;
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
        grid-template-rows: 1fr 8fr 3fr 2fr 4fr;
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
        width: 120px;
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