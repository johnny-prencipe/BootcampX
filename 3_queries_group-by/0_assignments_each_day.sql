SELECT day, count(*) as assignments
FROM assignments
GROUP BY day
ORDER BY day;