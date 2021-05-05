<template>
  <section class='row mb-5'>
    <!--  desktop layout    -->
    <div v-if='!isMobile' class='top-tier d-flex w-100'>
      <div v-for='(index) in [0,1,2]' :key='index' class='mx-5'>
        <!--   Rank #1   -->
        <div v-if='index === 1' class='wrap rank1-wrap order-2'>
          <div class='rank rank1 text-center'>
            <h4 class='my-3'>🥇</h4>
            <img class='portrait mx-auto d-block mt-5 mb-3'
                 :src='getRanker(index).profile_img' alt='profile'>
            <h5><strong>{{ getRanker(index).name }}</strong></h5>
            <p style='font-size:10pt;'>{{ getRanker(index).belong ? `💪 ${getRanker(index).belong}` : '-' }}</p>
            <h4>{{ getRanker(index).BPweight + ' kg' }}</h4>
            <h2>1<small>st</small></h2>
          </div>
        </div>
        <!--   Rank #2   -->
        <div v-else :class='`wrap rank2-wrap order-${index + 1}`'>
          <div :class='`rank rank${getRanker(index).rank} text-center`'>
            <h5 class='my-3'>{{ getRanker(index).rank === 2 ? '🥈' : '🥉' }}</h5>
            <img class='portrait mx-auto d-block mt-5 mb-3'
                 :src='getRanker(index).profile_img' alt='profile'>
            <h5><strong>{{ getRanker(index).name }}</strong></h5>
            <p style='font-size:10pt;'>{{ getRanker(index).belong ? `💪 ${getRanker(index).belong}` : '-' }}</p>
            <h5>{{ getRanker(index).BPweight + ' kg' }}</h5>
            <h3>{{ getRanker(index).rank }}<small>{{ getRanker(index).rank === 2 ? 'nd' : 'rd' }}</small></h3>
          </div>
        </div>
      </div>
    </div>
    <!--  mobile layout    -->
    <div v-else class='top-tier mobile d-flex w-100'>
      <div v-for='(index) in [0,1,2]' :key='index'>
        <!--   Rank #1   -->
        <div v-if='index === 1' class='wrap rank1-wrap order-2'>
          <div class='rank rank1 text-center'>
            <h4 class='mt-1'>🥇</h4>
            <img class='portrait mx-auto d-block my-3'
                 :src='getRanker(index).profile_img' alt='profile'>
            <p class='m-0 name'><strong>{{ getRanker(index).name }}</strong></p>
            <p class='m-0' style='font-size:8pt;'>{{ getRanker(index).belong ? `💪 ${getRanker(index).belong}` : '-'
              }}</p>
            <h6>{{ getRanker(index).BPweight + ' kg' }}</h6>
          </div>
        </div>
        <!--   Rank #2   -->
        <div v-else :class='`wrap rank2-wrap order-${index + 1}`'>
          <div :class='`rank rank${getRanker(index).rank} text-center`'>
            <h4 class='mt-1'>{{ getRanker(index).rank === 2 ? '🥈' : '🥉' }}</h4>
            <img class='portrait mx-auto d-block my-3'
                 :src='getRanker(index).profile_img' alt='profile'>
            <p class='m-0 name'><strong>{{ getRanker(index).name }}</strong></p>
            <p class='m-0' style='font-size:8pt;'>{{ getRanker(index).belong ? `💪 ${getRanker(index).belong}` : '-'
              }}</p>
            <h6>{{ getRanker(index).BPweight + ' kg' }}</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TopThree',
  props: {
    recordType: String
  },
  data() {
    return {
      isMobile: this.$device.isMobile,
      rankers: [
        {
          rank: 1,
          name: 'Yael Shelbia',
          profile_img: 'https://t1.daumcdn.net/liveboard/kinolights/dd178713745444ac8f51ea70402a016a.jpg',
          SQweight: 708,
          DLweight: 798,
          BPweight: 710,
          nation: 'United States'
        },
        {
          rank: 2,
          name: 'Henrry Parwell',
          belong: 'Professional Gym',
          profile_img: 'https://whywetrain.com/wp-content/uploads/2017/12/1514142280_andrei-deiu-300x300.jpg',
          SQweight: 703,
          DLweight: 790,
          BPweight: 700,
          nation: 'United States'
        },
        {
          rank: 3,
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
  },
  methods: {
    getRanker(index) {
      if (index === 0) {
        return this.rankers[1];
      } else if (index === 1) {
        return this.rankers[0];
      } else {
        return this.rankers[2];
      }
    }
  }
};
</script>
<style scoped>
.top-tier {
  display: flex;
  justify-content: center;
}

.rank {
  color: white;
  padding-top: 1px;
  cursor: pointer;
  border-radius: 20px;
  clip-path: polygon(100% 0, 100% 85%, 50% 100%, 0 85%, 0% 0%);
}

.wrap {
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s;
}

.wrap:hover {
  transform: scale(1.05);
}

.portrait {
  width: 120px;
  height: 120px;
  border-radius: 70%;
}

.rank1 {
  background-image: url(https://image.freepik.com/free-vector/stylish-black-and-gold-background-with-text-space_1017-24790.jpg);
  width: 250px;
  height: 440px;
}

.rank2 {
  background-image: url(https://image.freepik.com/free-vector/abstract-silver-line-shadow-slash-on-black-with-blank-space-design-modern-luxury-background_33869-1997.jpg);
  width: 220px;
  height: 400px;
}

.rank3 {
  background-image: url(https://media.istockphoto.com/vectors/black-and-gold-abstract-background-vector-id1165373979?k=6&m=1165373979&s=612x612&w=0&h=uy_UMdtRM1HOF4kng9-ipqMEslO-gjdaZMDOQAnV2AA=);
  width: 220px;
  height: 400px;
}


@media (max-width: 750px) {
  .top-tier {
    display: flex;
    justify-content: space-around;
  }

  .name {
    line-height: 1;
  }

  .portrait {
    width: 45px;
    height: 45px;
    border-radius: 70%;
  }

  .rank1 {
    width: 120px;
    height: 210px;
  }

  .rank2 {
    width: 110px;
    height: 200px;
  }

  .rank3 {
    width: 110px;
    height: 200px;
  }
}

.rank1-wrap:hover {
  filter: drop-shadow(0px 0px 20px #ffd621);
}

.rank2-wrap:hover {
  filter: drop-shadow(0px 0px 20px #a3a3a3);
}

.rank3-wrap:hover {
  filter: drop-shadow(0px 0px 20px #6e4433);
}
</style>
