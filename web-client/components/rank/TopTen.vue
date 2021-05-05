<template>
  <section class='row mb-5'>
    <div v-for='(ranker, index) in rankers' :key='index' class='record clearfix w-100 rounded-lg p-3 mb-3'>
      <span class='float-left'>
        <h3 class='d-inline-block h-100 mb-0 mr-3 align-middle'>1위</h3>
        <img class='d-inline-block profile mr-3'
             src='https://i.pinimg.com/564x/8f/c2/1a/8fc21a37378c9f32226a61f89532a7ad.jpg'>
        <div class='d-inline-block h-100 align-middle'>
          <h4 class='m-0'>user name</h4>
          <p class='m-0'>💪🏻 hello gym</p>
        </div>
      </span>
      <span class='float-right h-100 pt-3'>
        <h3 class='mb-0 mr-3'>1234kg</h3>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TopTen',
  data() {
    return {
      isMobile: this.$device.isMobile,
      rankers: [
        {
          rank: 4,
          name: 'Yael Shelbia',
          profile_img: 'https://t1.daumcdn.net/liveboard/kinolights/dd178713745444ac8f51ea70402a016a.jpg',
          SQweight: 708,
          DLweight: 798,
          BPweight: 710,
          nation: 'United States'
        },
        {
          rank: 5,
          name: 'Henrry Parwell',
          belong: 'Professional Gym',
          profile_img: 'https://whywetrain.com/wp-content/uploads/2017/12/1514142280_andrei-deiu-300x300.jpg',
          SQweight: 703,
          DLweight: 790,
          BPweight: 700,
          nation: 'United States'
        },
        {
          rank: 6,
          name: 'Geregory Novich',
          belong: 'Professional Gym',
          profile_img: 'https://www.superprof.com/images/teachers/teacher-home-fitness-model-and-personal-trainer-give-advice-and-train-people-get-shape.jpg',
          SQweight: 702,
          DLweight: 791,
          BPweight: 690,
          nation: 'United States'
        }
      ]
    };
  }
};
</script>

<style scoped>
.record {
  background-color: #ffffff;
  color: #383a3e;
  box-shadow: 2px 2px 8px #9d9fa6;
}

.profile {
  width: 65px;
  height: 65px;
  border-radius: 70%;
}
</style>
