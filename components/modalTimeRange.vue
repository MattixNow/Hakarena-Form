<template>
  <div id="temp" class="">
    <el-time-select
      class="timePicker"
      style="width: 9rem;"
      placeholder="Start time"
      v-model="startTime"
      :disabled="isActivePassed == 0"
      :picker-options="{
        start: '00:00',
        step: '00:15',
        end: '23:59'
      }"
    >
    </el-time-select>
    <el-time-select
      class="timePicker"
      :disabled="isActivePassed == 0"
      style="width: 9rem;"
      placeholder="End time"
      v-model="endTime"
      :picker-options="{
        start: '00:00',
        step: '00:15',
        end: '23:59',
        minTime: startTime
      }"
    >
    </el-time-select>
    <!-- {{ rangeTime }} -->
  </div>
</template>

<script>
export default {
  props: ["isActivePassed", "value"],
  name: "modalTimeRange",

  data() {
    return {
      startTime: this.value,
      endTime: this.value,
    };
  },
  computed: {
    rangeTime: function() {
        // `this` pointe sur l'instance vm
        return { startTime: this.startTime, endTime: this.endTime };
      }
  },
  watch: {
    // startTime(val) {
    //   this.rangeTime[0] = this.startTime
    // },
    // endTime(val) {
    //   this.rangeTime[1] = this.endTime
    //   // this.$emit("input", val);
    // },
    rangeTime(val) {
      this.$emit("input", val);
    }
  },
  methods: {
    // syncStartTime: el => {
    //   this.rangeTime = this.startTime
    // },
    // syncEndTime: el => {
    //   this.rangeTime =this.endTime;
    // },
    // addItem: event => {
    //   console.log(event);
    //   console.log("test");
    // }
  }
};
</script>

<style lang="scss">
// @import url('element-ui/lib/.css/theme-chalresetk');
@import url("element-ui/lib/theme-chalk/index.css");
#temp {
  margin-bottom: 0.25rem;
}
</style>
