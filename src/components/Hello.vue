<template>
  <div class="main">
  <h4>
    {{ count }} cats ({{n}} new)
  </h4>
    <div class="content">
      <cat :cat=cat v-for="cat in cats"></cat>
    </div>
  </div>
</template>

<script>
import Cat from './Cat';

export default {
  components: {
    cat: Cat,
  },
  data() {
    return {
      cats: [],
      count: 0,
      n: 0,
    };
  },
  created() {
    const url = 'https://www.torontohumanesociety.com/api/api.php?action=getAnimalsForSpeciesId&id=2&stageId=2';
    this.fetch(url);
    setInterval(() => {
      this.fetch(url);
    }, 16000);
  },
  methods: {
    fetch(url) {
      console.log('fetch...');
      this.$http.get(url).then((response) => {
        const cats = response.body.AdoptableSearchResult.XmlNode;
        this.cats = [];
        cats.forEach((object) => {
          if (object) this.cats.push(object[Object.keys(object)[0]]);
        });
        // track number of new cats
        if (this.count > 0 && this.cats.length > this.count) {
          this.new = this.cats.length - this.count;
        }
        this.count = this.cats.length;
      }, (err) => {
        console.log(err);
      });
    },
  },
};
</script>

<style scoped>
.main {
  max-width:100%;
  padding:16px;
}
.content {
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
}
</style>
