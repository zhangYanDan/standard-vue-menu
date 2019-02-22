import * as TYPE from './type'
export default{
    [TYPE.TEACHER_LIST_SUCCESS] (state, honors) {
		state.teachers = honors;
	},
	[TYPE.TEACHER_DETAIL_SUCCESS](state, detail){
		state.teacherDetail = detail;
	},
	[TYPE.TEACHER_LIST_FAILURE] (state) {

	}
}