import { getClassTeacher, getTeacherDetail } from '../../service/getData'
export default{
    teacherList({commit, state}) {
		let params = {};
		params.class_id = this.getters.getEqInfo.class_id;
		params.pageSize = 1;
		return getClassTeacher(params).then((response) => {
			commit(TYPE.TEACHER_LIST_SUCCESS, response.data);
			return response;
		}, (error) => {
			commit(TYPE.TEACHER_LIST_FAILURE)
		})
	},
	teacherDetail({commit,state},teacherId){
        let params = {};
        params.class_id = this.getters.getEqInfo.class_id;
        params.user_id = teacherId;
		getTeacherDetail(params).then((response)=>{
			commit(TYPE.TEACHER_DETAIL_SUCCESS, response.data)
		},(error) => {
			commit(TYPE.TEACHER_DETAIL_FAILURE)
		})
	}
}