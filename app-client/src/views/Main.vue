<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Weight Rank</ion-title>
        <span class="core-inline-block core-align-vm profile-area" slot="end">
          <ion-text class="core-inline-block" color="medium">
            <small>Jane Cooper</small>
          </ion-text>
          <ion-avatar class="core-inline-block avatar">
            <ion-img
              src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
            ></ion-img>
          </ion-avatar>
        </span>
      </ion-toolbar>
      <div class="menu-tabs">
        <button
          :class="`menu-tab ${recordType === 'dl' ? 'active' : ''}`"
          @click="changeType('dl')"
        >
          Deadlift
        </button>
        <button
          :class="`menu-tab ${recordType === 'bp' ? 'active' : ''}`"
          @click="changeType('bp')"
        >
          Bench Press
        </button>
        <button
          :class="`menu-tab ${recordType === 'sq' ? 'active' : ''}`"
          @click="changeType('sq')"
        >
          Squad
        </button>
      </div>
    </ion-header>
    <ion-content class="ion-padding">
      <!--  성별 필터 버튼   -->
      <div class="context">
        <div class="core-align-hr">
          <ion-chip
            :outline="gen !== 'male'"
            color="secondary"
            class="filter-btn"
            @click="changeFilter('male')"
          ><small>Male</small>
          </ion-chip>
          <ion-chip
            :outline="gen !== 'female'"
            color="tertiary"
            class="filter-btn"
            @click="changeFilter('female')"
          >
            <small>Female</small></ion-chip
          >
          <ion-chip
            :outline="gen !== 'overall'"
            color="success"
            class="filter-btn"
            @click="changeFilter('overall')"
          >
            <small>Overall</small></ion-chip
          >
        </div>
      </div>
      <!--  탑 3 리스트 (카드뷰)   -->
      <div class="context">
        <div id="top3-cards">
          <ion-card v-for="(ranker, index) in topThree" :key="index">
            <ion-card-content class="card-wrapper">
              <div class="user-profile card-wrapper">
                <ion-thumbnail class="core-inline-block medal">
                  <ion-img :src="medalAsset[index]"></ion-img>
                </ion-thumbnail>
                <ion-avatar class="core-inline-block avatar" slot="start">
                  <ion-img :src="ranker.profile.profile"></ion-img>
                </ion-avatar>
              </div>
              
              <div class="user-info card-item">
                <small>{{ convertToRank(index + 1) }}</small>
                <h2>{{ ranker.profile.user_name }}</h2>
                <small>organization</small>
              </div>
              <div class="user-record">
                <h2>{{ ranker.rm_kg }} <small>RM(Kg)</small></h2>
              </div>
            </ion-card-content>
          </ion-card>
        </div>
        <!--  나머지 리스트뷰   -->
        <ion-list>
          <ion-item v-for="(ranker, index) in rankList" :key="index">
            <div class="rank-item-head" slot="start">
              <small>{{ convertToRank(index + 4) }}</small>
              <ion-avatar class="core-inline-block avatar" slot="start">
                <ion-img :src="ranker.profile.profile"></ion-img>
              </ion-avatar>
            </div>
            <ion-label>
              <div class="card-wrapper">
                <div class="user-info card-item">
                  <h2>{{ ranker.profile.user_name }}</h2>
                  <small>organization</small>
                </div>
                <div class="user-record">
                  <h2>{{ ranker.rm_kg }} <small>RM(Kg)</small></h2>
                </div>
              </div>
            </ion-label>
          </ion-item>
        </ion-list>
        <ion-infinite-scroll>
          <ion-infinite-scroll-content
            loading-spinner="bubbles"
            loading-text="Loading more data..."
          ></ion-infinite-scroll-content>
        </ion-infinite-scroll>
      </div>
      <!--  fab 아이콘 버튼  -->
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button activated>
          <ion-icon slot="icon-only" :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonText,
  IonAvatar,
  IonImg,
  IonThumbnail,
  IonChip,
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonFab,
  IonFabButton,
  IonIcon
} from "@ionic/vue";
import { add } from "ionicons/icons";

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonText,
    IonAvatar,
    IonImg,
    IonThumbnail,
    IonChip,
    IonCard,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonFab,
    IonFabButton,
    IonIcon
  },
  data() {
    return {
      add,
      recordType: this.$route.params.type,
      gen: this.$route.query.gen ?? "overall",
      dummyList: [],
      topThree: [],
      rankList: [],
      medalAsset: [
        "/assets/images/gold@2x.png",
        "/assets/images/silver@2x.png",
        "/assets/images/bronze@2x.png"
      ]
    };
  },
  methods: {
    changeType(type) {
      this.$router.replace(`/main/${type}`).then(() => {
        this.recordType = type;
      });
      this.reloadRank(type);
    },
    changeFilter(filter) {
      let currentPath = this.$route.path;
      this.$router.replace(`${currentPath}?gen=${filter}`).then(() => {
        this.gen = filter;
      });
    },
    convertToRank(index) {
      switch (index) {
        case 1:
          return "1st";
        case 2:
          return "2nd";
        case 3:
          return "3rd";
        default:
          return `${index}th`;
      }
    },
    reloadRank(type) {
      this.topThree = [];
      this.recordType = [];
      this.appApi.getList(type).then((res) => {
        console.log(res);
        let rankers = res.data;
        rankers.forEach((ranker, index) => {
          if (index < 3) {
            this.topThree.push(ranker);
          } else {
            this.rankList.push(ranker);
          }
        });
      });
    }
  },
  mounted() {
    this.appApi.getList(this.recordType).then((res) => {
      console.log(res);
      let rankers = res.data;
      rankers.forEach((ranker, index) => {
        if (index < 3) {
          this.topThree.push(ranker);
        } else {
          this.rankList.push(ranker);
        }
      });
    });
  }
};
</script>
<style>
.menu-tabs {
  display: flex;
  justify-content: space-evenly;
}

.menu-tab {
  flex: 1;
  background-color: transparent;
  color: #000;
  padding: 10px 0;
  text-align: center;
  margin: 0 12px;
}

.menu-tab {
  flex: 1;
  background-color: transparent;
  padding: 10px 0;
  text-align: center;
}

.menu-tab.active {
  border-bottom: 3px solid var(--ion-color-primary);
}

.avatar {
  width: 28px;
  height: 28px;
  margin: 0 12px;
}

.filter-btn {
  height: 25px;
}

ion-card {
  background-color: #ffffff;
}

.card-item {
  margin-right: 15px;
}

.card-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.rank-item-head {
  margin-right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.medal {
  width: 22px;
  height: 22px;
}
</style>
