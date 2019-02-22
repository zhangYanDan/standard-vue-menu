import TYPE from './mutationsType'
export default{
    [TYPE.SUCCESS](state,data){
        state.userinfo=data;
    }
}