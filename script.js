let a         = 0;
let b         = 0;
let c         = 0;
let restSum   = 0;

for ( i=0; i < 1000; i++ ) {
	c = 1000 - i;
	restSum = i;

	for ( j=0; j < restSum; j++ ) {
		b = restSum - j;
		a = 1000 - b - c; 

		
		if ( Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c,2) && a !== 0 && b !== 0 && b > a) {
			console.log('talen: ', a, b, c, 'fyller kravet a^2 + b^2 = c^2, samt a+b+c=1000 och ger oss produken: ', a * b * c)
		}
	}
}