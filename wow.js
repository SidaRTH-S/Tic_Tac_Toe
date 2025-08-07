let i=0;
let v=1;
let tn=4;
arr=[["","",""],["","",""],["","",""]]

function checker(arr,a,b,s){
    if (arr[a][b]==""){
        if (s==2){
            arr[a][b]="X";
        }else{
            arr[a][b]="O";
        }
    }
    if(arr[0][1]==arr[0][0] && arr[0][2]==arr[0][0] && arr[0][0]!=""){
        if (v==2){
            alert("Person with symbol X is winner");
            rest();
        }else{
            alert("Person with symbol O is winner");
            rest();
        }
    }else if (arr[1][1]==arr[1][0] && arr[1][2]==arr[1][0] && arr[1][0]!=""){
        if (v==2){
            alert("Person with symbol X is winner");
            rest();
        }else{
            alert("Person with symbol O is winner");
            rest();
        }
    }else if (arr[0][1]==arr[1][1] && arr[2][1]==arr[0][1] && arr[0][1]!=""){
        if (v==2){
            alert("Person with symbol X is winner");
            rest();
        }else{
            alert("Person with symbol O is winner");
            rest();
        }
    }else if(arr[2][1]==arr[2][0] && arr[2][2]==arr[2][0] && arr[2][0]!=""){
        if (v==2){
            alert("Person with symbol X is winner");
            rest();
        }else{
            alert("Person with symbol O is winner");
            rest();
        }
    }else if(arr[1][0]==arr[0][0] && arr[2][0]==arr[0][0] && arr[0][0]!=""){
        if (v==2){
            alert("Person with symbol X is winner");
            rest();
        }else{
            alert("Person with symbol O is winner");
            rest();
        }
    }else if(arr[1][2]==arr[0][2] && arr[2][2]==arr[0][2] && arr[0][2]!=""){
        if (v==2){
            alert("Person with symbol X is winner");
            rest();
        }else{
            alert("Person with symbol O is winner");
            rest();
        }
    }else if(arr[1][1]==arr[0][0] && arr[2][2]==arr[0][0] && arr[0][0]!=""){
        if (v==2){
            alert("Person with symbol X is winner");
            rest();
        }else{
            alert("Person with symbol O is winner");
            rest();
        }
    }else if(arr[0][2]==arr[1][1] && arr[2][0]==arr[1][1] && arr[1][1]!=""){
        if (v==2){
            alert("Person with symbol X is winner");
            rest();
        }else{
            alert("Person with symbol O is winner");
            rest();
        }
    }

}
var reset=document.getElementById("Reset");
reset.addEventListener("click",()=> {
    rest();
});
function rest(){
    var bx1=document.getElementById("bx1");
    bx1.innerHTML="--";
    var bx2=document.getElementById("bx2");
    bx2.innerHTML="--";
    var bx3=document.getElementById("bx3");
    bx3.innerHTML="--";
    var bx4=document.getElementById("bx4");
    bx4.innerHTML="--";
    var bx5=document.getElementById("bx5");
    bx5.innerHTML="--";
    var bx6=document.getElementById("bx6");
    bx6.innerHTML="--";
    var bx7=document.getElementById("bx7");
    bx7.innerHTML="--";
    var bx8=document.getElementById("bx8");
    bx8.innerHTML="--";
    var bx9=document.getElementById("bx9");
    bx9.innerHTML="--";
    arr=[["","",""],["","",""],["","",""]]
}


var theme=document.getElementById("theme")
theme.addEventListener("click", ()=>{
    if (i%tn==0){
        var bdy=document.getElementById("play");
        bdy.style.backgroundImage="url('2nd.jpg')";
        i+=1
    }else if(i%tn==1){
        var bdy=document.getElementById("play");
        bdy.style.backgroundImage="url('images.jpg')";
        i+=1
    }else if(i%tn==2){
        var bdy=document.getElementById("play");
        bdy.style.backgroundImage="url('download.jpg')";
        i+=1
    }else if (i%tn==3){
        var bdy=document.getElementById("play");
        bdy.style.backgroundImage="url('middle.avif')";
        i+=1
    }
});

var loss=document.getElementById("loss");
loss.addEventListener("click", ()=>{
    if (v==1){
        alert("player with symbol X gave up and Lost..");
    }else if(v==2){
        alert("player with the symbol O gave up and lost...");
    }else{
        alert("Error");
    }
    rest();
});

var b1=document.getElementById("bx1");
b1.addEventListener("click", ()=>{
    var val=b1.textContent;
    if (val=="X" || val=="O"){
        alert("hey drunkyard move already placed");
    }else{
        if (v==1){
            b1.innerHTML="X";
            v=2;
        }else{
            b1.innerHTML="O";
            v=1;
        }
    }
    checker(arr,0,0,v);
});

var b2=document.getElementById("bx2");
b2.addEventListener("click", ()=>{
    var val=b2.textContent;
    if (val=="X" || val=="O"){
        alert("hey drunkyard move already placed");
    }else{
        if (v==1){
            b2.innerHTML="X";
            v=2;
        }else{
            b2.innerHTML="O";
            v=1;
        }
    }
    checker(arr,0,1,v);
});

var b3=document.getElementById("bx3");
b3.addEventListener("click", ()=>{
    var val=b3.textContent;
    if (val=="X" || val=="O"){
        alert("hey drunkyard move already placed");
    }else{
        if (v==1){
            b3.innerHTML="X";
            v=2;
        }else{
            b3.innerHTML="O";
            v=1;
        }
    }
    checker(arr,0,2,v);
});
var b4=document.getElementById("bx4");
b4.addEventListener("click", ()=>{
    var val=b4.textContent;
    if (val=="X" || val=="O"){
        alert("hey drunkyard move already placed");
    }else{
        if (v==1){
            b4.innerHTML="X";
            v=2;
        }else{
            b4.innerHTML="O";
            v=1;
        }
    }
    checker(arr,1,0,v);
});
var b5=document.getElementById("bx5");
b5.addEventListener("click", ()=>{
    var val=b5.textContent;
    if (val=="X" || val=="O"){
        alert("hey drunkyard move already placed");
    }else{
        if (v==1){
            b5.innerHTML="X";
            v=2;
        }else{
            b5.innerHTML="O";
            v=1;
        }
    }
    checker(arr,1,1,v);
});
var b6=document.getElementById("bx6");
b6.addEventListener("click", ()=>{
    var val=b6.textContent;
    if (val=="X" || val=="O"){
        alert("hey drunkyard move already placed");
    }else{
        if (v==1){
            b6.innerHTML="X";
            v=2;
        }else{
            b6.innerHTML="O";
            v=1;
        }
    }
    checker(arr1,2,v);
});
var b7=document.getElementById("bx7");
b7.addEventListener("click", ()=>{
    var val=b7.textContent;
    if (val=="X" || val=="O"){
        alert("hey drunkyard move already placed");
    }else{
        if (v==1){
            b7.innerHTML="X";
            v=2;
        }else{
            b7.innerHTML="O";
            v=1;
        }
    }
    checker(arr,2,0,v);
});
var b8=document.getElementById("bx8");
b8.addEventListener("click", ()=>{
    var val=b8.textContent;
    if (val=="X" || val=="O"){
        alert("hey drunkyard move already placed");
    }else{
        if (v==1){
            b8.innerHTML="X";
            v=2;
        }else{
            b8.innerHTML="O";
            v=1;
        }
    }
    checker(arr,2,1,v);
});
var b9=document.getElementById("bx9");
b9.addEventListener("click", ()=>{
    var val=b9.textContent;
    if (val=="X" || val=="O"){
        alert("hey drunkyard move already placed");
    }else{
        if (v==1){
            b9.innerHTML="X";
            v=2;
        }else{
            b9.innerHTML="O";
            v=1;
        }
    }
    checker(arr,2,2,v);
});

