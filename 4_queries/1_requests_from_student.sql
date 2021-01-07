SELECT count(assistance_requests.*) AS total_assistances, name
FROM assistance_requests
JOIN students ON name = 'Elliot Dickinson'
WHERE assistance_requests.student_id = (
  SELECT id
  FROM students
  WHERE name = 'Elliot Dickinson'
)
GROUP BY name;