<template>
    <el-card :body-style="{ padding: '5px', margin: '5px', height: '200px'}">
      <img v-bind:src="imageURL" class="image">
      <div style="padding: 10px;">
        <span>{{name}}</span>
        <span>({{country}})</span><br>
        <div class="bottom clearfix">
          <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            class="rating"
            score-template="Trust score: {value}%">
          </el-rate>
          <router-link
            :to="{ name: 'Hotel', params: { propertyCode: this.propertyCode }}"
            class="button"
          >See Details</router-link>
        </div>
      </div>
    </el-card>
</template>

<style>
  .bottom {
    margin-top: 13px;
    line-height: 5px;
  }

  .button {
    padding: 10px;
    float: right;
  }

  .rating {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>

<script>

export default {
  data() {
    return { value: this.score / 20 };
  },
  props: ['name', 'country', 'imageURL', 'score', 'propertyCode'],
  methods: {
    getPropertyLink() {
      return `/hotel/${this.propertyCode}`;
    },
  },
};

</script>
