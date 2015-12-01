;;Evan Nichols
;;EECS 368 Homework 5
;;10-5-2015

#lang racket

(define atom? (lambda (x) (and (not (null? x)) (not (pair? x)))))

(define timesdepth*
  (lambda (x l)
    (cond
      ((null? l) '()) ;;if empty return empty list
      ((atom? (car l)) (cons(* x (car l))(timesdepth* x (cdr l))))
      (else
       (cons (timesdepth* (+ 1 x)(car l))(timesdepth* x (cdr l)))
       );;end else
      )
    );;end lambda
  );;end func
