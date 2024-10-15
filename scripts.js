function myfunction(param1){
    count+=count2;
    console.log(`Hello ${param1} your count is ${count} youre welcome`);
}
function changeButton(){
    if (document.getElementById('404').innerText==="SUBSCRIBE"){
        document.getElementById('404').innerText="SUBSCRIBED";
        document.querySelector('.subBut').classList.remove('subBut');
        document.querySelector('.subBut').classList.add('subButjs');


    }else{
        document.getElementById('404').innerText="SUBSCRIBE";
        document.querySelector('.subButjs').classList.add('subBut');
    }

} 
//query selectros are used to acces html elements
//myfunction();
let count=0;
let count2=2;