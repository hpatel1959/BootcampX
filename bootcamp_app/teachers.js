const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT DISTINCT cohorts.name AS cohort, teachers.name AS teacher
FROM teachers
JOIN assistance_requests
ON teachers.id = assistance_requests.teacher_id
JOIN students
ON students.id = student_id
JOIN cohorts
ON cohorts.id = cohort_id
WHERE cohorts.name = '${process.argv[2]}'
ORDER BY teacher;
`)

.then(res => {
  res.rows.forEach(teacher => {
    console.log(`${teacher.cohort}: ${teacher.teacher}`)
  })
})

.catch(err => {
  console.error('Query error', err.stack)
});