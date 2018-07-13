<template>
  <ul>
  	<li @click="handleClick">{{content.name}}</li>

  </ul>
</template>
<script>

export default {
 props:["content","index"],
  methods:{
    handleClick(){
     this.$emit("delete",this.index)
    }
  }

}
</script>
<!---scoped 修饰符样式作用于-->
<style scoped>

</style>
