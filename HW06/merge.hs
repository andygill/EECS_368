main = print (qsort (merge [9,3,4,5] [3,4,5,11]))

-- Merge function
merge :: (Ord a) => [a] -> [a] -> [a]
merge [] ys = qsort ys
merge xs [] = qsort xs
merge (x:xs) (y:ys)
    --merge qsort (x:xs) qsort (y:ys)
   | x <= y = x:merge xs (y:ys)
   | x > y = y:merge (x:xs) ys

qsort :: (Ord a) => [a] -> [a]
qsort [] = []
qsort (x:xs) =
    let smaller = qsort [a | a <- xs, a <= x]
        larger = qsort [a | a <- xs, a > x]
    in smaller ++ [x] ++ larger

sortmerge :: (Ord a) => [a] -> [a] -> [a]
sortmerge [] a = qsort a
sortmerge a [] = qsort a
sortmerge a b = qsort (merge a b)
