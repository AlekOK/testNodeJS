
//           Task109
// Дано натуральное число n.
// Вычислить 1*2 + 2*3*4 +...+ n(n+1)*...*2n;

function findSum(n){
    sum = 0;
    for(i = 1; i <= n; i++){
      mult = 1;
      for(j = i; j <= 2*i; j++){
        mult *= j;
      }
      sum += mult;
    }
    return sum;
  }

// console.log(findSum(2))

//#############################################################

//           Task117a
// Дано натуральное число n.
// Вычислить произведение первых n сомножителей 1/2 * 3/4 * 5/6 ...

function prod(n){
  multN = 1;
  for(i = 1, count = 1; count <= n; i = i+2, count++){
    multN *= i / (i+1);
  }
  return multN;
}

// console.log(prod(0))

// //###########################################################

//           Task560
// Два натуральных называют дружественными,
// если каждое из них равно сумме всех делителей другого,
// кроме самого этого числа. Найти все пары дружественных чисел,
// лежащих в диапазоне от 200 до 300.

function findSumDivNum(a){
  sumDiv=0;
  for(i=1;i<a;i++){
    if(a % i ===0){
      sumDiv+=i;
    }
  }
  return sumDiv;
}

function friendlyNum(a,b){
  friendlyArr=[];
  for(numA=a;numA<=b;numA++){
    sumDivA=findSumDivNum(numA);
    numB=sumDivA;
    sumDivB=findSumDivNum(numB);
    if(numA===sumDivB && numB>numA){
      friendlyArr.push([numA,numB])
    }
  }
  return friendlyArr;
}


console.log(friendlyNum(200,300))