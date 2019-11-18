<template>
<div>

  <el-select v-model="inputVal" filterable placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
       placeholder="Un sport, un hobbie, ...">
    </el-option>
  </el-select>
  <!-- {{inputVal}} -->
</div>
</template>

<script>

export default {
    props :['value'],
    name:'sportPicker',
    data() {
      return {
          inputVal: this.value,
        options: [{
          value: 'Football',
          label: 'Football ⚽'
        },
         {
          value: 'Basketball',
          label: 'Basketball 🏀'
        }, 
         {
          value: 'Tennis de table',
          label: 'Tennis de table'
        }, 
        {
          value: 'Volley',
          label: 'Volley 🏐'
        }
        ],
      }
    },
     watch: {
    inputVal(val) {
      this.$emit('input', val);
    }
  },


    methods: {
        addItem: (event) => {
            console.log($event.target.value)
            console.log('test')
        }, warn: function (message, event) {
    // now we have access to the native event
    if (event) event.preventDefault()
    alert(message)
  }
    }
  }
</script>

<style>

</style>