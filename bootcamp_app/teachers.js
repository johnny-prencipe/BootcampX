const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort = process.argv[2];
const limit = process.argv[3];

pool.query(`
  SELECT DISTINCT
    cohorts.name AS cohort,
    teachers.name AS teacher
    FROM teachers
    
  JOIN assistance_requests
    ON teachers.id = teacher_id

  JOIN
    students ON students.id = student_id

  JOIN cohorts
    ON cohorts.id = cohort_id

  WHERE cohorts.name LIKE '%${cohort}%'
`)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
})
.catch(err => console.log('query error:', err.stack));