<template>
  <div>{{ testmsg }}</div>
</template>
<script>
export default {
  async asyncData({ app }) {
    const data = await app.$appApi.connected();
    console.log('received',data.data['greeting']);
  },
  data() {
    return {
      testmsg: 'hello vue'
    };
  }
};
</script>
