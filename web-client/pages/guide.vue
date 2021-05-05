<template>
  <div class='container'>
    <RankCategorySelector :record-type='recordType' @record-type-change='changeRecordType' />
    <RankTopThree :record-type='recordType' />
    <RankTopTen />
  </div>
</template>
<script>
export default {
  async asyncData({ app }) {
    const data = await app.$appApi.connected();
    console.log('received', data.data['greeting']);
  },
  data() {
    return {
      testmsg: 'hello vue',
      isMobile: this.$device.isMobile,
      recordType: 'all'
    };
  },
  methods: {
    changeRecordType(event) {
      this.recordType = event.type;
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
