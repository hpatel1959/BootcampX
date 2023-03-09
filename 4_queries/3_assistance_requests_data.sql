SELECT teachers.name AS teacher, students.name AS student, assignments.name AS assignemnt, (completed_at - started_at) AS duration
FROM assistance_requests
JOIN teachers ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN assignments ON assignment_id = assignments.id
ORDER BY duration;