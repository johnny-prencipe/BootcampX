SELECT day, count(*) as assignments
FROM assignments
GROUP BY day
HAVING count(*) >= 10
ORDER BY day;