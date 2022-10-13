<template>
  <div class="hotels" style="width:100%   padding-top: 50px;
  padding-right: 500px;
  padding-bottom: 50px;
  padding-left: 500px;">
    <el-row>
      <el-col
      :span="8" v-for="hotel in this.displayHotels()" :key="hotel"
      class="card">
        <hotel-card
          :name="hotel.property.name"
          :country="hotel.property.location.country"
          :imageURL="hotel.property.heroImage.url"
          :score="hotel.property.reviews.summary.score"
          :propertyCode="hotel.property.propertyCode"
        ></hotel-card>
      </el-col>
    </el-row>

    <!-- 8. Display the data with a structured table in following columns -->
    <!-- element-ui is ready for use -->
    <!-- property.name | property.location.country | property.reviews.summary.score -->
    <!-- 9. Do a simple pagination of 5 per page-->
    <!-- 10. Hide the entry without country and/or score-->
  </div>
</template>

<style>
  .card {
    padding: 5px;
  }
</style>

<script>

export default {
  props: ['hotels', 'pageNum', 'pageSize'],
  methods: {
    displayHotels() {
      const currHotels = this.hotels.filter((hotel) => hotel?.property?.location?.country
       && hotel?.property?.reviews?.summary?.score);

      return currHotels.slice(this.pageSize * this.pageNum - this.pageSize,
        this.pageSize * this.pageNum);
    },
  },
};

</script>
