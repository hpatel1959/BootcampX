const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
const values = [`%${cohortName}%`, limit];

pool.query(`
SELECT students.id as student_id, students.name AS name, cohorts.name AS cohort_name
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`, values)

.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.name}'s ID is ${row.student_id} and is enrolled in ${row.cohort_name}`)
  })
})

.catch(err => {
  console.error('query error', err.stack)
});
