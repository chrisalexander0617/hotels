<template>
    <div>
        <nuxt-link :to="{ path:'hotels/' + destinationId }">
            <div class="card p-3 shadow-none">
                <h4>{{ placeTitle }}</h4>
                <p>{{ destinationId }}</p>
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
        destinationId: {
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