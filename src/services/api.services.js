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

    async getStudentClass() {
        const path = '/student/class';

        try {
            const { data, status } = await this.getRequest(path);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async markStudentAttendance(attendanceData) {
        const path = '/student/attendance';

        try {
            const { data, status } = await this.postRequest(path, attendanceData);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async postStudentQuestion(questionData) {
        const path = '/student/QnA';

        try {
            const { data, status } = await this.postRequest(path, questionData);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async getStudentAnswerList() {
        const path = '/student/QnA';

        try {
            const { data, status } = await this.getRequest(path);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async getStudentTimetable() {
        const path = '/student/timetable';

        try {
            const { data, status } = await this.getRequest(path);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async getStudentCourses() {
        const path = '/student/courses';

        try {
            const { data, status } = await this.getRequest(path);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async getStudentEnrollments(studentID) {
        const path = `/student/${studentID}/enrollments`;

        try {
            const { data, status } = await this.getRequest(path);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async enrollStudentInClass(studentID, enrollmentData) {
        const path = `/student/${studentID}/enrollments`;

        try {
            const { data, status } = await this.postRequest(path, enrollmentData);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

    async postStudentFeedback(feedbackData, studentID) {
        const path = `/student/${studentID}/feedback`;

        try {
            const { data, status } = await this.postRequest(path, feedbackData);
            return { data, status };
        } catch (error) {
            throw error;
        }
    }

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
