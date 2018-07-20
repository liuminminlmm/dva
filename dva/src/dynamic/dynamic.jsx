//用dynamic绑定的路由直接抛出一个对象，不用再写app.model({})
export default{
    namespace:'home',
    state:'hello',
    reducers:{
        updateDynamic(state,action){
            return state+action.payload
        }
    }
}