let k = "*";
var total = 11;
var half1 = parseInt(total / 2);
var half2 = half1;

for (let j = 1; j < total; j++) {
    if (j <= half1) {
        for (k.length; k.length < j; k.length++) {

            $('.out').append(k);
            k += "*";
            $('.out').append('<br>');
        }
    }
   else {
        half1--;
        for (k; k.length > 0; k--) {
            $('.out').append(k);
            
        }
    }

}
