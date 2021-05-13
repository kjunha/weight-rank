<template>
  <section class="row px-5 mt-5 mb-5">
    <!--  desktop layout  -->
    <div v-if="!isMobile" class="px-9 w-100">
      <label for="country-d">지역</label>
      <div class="input-group mb-3">
        <select v-model="countryType" class="form-control" id="country-d">
          <option v-for="key in Object.keys(countries)" :key="key" :value="key">
            {{ countries[key] }}
          </option>
        </select>
      </div>
    </div>
    <!--  mobile layout  -->
    <div v-else class='w-100'>
      <label for="country-m">지역</label>
      <div class="input-group mb-3">
        <select v-model="countryType" class="form-control" id="country-m">
          <option v-for="key in Object.keys(countries)" :key="key" :value="key">
            {{ countries[key] }}
          </option>
        </select>
      </div>
    </div>
    <h2 class="text-center w-100 mb-3">{{ rankTitle[countryType] }}</h2>
    <div class="menu-tabs">
      <button
        :class="`menu-tab ${recordType === 'overall' ? 'active' : ''}`"
        @click="changeType('overall')"
      >
        Overall
      </button>
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
  </section>
</template>

<script>
export default {
  name: 'RegionSelector',
  props: {
    recordType: String,
  },
  emits: ['record-type-change'],
  data() {
    return {
      isMobile: this.$device.isMobile,
      countryType: 'ko',
      countries: {
        ko: '대한민국',
        us: 'United States',
        gl: '글로벌',
      },
      rankTitle: {
        ko: '국내 Top 10',
        us: 'North America Top 10',
        gl: '전세계 랭킹 Top 10',
      },
    };
  },
  methods: {
    changeType(type) {
      this.$emit('record-type-change', { type });
    },
  },
};
</script>

<style scoped>
.px-9 {
  padding: 0 7rem;
}

.menu-tabs {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}

.menu-tab {
  flex: 1;
  background-color: transparent;
  border: none;
  color: #fff;
  padding: 10px 0;
  text-align: center;
  border-bottom: 1px solid #ffffff;
}

.active {
  font-weight: bold;
  border-bottom: 3px solid #34aaf3 !important;
}
</style>
