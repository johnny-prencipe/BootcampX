const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort = process.argv[2];
const limit = process.argv[3] || 5;
const values = [`${cohort}`, limit];

if (!cohort) return console.log(`Please specify a cohort and number of students.`);

const queryString = `
SELECT
  students.id as student_id,
  students.name as name,
  cohorts.name as cohort
  FROM students

JOIN cohorts
  ON cohorts.id = cohort_id

  WHERE cohorts.name LIKE $1
  LIMIT $2;
`

pool.query(`
SELECT
  students.id as student_id,
  students.name as name,
  cohorts.name as cohort
  FROM students

JOIN cohorts
  ON cohorts.id = cohort_id

  WHERE cohorts.name LIKE '%${cohort}%'
  LIMIT ${limit || 5};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id}, and is in the cohort ${user.cohort}`);
  })
})
.catch(err => console.log('query error:', err.stack));