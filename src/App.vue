<template>
 <div>
 	 <HomeHeader/>

 	<FoterHeader/>
 	
 </div>
   
      
   
</template>

<script>
import HomeHeader from './components/Headercomp.vue'
import FoterHeader from './components/Footer.vue'

export default {
  name: 'App',
components: {
    HomeHeader,
    FoterHeader
    
  },
  data: () => ({
    //
  }),
}
</script>
