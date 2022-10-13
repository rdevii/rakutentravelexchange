<template>
  <div class="hotels">
    <hotel-card-list
      :hotels="this.hotels"
      :pageNum="this.pageNum"
      :pageSize="this.pageSize"
    > </hotel-card-list>
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="handlePageChange"
      hide-on-single-page
      :total="this.hotels.length"
      :size="this.pageSize"
      style="position: relative; right: 0px;">
    </el-pagination>
    <!-- 8. Display the data with a structured table in following columns -->
    <!-- element-ui is ready for use -->
    <!-- property.name | property.location.country | property.reviews.summary.score -->
    <!-- 9. Do a simple pagination of 5 per page-->
    <!-- 10. Hide the entry without country and/or score-->
  </div>
</template>

<script>
// import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  data() {
    return {
      hotels: [],
      currView: [],
      pageNum: 1,
      pageSize: 5,
    };
  },
  methods: {
    displayHotels() {
      const currHotels = this.hotels.filter((hotel) => hotel?.property?.location?.country
       && hotel?.property?.reviews?.summary?.score);

      return currHotels.slice(this.pageSize * this.pageNum - this.pageSize,
        this.pageSize * this.pageNum);
    },
    handlePageChange(page) {
      this.pageNum = page;
    },
  },
  mounted() {
    const api = axios.create({
      baseURL: 'http://localhost:3000/api',
    });

    api.get('/fromSource')
      .then((res) => {
        this.hotels = res?.data?.outlets?.availability?.results;
      });
  },
};

</script>
