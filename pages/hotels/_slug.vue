<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 my-5">
                <h1>{{ hotels.header }}</h1>
               <!--<pre>{{ hotels.searchResults.results }}</pre>-->
            </div>
        </div>
        <div class="row">
            <div v-for="(hotel, i) in hotels.searchResults.results" :key="hotel.id" class="col-lg-12 card my-3 p-3">
                <h2>{{ hotel.name }}</h2>
                <h2>Rating: {{ hotel.starRating }}</h2>
                <p></p> {{ hotel.address.streetAddress }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        this.$store.dispatch("hideBigLoadingScreen");
    },
    async asyncData({params, $axios}){
        const options = {
            method: 'GET',
            url: 'https://hotels4.p.rapidapi.com/properties/list',
            params: {
                destinationId:params.slug,
                pageNumber: '1',
                pageSize: '25',
                checkIn: '2020-01-08',
                checkOut: '2020-01-15',
                adults1: '1',
                sortOrder: 'PRICE',
                locale: 'en_US',
                currency: 'USD'
            },
            headers: {
                'x-rapidapi-host': 'hotels4.p.rapidapi.com',
                'x-rapidapi-key': '1774d6f943msh6412fdb3646c73ep16bf57jsn247532849e44'
            }
        };

        var hotels  = await $axios.$request(options)

        var body = document.querySelector('body');
        body.style.overflowY = "auto";
        body.style.height = "auto";

        return {
           hotels:hotels.data.body
       }
    }
}
</script>