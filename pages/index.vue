<template>
  <div>
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
          <button   @click="viewState()" class="mt-4">View State</button>
        </div>
      </div>
      <div v-if="places" class="container">
        <div class="row">
        <div class="col-lg-12 mt-4">
          <h2>Select a region</h2>
        </div>
          <div v-for="(city, i) in places.suggestions[0].entities" :key="i" class="col-lg-3">
            <PlaceCard :placeTitle="city.name" :destinationID="destinationID" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '../components/hero.vue'
export default {
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
      this.$store.dispatch("updatePlaces", placesFromCityQuery)

    }
  },
  computed: {
    places(){
      return this.$store.getters.getPlaces
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
}

.hotel-search-form input.form-control{
  border-radius:0px;
}

button {
  background-color:rgb(102, 102, 255);
  border:none;
  padding:1rem 3rem;
  color:white;
}
</style>