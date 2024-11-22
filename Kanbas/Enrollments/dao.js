import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    enrollments.push({
        _id: Date.now().toString() + Math.floor(Math.random() * 1000).toString().padStart(3, '0'),
        user: userId, course: courseId
    });
}
export function unenrollCourse(courseId, userId) {
    const { enrollments } = Database;
    const index = enrollments.findIndex((enrollment) => enrollment.course === courseId && enrollment.user === userId);
    if (index !== -1) {
        enrollments.splice(index, 1);
        return true;
    }
};