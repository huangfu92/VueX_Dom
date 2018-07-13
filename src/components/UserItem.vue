<template>
  <div>
  	
	<span>这是用户利益</span>
	<span>{{this.$parent.list}}</span>
  </div>
</template>

<script>

export default {
 computed:{
  list(){
    let a = this.$parent.list
    return a
  }
 },
 created(){
  console.log(this.$parent.list)
  // alert(this.$parent.list)
 },
}
</script>
<!---scoped 修饰符样式作用于-->
<style scoped>

</style>
