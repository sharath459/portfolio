Find the parents who have exactly ‘1 Male child & 1 Female child’	 
 	 
Parent_ID	Child_Gender
1	F
1	F
1	M
2	F
2	F
3	M
3	F
4	M
4	M
5	M
6	F
6	M


with gen_count(
select Parent_ID,
 sum(case when Child_Gender = 'M' then 1 else 0 end) as Male_count  ,
 
 sum(case when Child_Gender = 'F' then 1 else 0 end) as Female_count  
 from table 
 group by Parent_ID
 )

 select Parent_ID,
  case when Male_count = 1 and Female_count =1 then 'yes' end 'no' end as flag  
  from gen_count


 



Find running month average population for each month	 
 	 
Month	Population running_total
January	100      100
February	200   300 
March	300     600
April	400    1000
May	500
June	600
July	700
August	800
September	900
October	1000
November	1100
December	1200


with base as (
select month ,population, sum(population) over( order by month ) as running_total 

from table 
group by month ,population)

select month , population/running_total as running_avg

from base 



Write a query that prints the names of managers with 5 or more employees under them	 
 	 
Employees	 
Column	Type
Emp_id	INT
Name	VARCHAR(100)
Manager_empid	INT
Annual_salary	INT
Country	VARCHAR(50)

select name
from Employees
group by name
having Count(emp_id) >= 5;