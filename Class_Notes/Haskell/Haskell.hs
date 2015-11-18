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
        factorial n = n* factorial (n-1)

        -- Note... won't work for negative numbers.

------------------------------------------------------------

Length Function

    length :: [a] -> Int
    length [] = 0
    lenght (x:xs) = 1 + length xs
