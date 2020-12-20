# Queries

## 4. Create a Query to determine which sub_genres come from which regions

```sql

    SELECT rname,
        sgname
    FROM   country AS c,
        (SELECT og.cname,
                bs.sgname
            FROM   band_origins AS og,
                band_styles AS bs,
                (SELECT bname
                    FROM   bands) AS table_b
            WHERE  bs.bname = table_b.bname
                AND og.bname = table_b.bname) AS table_c
    WHERE  c.cname = table_c.cname;

```

## 5. Create a query to determine what other bands, not currently in their favorites, are of the same sub_genres as those which are

```sql

    SELECT bs.bname,
        bs.sgname
    FROM   band_styles AS bs,
        (SELECT f.bname,
                bs.sgname
            FROM   favorites AS f
                LEFT JOIN band_styles AS bs
                        ON bs.bname = f.bname
            WHERE  f.uid = ?) AS table_a
    WHERE  bs.sgname = table_a.sgname
        AND bs.bname != table_a.bname;

```

## 6. Create a query to determine what other bands, not currently in their favorites, are of the same genres as those which are

```sql

SELECT bs.bname,
       bs.sgname,
       sg.gname
FROM   band_styles AS bs,
       sub_genre AS sg,
       (SELECT f.bname,
               bs.sgname,
               sg.gname
        FROM   favorites AS f
               LEFT JOIN band_styles AS bs
                      ON bs.bname = f.bname
               LEFT JOIN sub_genre AS sg
                      ON sg.sgname = bs.sgname
        WHERE  uid = ?) AS table_a
WHERE  sg.gname = table_a.gname
       AND bs.sgname = sg.sgname
       AND bs.bname != table_a.bname;

```

## 7. Create a query which finds other users who have the same band in their favorites, and list their other favorite bands

```sql

SELECT f.bname FROM favorites AS f, (SELECT uid, ? AS bname FROM favorites f WHERE f.bname = ? AND uid != ?) AS table_a WHERE f.uid = table_a.uid AND f.bname != table_a.bname

```

## 8. Create a query to list other countries, excluding the user’s home country, where they could travel to where they could hear the same genres as the bands in their favorites

```sql

SELECT bs.bname,
       bs.sgname,
       sg.gname,
       bo.cname
FROM   band_styles AS bs,
       sub_genre AS sg,
       (SELECT f.bname,
               bs.sgname,
               sg.gname
        FROM   favorites AS f
               LEFT JOIN band_styles AS bs
                      ON bs.bname = f.bname
               LEFT JOIN sub_genre AS sg
                      ON sg.sgname = bs.sgname
        WHERE  uid = 1) AS table_a
        LEFT JOIN band_origins AS bo ON bs.bname = bo.bname
WHERE  sg.gname = table_a.gname
       AND bs.sgname = sg.sgname
       AND bs.bname != table_a.bname;

```
