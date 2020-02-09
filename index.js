Vue.component('workshops',{
	props:[],
	template:`
		<div>
			<div>
				<img v-bind:src="logo"><br>
				<a :style="styleDesc" :href="link"> {{ desc }} </a>
				<p>List of Workshops</p>
				<ul>
					<li v-for="(frame,index) in frameList" @mouseover="updateLogo(frame.frameLogo)">{{frame.frameName+ " ("+frame.frameCount																																			 + ") " }} <button v-on:click="incr(index)" :disabled="frame.frameCount>=10">Add participant</button><span v-if="frame.frameCount < 8"> - Available</span>  
				<span v-else-if="frame.frameCount >= 8 && frame.frameCount < 10"> - Filling out fast - save your seat</span>  
				<span v-else="frame.frameCount>=10"> - Sorry, we are in short of chairs ;-P</span> </li>
				 
				</ul>
				<p> Total No of participants {{totalParticipants}} </p>
				 																																																																																																																																																																																																											
			  </div>
		</div>
	
	`,
	data() {
		return {
			    styleDesc: {
			    color: 'red',
			    fontSize:'24px'
				},
			    desc: 'welcome to vue',
			    link: 'https://vuejs.org/v2/guide/',
			    like:true,
			    count:0,
			    logo:'./images/js.jpg',
			    feedback:[],
			    frameList:[
					{
					frameId:1,
					frameName:"Angular",
					frameCount:0,
					frameLogo:'./images/angular.png'
					},
					{
					frameId:2,
					frameName:"React",
					frameCount:0,
					frameLogo:'./images/react.png'
					},
					{
					frameId:3,
					frameName:"Vue",
					frameCount:0,
					frameLogo:'./images/vue.svg'
					}
				     ]
		}	

	},
	methods:
        {
          incr(fr) {
		this.frameList[fr].frameCount+=1;
	  },
	  decr() {
               if(this.count>0){
		this.count-=1;
		}
          },
	  updateLogo(frameLogo){
		this.logo=frameLogo;
	  }
	},
	computed:{
		totalParticipants(){
			return this.frameList.reduce((sum,frame) => {
				return sum+frame.frameCount
			},0)	
		}
  }
})


var app = new Vue({
  el: '#app',
  
  data: {
	name:null,
	review:null,
	reviewsList:[]
  },
  methods:{
	onSubmit(){
	  	let reviews = 	{
			name:this.name,
			review:this.review
		}
		this.reviewsList.push(reviews)
		this.name=null
		this.review=null
	},
	addReview(reviews){
		this.reviewsList.push(reviews)	
	},
	removeReview(index){
		this.reviewsList.splice(index,1)
	}
  }
  
})
