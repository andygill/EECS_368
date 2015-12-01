#lang racket
(define doubleup
 (lambda (l)
  (cond
   ((null? l) '())
   (else
      (cons (car l)
            (cons (car l)
                  (doubleup (cdr l)))))
  )
 )
)
(define atom? (lambda (x) (and (not (null? x)) (not (pair? x)))))



(define dropseconds
  (lambda (x)
     (cond
        ((null? x) '())
        ((null? (cdr x)) (cons (car x) '()))
        (else (cons (car x) (dropseconds (cdr (cdr x)))))
     )
  )
)

(define app
  (lambda (x y)
    (cond
      ((null? x) y)
      ;; ((null? y) x)
      (else (cons (car x) (app (cdr x) y)))
    )
  )
)

(define length
  (lambda (x)
    (cond
      ((null? x) 0)
      (else (+ 1 (length (cdr x))))
    )
  )
)


(define length*
  (lambda (x)
    (cond
      ((null? x) 0)
      ((atom? x) 1)
      (else (+ (length* (car x)) (length* (cdr x))))
    )
  )
)

(define depth
    (lambda(x)
        (cond
            ((null? x) 0) ;; if x is null it has a depth of 0, return 0.
            ((atom? x) 0)
            (else (+ 1 (depth(car x))))
        )
    )
)
