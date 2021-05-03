<template>
    <div class="regimain">
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

        <section class="contents-main-first">
            <div class="contents-main-first-inside">
                <h3>체육관을 등록하세요!</h3>
                <h5>회원님들을 위한 새로운 시스템을 도입하세요.
                    <br>체육관을 웨이트랭크에 등록하고, 회원님들의 순위 경쟁을 통해 더욱 더 건강한 체육관을 만들어봅시다.
                    <br>월 3,300원으로 랭킹 시스템을 체육관에 적용하세요.
                </h5>
                <a href="#registration">체육관 등록</a>

            </div>
        </section>

        <section class="contents-main-second" id="registration">
            <div class="contents-main-second-inside">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group id="input-group-1" label="알게된 경로" label-for="input-1">
                        <b-form-select
                        id="input-1"
                        v-model="form.reason"
                        :options="reasons"
                        required
                        ></b-form-select>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="체육관 이름" label-for="input-2" description="상호명">
                        <b-form-input
                        id="input-2"
                        v-model="form.gymname"
                        placeholder=""
                        required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="회원 수" label-for="input-3">
                        <b-form-input
                        id="input-3"
                        v-model="form.howmany"
                        placeholder=""
                        required
                        ></b-form-input>명
                    </b-form-group>

                    <b-form-group id="input-group-4" label="이메일 주소" label-for="input-4" description="차후 연락 받으실 이메일 주소">
                        <b-form-input
                        id="input-4"
                        v-model="form.email"
                        type="email"
                        placeholder=""
                        required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-5" label="담당자 성함" label-for="input-5">
                        <b-form-input
                        id="input-5"
                        v-model="form.name"
                        placeholder=""
                        required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-6" label="담당자 연락처" label-for="input-6">
                        <b-form-input
                        id="input-6"
                        v-model="form.digits"
                        placeholder="전화번호"
                        required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-7" v-slot="{ ariaDescribedby }">
                        <b-form-checkbox-group
                        v-model="form.checked"
                        id="checkboxes-4"
                        :aria-describedby="ariaDescribedby"
                        required
                        >
                        <b-form-checkbox value="me" required>개인정보 수집 동의</b-form-checkbox>
                        <b-form-checkbox value="that" required>약관 동의</b-form-checkbox>
                        </b-form-checkbox-group>
                    </b-form-group>

                    <b-button type="submit" variant="primary">파트너쉽 맺기</b-button>
                </b-form>
            </div>
        </section>

        <div class="footer">
            <Footer />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                name: '',
                reason: null,
                checked: [],
                gymname:'',
                howmany: '',
                digits: ''
            },
            reasons: [
                { text: '선택해 주세요', value: null }, 
                '직접 웨이트랭크를 사용하고 있어요', 
                '회원님 중에 웨이트랭크 사용자가 있어요', 
                '광고를 통해 알게되었어요', 
                'SNS를 통해 알게되었어요(유튜브, 인스타그램, 페이스북, 등)'
            ],
            show: true
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.name = ''
            this.form.reason = null
            this.form.gymname =''
            this.form.howmany =''
            this.form.digits =''
            this.form.checked = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },
    }
}
</script>

<style scoped>
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

    .regimain {
        height: 100%;
        background-color: black;
        z-index: -1000;
    }  

    .contents-main-first {
        background-color: rgb(44, 44, 44);
        margin-top: 30px;
        height: 300px;
        display: flex;
        align-items: center;
    }

    .contents-main-first-inside {
        width: 950px;
        height: 220px;
        color: white;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .contents-main-first-inside h3 {
        font-weight: 600;
    }

    .contents-main-first-inside a {
        width: 150px;
        height: 50px;
        border: none;
        color: white;
        background-color: tomato;
        border-radius: 12px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.5s;
    }

    .contents-main-first-inside a:hover {
        text-decoration: none;
        background-color: rgb(255, 176, 162);
        color: rgb(0, 0, 0);
    }

    .contents-main-second {
        display: flex;
        align-items: center;
        height: 100vh;
        background-color: white;
    }

    .contents-main-second-inside {
        width: 550px;
        margin: 0 auto;
    }
</style>