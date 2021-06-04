import axios from 'axios';

const STUDENT_API__URL = "https://springz.herokuapp.com/students";

class StudentService {

    getStudents(){
        return axios.get(STUDENT_API__URL);
    }

    createStudent(student){
        return axios.post(STUDENT_API__URL, student);
    }

    getStudentById(studentId){
        return axios.get(STUDENT_API__URL + '/' + studentId);
    }

    updateStudent(student, studentId){
        return axios.put(STUDENT_API__URL + '/' + studentId, student);
    }

    deleteStudent(studentId){
        return axios.delete(STUDENT_API__URL + '/' + studentId);
    }
}

export default new StudentService()