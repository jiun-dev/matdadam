/*
:fitst
첫번째로 일치하는 요소를 가져온다.

 :last
마지막으로 일치하는 요소를 가져온다.

 :even
짝수번째 요소를 모두 가져온다 ( first index : 0 )

 :odd
홀수번째 요소를 모두 가져온다 ( first index : 0 )

 :eq(index)
 인자로 전달된 index에 해당하는 요소를 가져온다. ( first index : 0 )

 :gt(index)
인자로 전달된 index 보다 큰 index를 가진 요소를 모두 가져온다.

 :lt(index)
인자로 전달된 index 보다 작은 index를 가진 요소를 모두 가져온다.

 :has(selector)
인자로 전달된 selector 요소를 하나 이상 포함하고 있는 요소를 가져온다.

 :not(selector)
인자로 전달된 selector 와 일치하지 않는 모든요소를 가져온다.

*/

$('#slide > div:gt(0)').hide();

setInterval(function(){
    $('#slide > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slide');
},3000);

/*
A.append(B)
B.appendTo(A)
 -> A의 마지막에 B를 추가


A.prepend(B)
B.prependTo(A)
 -> A의 처음에 B를 추가
*/