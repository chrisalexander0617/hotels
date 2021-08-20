export const state = () => ({
    places:'',
    hotels:false,
    city:false,
    checkInDate:false,
    checkOutDate:false,
    isLoading:''
})

export const mutations = {
    ADD_PLACES(state, data){
        state.places = data
    },
    ADD_LOADING_STATUS(state){
        state.isLoading = true
    },
    REMOVE_LOADING_STATUS(state){
        state.isLoading = false
    },
    CLEAR_PLACES(state){
        state.places = false
    }
}

export const actions = {
    updatePlaces(context, data){
        context.commit("ADD_PLACES", data)
    },
    removePlaces(context){
        context.commit("CLEAR_PLACES")
    },
    showLoadingScreen(context){
        context.commit("ADD_LOADING_STATUS")
    },
    removeLoadingScreen(context){
        context.commit("REMOVE_LOADING_STATUS")
    }
}

export const getters = {
    getPlaces(state){
        return state.places
    },
    isLoading(state){
        return state.isLoading
    }
}