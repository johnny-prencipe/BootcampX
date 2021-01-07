SELECT
  teachers.name AS teacher,
  students.name AS student,
  assignments.name AS assignment,
  (completed_at - started_at) AS duration
  FROM assistance_requests

JOIN students
ON student_id = students.id

JOIN assignments
ON assignments.id = assignment_id

JOIN teachers
ON teachers.id = teacher_id

ORDER BY duration;