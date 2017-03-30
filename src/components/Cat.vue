<template>
  <div class="cat">
    <div class="info">
    <b>{{cat.Name}}</b><br>
    {{cat.Sex}}<br>
    {{cat.PrimaryBreed}} {{cat.SecondaryBreed}}<br>
    {{cat.Sublocation}}
    <br>
    {{age}} ({{cat.AgeGroup}})
    </div>
    <div class="img">
      <img :src="cat.Photo">
    </div>
  </div>
</template>

<script>
export default {
  props: ['cat'],
  data() {
    return {};
  },
  created() {

  },
  computed: {
    age() {
      return `${Math.floor(this.cat.Age / 12)}y ${this.cat.Age % 12}m `;
    },
  },
};
</script>

<style scoped>
.cat {
  padding:8px;
  background:#fff;
  display:flex;
  justify-content:space-between;
}
.info {
  min-width:33%;
}
</style>
