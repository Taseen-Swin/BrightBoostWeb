import axios from "axios";

const baseURL = "http://localhost:8000";

export default class ApiService {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL,
        });
    }

    async getRequest(path) {
        try {
            const response = await this.axiosInstance.get(path);
            return { data: response.data, status: response.status };
        } catch (error) {
            throw error;
        }
    }

    async postRequest(path, body) {
        try {
            const response = await this.axiosInstance.post(path, body);
            return { data: response.data, status: response.status };
        } catch (error) {
            throw error;
        }
    }

    async putRequest(path, body) {
        try {
            const response = await this.axiosInstance.put(path, body);
            return { data: response.data, status: response.status };
        } catch (error) {
            throw error;
        }
    }

    async deleteRequest(path) {
        try {
            const response = await this.axiosInstance.delete(path);
            return { data: response.data, status: response.status };
        } catch (error) {
            throw error;
        }
    }

    async studentLogin(email, password) {
        const path = '/student/login';
        const body = { email, password };

        try {
            const { data, status } = await this.postRequest(path, body);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async adminLogin(email, password) {
        const path = '/admin/login';
        const body = { email, password };

        try {
            const { data, status } = await this.postRequest(path, body);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }
    async tutorLogin(email, password) {
        const path = '/tutor/login';
        const body = { email, password };

        try {
            const { data, status } = await this.postRequest(path, body);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }
    async studentRegistration(email, password, name) {
        const path = '/student/signup';
        const body = { email, password, name };

        try {
            const { data, status } = await this.postRequest(path, body);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async getStudentClasses(studentID) {
        const path = `/student/${studentID}/classes`;

        try {
            const { data, status } = await this.getRequest(path);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async getStudentClass(sessionID) {
        const path = `/student/${sessionID}/class`;

        try {
            const { data, status } = await this.getRequest(path);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async getStudentAttendance(studentID, sessionID) {
        const path = `/student/${studentID}/attendence/${sessionID}`;

        try {
            const { data, status } = await this.getRequest(path);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async markStudentAttendance(studentID, sessionID) {
        const path = `/student/${studentID}/attendence/${sessionID}`;

        try {
            const { data, status } = await this.postRequest(path, null);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async postStudentQuestion(sessionID, studentID, question) {
        const path = `/student/QnA/${sessionID}`;
        const body = { question, studentID }

        try {
            const { data, status } = await this.postRequest(path, body);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async getStudentAnswerList(sessionID) {
        const path = `/student/QnA/${sessionID}`;

        try {
            const { data, status } = await this.getRequest(path);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async getTimetable(userID,type) {
        const path = `${type}/timetable/${userID}`;

        try {
            const { data, status } = await this.getRequest(path);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }


    async getStudentEnrollments(studentID) {

        const path = `/student/${studentID}/enrolements`

        try {
            const { data, status } = await this.getRequest(path);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async enrollStudentInClass(studentID, courseID) {
        const path = `/student/${studentID}/enrolements`;
        const body = { courseID };

        try {
            const { data, status } = await this.postRequest(path, body);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }


    ////////////////////////////////////////

    async getTutorClasses(tutorID) {
        const path = `/tutor/classes/${tutorID}`;

        try {
            const { data, status } = await this.getRequest(path);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async startSession(courseID) {
        const path = `/tutor/session`;
        const body = { courseID }

        try {
            const { data, status } = await this.postRequest(path, body);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async endSession(sessionID) {
        const path = `/tutor/session/end`;
        const body = { sessionID }

        try {
            const { data, status } = await this.postRequest(path, body);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async getTutorQuestion(sessionID) {
        const path = `/tutor/${sessionID}/QnA`;

        try {
            const { data, status } = await this.getRequest(path);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }
    async postAnswer(sessionID, tutorID, answer, questionID) {
        const path = `/tutor/${sessionID}/QnA`;
        const body = { tutorID, answer, questionID }

        try {
            const { data, status } = await this.postRequest(path, body);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    ////////////////////////////////////////////

    async getClassStats() {
        const path = '/admin/classes/stats';

        try {
            const { data, status } = await this.getRequest(path);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async getQnAStats() {
        const path = '/admin/QnA/stats';

        try {
            const { data, status } = await this.getRequest(path);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async getQnAsList() {
        const path = '/admin/classes/QnAs';

        try {
            const { data, status } = await this.getRequest(path);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async getQnAsForClass(classID) {
        const path = `/admin/classe/${classID}/QnAs`;

        try {
            const { data, status } = await this.getRequest(path);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async markAttendanceForClass(classID, attendanceData) {
        const path = `/admin/${classID}/attendence`;

        try {
            const { data, status } = await this.postRequest(path, attendanceData);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async postAdminQuestion(questionData) {
        const path = '/admin/question';

        try {
            const { data, status } = await this.postRequest(path, questionData);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async getAdminTimetable() {
        const path = '/admin/timetable';

        try {
            const { data, status } = await this.getRequest(path);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async createAdminTimetable(timetableData) {
        const path = '/admin/timetable';

        try {
            const { data, status } = await this.postRequest(path, timetableData);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async deleteAdminTimetable() {
        const path = '/admin/timetable';

        try {
            const { data, status } = await this.deleteRequest(path);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async editAdminTimetable(timetableData) {
        const path = '/admin/timetable';

        try {
            const { data, status } = await this.putRequest(path, timetableData);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async getAdminEnrollments() {
        const path = '/admin/enrolments';

        try {
            const { data, status } = await this.getRequest(path);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }
}
