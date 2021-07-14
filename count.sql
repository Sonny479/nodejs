SELECT COUNT(*),
            CASE WHEN COUNT(*)<10 THEN COUNT(*)
            when COUNT(*)>=10 then 10
            end as namesCount
            from pj;