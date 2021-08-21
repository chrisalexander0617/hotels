<template>
    <div>
        <h1>Results</h1>
        <pre>{{ hotels }}</pre>
    </div>
</template>

<script>
export default {
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
       return {
           hotels:hotels
       }
    }
}
</script>