const pw1 = document.getElementById("password");
const pw2 = document.getElementById("password1");
const btn = document.getElementById("btn");
const spinner = document.getElementById("spinner");
const showpw = document.getElementById("showPw");

var equal = false;
var i=0;

function updateUi(value){
    spinner.classList.remove("visible");
    if(value==""){
        pw2.style.borderColor="rgba(0,0,0,0.3)";
        pw2.style.boxShadow="inset 0 1px 4px rgba(0,0,0,0.2)";
        equal=false
    }
    else if(value!=pw1.value){
        pw2.style.borderColor="#ff0019";
        pw2.style.boxShadow="inset 0 1px 1px #ff0019, 0 0 8px #ff0019";
        equal=false;
    }
    else{
        pw2.style.borderColor="#02c042";
        pw2.style.boxShadow="inset 0 1px 1px #02c042, 0 0 8px #02c042";
        equal=true;
    }
}

function updateUi1(value){
    spinner.classList.remove("visible");
    if(value!=pw2.value && pw2.value!=""){
        pw2.style.borderColor="#ff0019";
        pw2.style.boxShadow="inset 0 1px 1px #ff0019, 0 0 8px #ff0019";
        equal=false;
    }
    if(value==pw2.value && pw2.value!=""){
        pw2.style.borderColor="#02c042";
        pw2.style.boxShadow="inset 0 1px 1px #02c042, 0 0 8px #02c042";
        equal=true;
    }
}

showpw.addEventListener("click",()=>{
    const type = pw1.getAttribute("type")=="password"?"text":"password";
    pw1.setAttribute("type",type);
    if(showpw.classList.contains("fa-eye")){
        showpw.classList.remove("fa-eye");
        showpw.classList.add("fa-eye-slash");
    }
    else{
        showpw.classList.remove("fa-eye-slash");
        showpw.classList.add("fa-eye");
    }
})

const debounce = (callback, time)=>{
    let interval;
    return(...args)=>{
        clearTimeout(interval);
        interval=setTimeout(()=>{
            callback.apply(null, args);
        },time);
    };
};
const handleStartTyping = () =>{
    spinner.classList.add("visible");
}
const handleChange= debounce((input)=>{
    const { value } = input.target;
    updateUi(value);
},500);

const handleChange1 = debounce((input)=>{
    const { value } = input.target;
    updateUi1(value);
},500);

function mouseMove(){
    if((pw1.value=="" || !(equal)) && i==0){
        buttonMoveDown();
        i=1;
        return false;
    }
    if((pw1.value=="" || !(equal)) && i==1){
        buttonMoveUp();
        i=2;
        return false;
    }
    if((pw1.value=="" || !(equal)) && i==2){
        buttonMoveDown();
        i=1;
        return false;
    }
    else{
        btn.style.cursor="pointer";
        return false;
    }
}

function buttonMoveUp(){
    btn.style.transform="translateY(0%)";
}
function buttonMoveDown(){
    btn.style.transform="translateY(100%)";
}
function resetBtn(){
    btn.style.transform="translateY(0%)";
}