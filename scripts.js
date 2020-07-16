       //variables for each unit
       var a = 0;
       var b = 0;
       var c = 0;
       var d = 0;
       var e = 0;

       $(document).ready(function () {
           let units = window.localStorage.getItem('units');
           if (units != null) {
               units = JSON.parse(units);

               a = units['a'];
               b = units['b'];
               c = units['c'];
               d = units['d'];
           }

           showUpdate();
           //each second
           window.setInterval(function () {
               //set each unit
               showUpdate();

               //add something a little interesting. Each unit will compound.
               //A does nothing
               //B gives .5 A
               //C gives .25 B
               //D gives .10 C
               //E gives .05 D

               a = a + b * 1;
               b = b + c * 0.75;
               c = c + d * 0.5;
               d = d + e * 0.25;

               getUpdate();
               window.localStorage.setItem(
                   'units', JSON.stringify({
                       'a': a,
                       'b': b,
                       'c': c,
                       'd': d
                   })
               );
           }, 1000);
       });

       function showUpdate() {
           document.getElementById("a").innerHTML = "A " + a;
           document.getElementById("b").innerHTML = "B " + b;
           document.getElementById("c").innerHTML = "C " + c;
           document.getElementById("d").innerHTML = "D " + d;
           document.getElementById("e").innerHTML = "E " + e;
       }
       //functions for the units
       //a is one more for each click
       function geta() {
           a = a + 1;
           showUpdate();
       }
       //b is one for 10 a
       function getb() {
           if (a >= 10) {
               b = b + 1;
               a = a - 10;
               showUpdate();
           }
       }
       //c is one for 100 b
       function getc() {
           if (b >= 25) {
               c = c + 1;
               b = b - 25;
               showUpdate();
           }
       }
       //d is one for 100 c
       function getd() {
           if (c >= 50) {
               d = d + 1;
               c = c - 50;
               showUpdate();
           }
       }
       //e is one for 100 d
       function gete() {
           if (d >= 100) {
               e = e + 1;
               d = d - 100;
               showUpdate();
           }
       }
