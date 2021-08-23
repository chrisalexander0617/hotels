<template>
    <client-only>
        <button class="text-left shadow w-100 my-3" style="background:none;" @click="loadHotelsForRegion">
            <nuxt-link :to="{ path:'hotels/' + destinationId }">
                <div class="card  text-left shadow-none" style="background:none;" >
                    <h5 class="text-dark text-left h6">{{ placeTitle }}</h5>
                </div>
            </nuxt-link>
        </button>
    </client-only>
</template>

<script>
export default {
    props: {
        placeTitle:{
            type:String, 
            required:true
        },
        destinationId: {
            type:String,
            required:true
        }
    },
    methods:{
        loadHotelsForRegion(){
            this.$store.dispatch("showBigLoadingScreen");
            var body = document.querySelector('body');
            var hotelSearchForm = document.querySelector('.hotel-search-form');
            hotelSearchForm.style.display = 'none';
            body.style.overflowY = "hidden";
            body.style.height = "100vh";
        }
    }
}
</script>

<style>
.card {
    background:#eee;
    border-radius:0px;
    text-align:left;
}
</style>