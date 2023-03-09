SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort, COUNT(assistance_requests.*) AS total_assistances
FROM teachers
JOIN assistance_requests
ON teachers.id = assistance_requests.teacher_id
JOIN students
ON students.id = student_id
JOIN cohorts
ON cohorts.id = cohort_id
WHERE cohorts.name = 'JUL02'
GROUP BY cohorts.name, teachers.name
ORDER BY teacher;