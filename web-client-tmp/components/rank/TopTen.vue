<template>
  <section class='row mb-5'>
    <div
      v-for='(ranker, index) in rankers'
      :key='index'
      class='record clearfix w-100 rounded-lg p-3 mb-3'
    >
      <span class='float-left'>
        <h3 class='d-inline-block h-100 mb-0 mr-3 align-middle'>
          {{ index + 1 }}위
        </h3>
        <img
          class='d-inline-block profile mr-3'
          :src='ranker.profile.user_profile'
        />
        <div class='d-inline-block h-100 align-middle'>
          <h4 class='m-0'>{{ ranker.profile.user_name }}</h4>
          <p class='m-0'>{{ ranker.profile.organization ? `💪 ${ranker.profile.organization}` : '-' }}</p>
        </div>
      </span>
      <span class='float-right h-100 pt-3'>
        <h3 class='mb-0 mr-3'>{{ ranker[recordType] }}Kg</h3>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TopTen',
  props: {
    recordType: String,
    rankers: Array
  },
  data() {
    return {
      isMobile: this.$device.isMobile
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
