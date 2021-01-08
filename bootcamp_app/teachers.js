const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort = process.argv[2];

if (!cohort) return console.log(`Please specify a cohort.`);

const values = [`%${cohort}%`];

const queryString = `
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
  
  WHERE cohorts.name LIKE $1
`

pool.query(queryString, values)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
})
.catch(err => console.log('query error:', err.stack));