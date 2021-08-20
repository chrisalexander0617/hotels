<template>
    <div>
        <nuxt-link to="/">
            <div class="card p-3 shadow-none">
                <h4>{{ placeTitle }}</h4>
                <p>{{ destinationID }}</p>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        placeTitle:{
            type:String, 
            required:true
        },
        destinationID: {
            type:String,
            required:true
        }
    }
}
</script>

<style>
.card {
    background:#eee;
    border-radius:0px;
}
</style>