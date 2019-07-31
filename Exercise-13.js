function xo(str) {
    var x = str.match(/x/g);
    var o = str.match(/o/g);
    if (x.length == o.length) {
        hasil = true
    } else {
        hasil = false
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
  