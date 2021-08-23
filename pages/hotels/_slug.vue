<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 my-5">
                <h1 class="font-weight-bold text-dark">{{ hotels.header }}</h1>
              <!--<pre>{{ hotels }}</pre>-->
            </div>
        </div>
        <div class="row">
            <div v-for="(hotel, i) in hotels.searchResults.results" :key="hotel.id" class="col-lg-4  my-3 p-3">
            <div class="card bg-light p-0 shadow-none">
                <img class="card-img-top img-fluid mb-4"  :src="hotel.optimizedThumbUrls.srpDesktop" :alt="hotel.name" />
                <h2 class="text-dark h4">{{ hotel.name }}</h2>
                <p class="brand-color">{{ hotel.address.streetAddress }}</p>
                <!--<p  v-if="hotel.guestReviews.badge === 'good'" class="text-muted">People love it here!</p>-->
                <!--<h4>Rating: {{ hotel.guestReviews.rating }}</h4>
                <h4>Total Reviews: {{ hotel.guestReviews.total }}</h4>
                <h4>Overall Rating: {{ hotel.guestReviews.badgeText }}</h4>-->
                <h3 class="h5 font-weight-bold text-dark">{{hotel.ratePlan.price.current}}<span class="text-muted font-weight-light">/ night</span></h3></h3>
                <!--
                <div class=""  v-for="(landmark, i) in hotel.landmarks" :key="i">
                    <p class="text-muted">{{landmark.distance}} miles from {{landmark.label}}</p>
                </div>
                -->
            </div>
              
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

<style>
.brand-color {
    color:#0037FF;
}
</style>