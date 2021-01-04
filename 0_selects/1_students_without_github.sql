SELECT id, name, cohort_id, email
FROM students
WHERE github IS NULL
ORDER BY cohort_id;