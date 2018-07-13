<template>
  <div>
   <ul class="ul">
     <router-link to="/UserList" >用户信息</router-link>
     <router-link to="/UserItem">用户利益</router-link>
   </ul>
   <router-view 
    @Add = "Add_obj"
   ></router-view>
  </div>
</template>

<script>
export default {
 data(){
  return {
    inputValue:"111",
    list:[]
  }
 },
 
methods:{
  Add_obj (data) {
   this.list = data
   //alert(this.list)
       
  }
}
 
}
</script>

<style>
.ul{
  width:100%;
  border-bottom:1px solid #e3e3e3;
  overflow:hidden;
}
.ul li{
    float:left;
    height:30px;
    line-height:30px;
    margin: 0 10px;
    list-style-type:none;
    cursor: pointer;
  }
</style>
