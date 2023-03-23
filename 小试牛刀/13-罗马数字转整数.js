
// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// I可以放在V(5) 和X(10) 的左边，来表示 4 和 9。
// X可以放在L(50) 和C(100) 的左边，来表示 40 和90。
// C可以放在D(500) 和M(1000) 的左边，来表示400 和900。


var romanToInt = function(s) {
    const arr=s.split('')
    let sum=0
    for (let i =0; i<=arr.length;i++){
        if(arr[i]==="I" && arr[i+1] !='V' && arr[i+1] != 'X'){
            sum+=1
        }else if(arr[i]==="I" && arr[i+1]==='V'){
            sum+=4
        }else if(arr[i]==="I" && arr[i+1]==='X'){
            sum+=9
        }else if(arr[i]==='V' && arr[i-1] != 'I'){
            sum+=5
        }else if(arr[i]==='X' && arr[i-1] !='I' &&arr[i+1] !=='L' &&arr[i+1] !=='C'){
            sum+=10
        }else if(arr[i]==='X'&&arr[i+1] =='L'){
            sum+=40
        }else if(arr[i]==='X'&&arr[i+1] =='C'){
            sum+=90
        }else if(arr[i]==='L' && arr[i-1] != 'X'){
            sum+=50
        }else if(arr[i]==='C' && arr[i-1] !='X' &&arr[i+1] !=='D'&&arr[i+1] !=='M'){
            sum+=100
        }else if(arr[i]==='C' && arr[i+1]=='D'){
            sum+=400
        }else if(arr[i]==='D'&&arr[i-1] !=='C'){
            sum+=500
        }else if(arr[i]==='C'&&arr[i+1] =='M'){
            sum+=900
        }else if(arr[i]=='M' && arr[i-1] !=='C'){
            sum+=1000
        }
    }
    return sum
};

console.log(romanToInt('V'))