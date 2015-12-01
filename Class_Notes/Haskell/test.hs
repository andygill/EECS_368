main = print (quicksort [3,4,1,1,8,7,3,2])

prod :: [Int] -> Int
prod [] = 1
prod (n:ns) = n * product ns

quicksort :: (Ord a) => [a] -> [a]
quicksort [] = []
quicksort (x:xs) =
    let smallerSorted = quicksort [a | a <- xs, a <= x]
        biggerSorted = quicksort [a | a <- xs, a > x]
    in  smallerSorted ++ [x] ++ biggerSorted

factors :: Int -> [Int]
factors n = [x | x <- [1..n], n `mod` x == 0]

prime :: Int -> Bool
prime n = factors n == [1,n]

primes :: [Int]
primes = [x | x <- [2..], prime x]
