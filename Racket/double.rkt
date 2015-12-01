(define doubleup
	(lambda ( x )
		( cond
			((null? x) '())
			( else cons (car x) (cons (car x) (doubleup (cdr x)))) 
		) // else statement
	)
)