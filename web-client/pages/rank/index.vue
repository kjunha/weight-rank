<template>
  <div class='container'>
    <RankCategorySelector
      :record-type='recordType'
      @record-type-change='changeRecordType'
    />
    <RankTopThree :record-type='recordType' :rankers='top3' />
    <RankTopTen :record-type='recordType' :rankers='rankers' />
  </div>
</template>
<script>
export default {
  async asyncData({ app }) {
    const response = await app.$appApi.getRank();
    return {
      top3: response.data.data.slice(0, 3),
      rankers: response.data.data,
      currentPage: response.data.page,
      totalPage: response.data.lastPage
    };
  },
  data() {
    return {
      isMobile: this.$device.isMobile,
      recordType: 'overall'
    };
  },
  methods: {
    async changeRecordType(event) {
      this.recordType = event.type;
      const response = await this.$appApi.getRank(event);
      this.top3 = response.data.data.slice(0, 3);
      this.rankers = response.data.data;
      this.currentPage = response.data.page;
      this.totalPage = response.data.lastPage;
    }
  }
};
</script>
<style>
body {
  background-color: #1e2023;
  color: #ffffff;
}
</style>
