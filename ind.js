  function check(num) {
    let numStr = num.toString();
    let numar = [];
    let nr = [];
    let n = num.length;
  
    let str = "";
    str=str+tnum(num%1000)
    num = num / 1000;
    for (let j = 0; j < n / 3; j++) {
      nr.push(parseInt(num % 100));
     num=num/100
    }
    nr = nr.reverse();
    console.log(nr)
    let p = nr.length - 1;
    for (let i = p; i >= 0; i--) {
  
      if (i == p && nr[i] != 0) {
      str = tnum(nr[i]) + " Thousand " + str;
      }
      if (i == p - 1 && nr[i] != 0) {
          if(nr[i]>1)
        str = tnum(nr[i]) + " Lakhs " + str;
          else
              str = tnum(nr[i]) + " Lakh " + str;
       
      }
      if (i == p - 2 && nr[i]!= 0) {
          if(nr[i]>1)
              str = tnum(nr[i]) + " Crores " + str;
                else
                    str = tnum(nr[i]) + " Crore " + str;;
      
      }
      if (i == p - 3 && nr[i]!= 0) {
          if(nr[i]>1)
              str = tnum(nr[i]) + " Arabs " + str;
                else
                    str = tnum(nr[i]) + " Arab " + str;
        
        }
      str = str.replace(/\s+/g, ' ').trim();
      
  }
  document.getElementById('i').innerHTML = str;
  }
  
  function tnum(g) {
    let s = "";
    const one = ["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine",
    ];
    const ten = ["","Ten","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty", "Ninety",
    ];
    const teens = ["","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen",
    ];
    let o = g % 10;
    let t = Math.floor((g % 100) / 10);
    let h = Math.floor(g / 100);
    if (g != 0) {
      if (h != 0) {
          if (o == 0 && t == 0) {
              s = s + one[h] + " Hundered"}
        if (o == 0 && t != 0) {
          s = s + one[h] + " Hundered " + ten[t];
        } else if (o != 0 && t == 1) s = s + one[h] + " Hundered " + teens[o];
        else if (o != 0 && t != 0)
          s = s + one[h] + " Hundered " + ten[t] + " " + one[o];
        else if (o != 0 && t == 0)
          s = s + one[h] + " Hundered "+ one[o];
      } 
      else if (h == 0) {
        if (t == 0) s = s + one[o];
        else if (t>1&&o!=0) s = s + ten[t] + " " + one[o];
        else if (t>=1&&o==0) s = s + ten[t] + " " ;
        else if (t == 1) s = s + teens[o];
      }
    }
    return s;
  }  
  
  function handle(event) {
    let num = document.getElementById("us").value;
  
    if (event.key === "Enter") {
      if (isNaN(num)) {
        alert("Please enter a valid number.");
        return;
      }
      if (num.length > 12) {
        alert("The number you entered is out of the scope of this function");
        return;
      }
      alert("You entered: " + num);
      check(num);
      
    }
  }