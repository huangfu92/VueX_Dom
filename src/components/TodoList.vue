<template>
  <div>
     <div>
       <input type="text" v-model="inputValue"/>
       <input type="text" v-model="inputAge"/>
       <button @click="habdleSubmit">提交</button>
     </div>
     <ul>
      <todo-item 
        v-for="(item,index) of list"
        :key = "index"
        :content="item" 
        :index = "index"
        @delete = "habdleDele"
      >
        
      </todo-item> 
       
     </ul>  
  </div>
</template>

<script>
import TodoItem from "./TodoItem"
export default {
  components:{
  "todo-item" : TodoItem
 },
data(){
  return {
    inputValue:"111",
    inputAge:"0",
    list:[]
  }
 },
 computed:{
  
 },
 created(){
  //console.log(this.$parent)
  // alert(this.$parent.list)
 },

methods:{
  habdleSubmit () {
    //alert(data)
   this.list.push({
    name:this.inputValue,
    id:new Date().getTime(),
    age:this.inputAge
   })
   this.inputValue = ""
   this.inputAge = ""
   this.$emit("Add",this.list)
  },
  habdleDele (index) {
    
    this.list.splice(index,1)
  }
}

}
</script>

<style>

</style>
