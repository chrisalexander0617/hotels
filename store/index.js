export const state = () => ({
    places:false,
    hotels:false,
    city:false,
    checkInDate:false,
    checkOutDate:false
})

export const mutations = {
    ADD_PLACES(state, data){
        state.places = data
    }
}

export const actions = {
    updatePlaces(context, data){
        context.commit("ADD_PLACES", data)
    }
}

export const getters = {
    getPlaces(state){
        return state.places
    }
}