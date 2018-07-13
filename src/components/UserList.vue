<template>
  <div>
	<span>用户列表</span>
	<!-- <span>{{this.$parent.list}}</span> -->
	<table border="1" style="width:100%">
	  <thead>
	  	<tr>
	  		<th>ID</th>
	  		<th>姓名</th>
	  		<th>年龄</th>
	  		<th>操作</th>
	  	</tr>		
	  </thead>
	  <tbody>
	  	<tr v-for="list in this.$parent.list" >
	  		<td>{{list.id}}</td>
	  		<td>{{list.name}}</td>
	  		<td>{{list.age}}</td>
	  		<td>
		  		<span @click="modify(list.id)" >编辑</span>
		  		<span @click="modifyDele(list.id)">删除</span>
	  		</td>
	  	</tr>
	  </tbody>	

	</table>
	<div class="modify" v-if="ishide">
		<input type="text" v-model="names"/>
		<input type="text" v-model="ages"/>
		<button @click = "modifySubmit(id)">提交</button>
	</div>
  </div>
</template>

<script>

export default {
	
 computed:{
  // list(){
  //   let a = this.$parent.list
  //   return a
  // }
 },
 data(){
	return {
		ishide:false,
		names:"",
		ages:"",
		id:""
	}
 },
 created(){
  //console.log(this.$parent.list)
  // alert(this.$parent.list)
 },
 methods:{
 	modify(id){
 		var _this = this;
 		this.$parent.list.forEach(function(k,v){
 			
 			if(k.id==id){
 				  _this.names = k.name
 				  _this.ages = k.age
 				  _this.id = k.id
 				  _this.ishide = true
 			}
 		})
 	},
 	modifySubmit(id){
 		var _this = this;
 		this.$parent.list.forEach(function(k,v){
 			if(k.id==id){
 				  k.name = _this.names 
 				  k.age = _this.ages 
 				  k.id = _this.id
 				  _this.ishide = false
 			}
 		})
 	},
 	modifyDele(id){
 		var _this = this.$parent.list;
 		this.$parent.list.forEach(function(k,v){
 			
 			if(k.id==id){
 				 _this.splice(v,1)
 			}
 		})
 	}
 }
}
</script>
<!---scoped 修饰符样式作用于-->
<style scoped>
.modify{
	position: fixed;
	top:0;
	left:0;
	right:0;
	bottom:0;
	background: rgba(0,0,0,0.5)
}
table tr td span{
	display: block;
	width:50%;
	text-align:center;
	float:left;
	cursor: pointer;
}
</style>
