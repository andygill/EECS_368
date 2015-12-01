Function and argument names: begin with lowercase letters

List arguments: begin with "s" suffix.

Layout Rule: functional whitespace.

------------------------------------------------------------

Haskell: Strongly Typed, unlike Scheme.
More time fighting with compiler, but programs more often to work on first try.
Less runtime errors, unlike Java, which will truck through and try to add Apples and Oranges at runtime.

Type: name for a collection of related values.

    Example: Bool --> Two Logical Values --> T or F

Type Errors:

    List: sequence of values of the same type. [1,2,3,4,5]

    Tuple: Sequence of Values of DIFFERENT types.
        (t1, t2, ...., tn) is the type of n-tuples whose ith components have type ti for any i in 1...n.

    Function: mapping from values of one type to values of another type:

    not :: Bool -> Bool
    isDigit Char -> Bool

    add :: (Int, Int) -> Int
    add (x,y) = x+y

------------------------------------------------------------

Curried Functions: functions with multiple arguments by returning functions as results.

    add' :: Int -> (Int -> Int)

------------------------------------------------------------

Polymorphic Functions: a function is Polymorphic ("of many forms") if its type contains one or more type variables.

    length :: [a] -> Int

------------------------------------------------------------

Conditional Functions∷

    Import Prelude hiding (abs)
    abs :: Int -> Int
    abs n = if n >= 0 then n else -n

------------------------------------------------------------

Guarded Equations

    As an alternative to conditionals, functions can also be defined using guarded equations.

    abs n       | n >= 0        = -1
                | n = 0         = 0
                | otherwise     = 1

------------------------------------------------------------

Pattern Matching

    (&&) :: Bool -> Bool -> Bool
    True && True = True
    _ && _ = False -- use of wildcard _, we don't care what is put in, it's gonna be False

------------------------------------------------------------

List Patterns

    Internally, [1,2,3,4] means 1:(2:(3:(4:[]))).
    -- 4 Cons cells strung together.

    Functions on lists can be defined using x:xs patterns.

        head :: [a] -> a
        head (x:_) = x

        tail :: [a] -> [a]
        tail (_:xs) = xs

        -- equivalent to 'car' and 'cdr' in Scheme
------------------------------------------------------------

Lambda Expressions: used to avoid naming functions that are only referenced once. For example∷

        odds n = map f [0..n-1]
        where
            f x = x*2+1

        can be simplified to
            odds n = map (\ x -> x*2+1) [0..n-1]

------------------------------------------------------------

Factorial Function

        factiorial :: Int -> Int
        factorial n = product [1..n]

        -- which means -> factorial 4
                            product [1..4]

Recursive Functions: In Haskell, functions can also be defined in terms of themselves. Such functions are called recurisve.

        factorial :: Int -> Int
        factorial 0 = 1
        factorial n = n * factorial (n-1)
        -- factorial 1 = 1 --> this line would never get read, because n matches everything!

        -- Base cases first, and then followed by your general, n cases
        -- Note... won't work for negative numbers.

------------------------------------------------------------

Length Function

    length :: [a] -> Int
    length [] = 0
    lenght (x:xs) = 1 + length xs

    -- recursively defined using x:xs

------------------------------------------------------------
Recursion on Lists

product :: [Int] -> Int
product [] = 1
product (n:ns) = n * product ns

--product maps the empty list to 1

------------------------------------------------------------
Reverse Function

reverse :: [a] -> [a]
reverse [] = []
reverse (x:xs) = reverse xs ++ [x]

-- How do we make this more efficient
reverse :: [a] -> [a]
reverse xs = rev xs [] --xs is equal to the argument and []
rev [] ys = ys -- rev
rev (x:xs) ys = ys
rev (x:xs) ys = rev xs (x:ys)

------------------------------------------------------------
Multiple arguments

zip :: [a] -> [b] -> [(a,b)]
zip [] - = []
zip _ [] = []
zip (x:xs) (y:ys) = (x,y) : zip xs ys

------------------------------------------------------------
Drop Function

drop :: Int -> [a] -> [a]
drop 0 xs = xs --drop zero elements, fug it you're done
drop n [] = [] -- drop n elements on an empty list, givem' an empty list back fug it
drop n (_:xs) = drop(n-1) xs -- drop n elements on non empty list,
                             --drop that front element and recursive call to drop with one less fug it

------------------------------------------------------------
Appending Two Lists

(++) :: [a] -> [a] -> [a]
[] ++ ys = ys

------------------------------------------------------------
TAKE Function

take :: int -> [a] -> [a]
take 0 _ = []
take _ [] = []
take n (x:xs) = x : take (n-1) xs

------------------------------------------------------------
Quicksort

-- The empty list is already sorted
-- Non empty lists can be sorted by sorting the tail values <= the head, sorting the tail values > the head, and then appending the resulting list together.

qsort :: [Int] -> [Int]
qsort [] =  []
qsort (x:xs) =
    qsort smaller ++ [x] ++ qsort larger
    where
        smaller

------------------------------------------------------------

Recursion is a "while loop"
For loop?

f ys@(x:xs) -- ys is now an alias for the (x:xs) structure

"Syntax is about what you see, semantics is about what happens underneath"

------------------------------------------------------------

Lists Comprehension

    Set Theory -> take a set of numbers, apply transformer, end up with new set
    {x^2 | x e {1..5}}

    List Comprehensions are the equivalent. The expression x <- [1..5] is called a generator, as it states how to generate values for x.

    Multiple generators are acceptable, separate by commas.

    Prelude> [x^2 | x <- [1..5]]

    Prelude> [(x,y) | x <- [1,2,3], y <- [4,5] ]
    [(1,4),(1,5),(2,4),(2,5),(3,4),(3,5)]

------------------------------------------------------------
Dependent Generators - we can define the library function that concatenates a list of lists∷

    concat :: [[a]] -> [a]
    concat xss = [x | xs <- xss, x <- xs]
    -- A flattening function. takes a lists of lists and concatenates them together.

    Guards - can use guards to restrict values.

    [x | x <- [1..10], even x]

    Using a guard we can define a function that maps a positive integer to its lists of factors∷

    factors n = [x | x <- [1..n], n 'mod' x == 0]

    prime :: Int -> Bool
    prime n = factors n == [1..n]

    primes n = [x | x <- [2..n], prime x]

    We can actually define a list of all primes.

    primes :: [Int]
    primes = [x | x <- [2..], prime x]
