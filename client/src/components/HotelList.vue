<template>
  <div class="hotels" style="width:50%   padding-top: 50px;
  padding-right: 500px;
  padding-bottom: 50px;
  padding-left: 500px;">
  <!-- TODO: Add button which can toggle card view / list view -->
    <el-table
      :data="this.displayHotels()"
      stripe
      style="width: 100%">
      <el-table-column
        prop="property.name"
        label="Name"
        width="500">
      </el-table-column>
      <el-table-column
        prop="property.location.country"
        label="Country"
        width="180">
      </el-table-column>
      <el-table-column
        prop="property.reviews.summary.score"
        label="Score">
      </el-table-column>
    </el-table>

    <!-- 8. Display the data with a structured table in following columns -->
    <!-- element-ui is ready for use -->
    <!-- property.name | property.location.country | property.reviews.summary.score -->
    <!-- 9. Do a simple pagination of 5 per page-->
    <!-- 10. Hide the entry without country and/or score-->
  </div>
</template>

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
