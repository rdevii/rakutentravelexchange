<template>
    <!-- TODO: Query hotel info by property code -->
    <el-card class="hotelForm">
      <h2>Hotel Details </h2>
        <el-input placeholder="Name"></el-input>
        <el-input placeholder="Country"></el-input>
        <el-input placeholder="Address"></el-input>
        <el-button> Save </el-button>
        <el-button> Reset </el-button>
    </el-card>
</template>

<style>
  .hotelForm {
    width: 500px;
    align: center;
    display: block;
  }

</style>

<script>

export default {
  props: ['propertyDetails'],
};

</script>
