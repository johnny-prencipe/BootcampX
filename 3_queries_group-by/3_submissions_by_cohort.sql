-- SELECT 
--   cohorts.name as cohort,
--   sum(assignment_submissions.duration) as total_submissions
-- FROM students
-- JOIN assignment_submissions
--   ON assignment_submissions.student_id = students.id
-- JOIN cohorts
--   ON students.cohort_id = cohorts.id
-- ORDER BY cohorts.name;

SELECT cohorts.name as cohort_name, count(assignment_submissions.*) as total_submissions
FROM students
JOIN cohorts ON students.cohort_id = cohorts.id
JOIN assignment_submissions ON assignment_submissions.student_id = students.id
GROUP BY cohort_name 
ORDER BY total_submissions;