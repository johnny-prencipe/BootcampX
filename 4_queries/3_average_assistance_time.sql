SELECT
  AVG(completed_at - started_at)
  AS duration
  FROM assistance_requests;