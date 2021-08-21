<template>
  <div>
  <LoadingScreen v-if="loadingHotels" />
    <Hero />
    <div class="hotel-search-form" action="">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 px-0">
            <h2>Find your hotel</h2>
          </div>
          <div class="col-lg-4 px-2"> 
            <input v-model="city" class="form-control my-3" type="text" placeholder="Enter city">
          </div>
          <div class="col-lg-4 px-2">
            <input v-model="checkInDate" class="form-control my-3" type="date" placeholder="Check-in">
          </div>
          <div class="col-lg-4 px-2">
            <input v-model="checkOutDate" class="form-control my-3" type="date" placeholder="Check-out">
          </div>
        </div>
        <div class="col-lg-12 px-0">
          <button v-if="city.length"  @click="getPlaces()" class="mt-4">Search</button>
          <button @click="viewState()" class="mt-4">View State</button>
        </div>
      </div>
      <div class="container">
        <div v-if="isLoading" class="row">
          <div class="col-12 text-center my-5">
            <p>Searching for hotels</p>
            <div class="spinner">
              <div class="rect1"></div>
              <div class="rect2"></div>
              <div class="rect3"></div>
              <div class="rect4"></div>
              <div class="rect5"></div>
            </div>
          </div>
        </div>
        <div v-if="places" class="row">
          <div class="col-lg-12 mt-4">
            <h2>Select a region</h2>
          </div>
          <div v-for="(city, i) in places.suggestions[0].entities" :key="i" class="col-lg-3 my-2">
            <PlaceCard :placeTitle="city.name" :destinationId="city.destinationId" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '../components/hero.vue';
import LoadingScreen from '../components/LoadingScreen.vue'
export default {
  components:{Hero, LoadingScreen},
  data(){
    return {
      city:'',
      checkInDate:'',
      checkOutDate:''
    }
  },
  methods: {
    searchHotels(){
      console.log("Searching Hotels")
      console.log(this.city, this.checkInDate, this.checkOutDate)
    },
    viewState(){
      console.log(this.$store.state.places)
    },
    async getPlaces(){

      this.$store.dispatch("showLoadingScreen")
      this.$store.dispatch("removePlaces")

      const options = {
        method: 'GET',
        url: 'https://hotels4.p.rapidapi.com/locations/search',
        params: {query: this.city, locale: 'en_US'},
        headers: {
          'x-rapidapi-host': 'hotels4.p.rapidapi.com',
          'x-rapidapi-key': '1774d6f943msh6412fdb3646c73ep16bf57jsn247532849e44'
        }
      };

      var placesFromCityQuery = await this.$axios.$request(options)
      console.log(placesFromCityQuery);

      this.$store.dispatch("removeLoadingScreen")
      this.$store.dispatch("updatePlaces", placesFromCityQuery)

    }
  },
  computed: {
    places(){
      return this.$store.getters.getPlaces
    },
    isLoading(){
      return this.$store.getters.isLoading
    },
     loadingHotels(){
       return this.$store.getters.bigLoadingScreen
     }
  }
}
</script>


<style>
body {
  background-color:rgb(252, 252, 252);
}

.hotel-search-form {
  padding:3rem;
  background-color:white;
  width:1200px;
  max-width:100%;
  margin:0 auto;
  margin-top:-100px;
  box-shadow: 0 0 63px rgba(14, 105, 158, 0.2)  ; 
	-webkit-box-shadow: 0 0 63px rgba(14, 105, 158, 0.2)  ; 
	-moz-box-shadow: 0 0 63px rgba(14, 105, 158, 0.2)  ; 
}

.hotel-search-form input.form-control{
  border-radius:0px;
  padding:1rem 2rem;
  border:none;
  background-color:#f4f4f4;
}

button {
  background-color:#008080;
  border:none;
  padding:1rem 3rem;
  color:white;
  border-radius:0px;
}


.spinner {
  margin: 100px auto;
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;
}
.spinner > div {
  background-color: rgb(0, 0, 0);
  height: 100%;
  width: 6px;
  display: inline-block;
  
  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;
}
.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.spinner .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
@-webkit-keyframes sk-stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
  20% { -webkit-transform: scaleY(1.0) }
}
@keyframes sk-stretchdelay {
  0%, 40%, 100% { 
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% { 
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
</style>