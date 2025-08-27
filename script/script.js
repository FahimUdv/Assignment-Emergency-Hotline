// Heart Icon Click Functionalities ----------

let getHeartNum = parseInt(document.getElementById("heart-count").innerText);

let heartCounts = document.getElementsByClassName("heartcount");
for(let heartCount of heartCounts){
    heartCount.addEventListener("click", function(){
        getHeartNum++;
        document.getElementById("heart-count").innerText = getHeartNum;
    })
}
    
// Call Button Functionalities ----------

let getCoinNum = parseInt(document.getElementById("coin-count").innerText);

let callBtns = document.getElementsByClassName("call-btn");
for(let callBtn of callBtns){
    callBtn.addEventListener("click", function(){
        if(getCoinNum < 20){
            alert("❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ টি কয়েন লাগবে।");
        }
        else{
            alert(`📞 Calling ${callBtn.parentNode.parentNode.children[1].children[1].innerText} ${callBtn.parentNode.parentNode.children[1].children[2].innerText}`);
        getCoinNum = getCoinNum - 20;
        document.getElementById("coin-count").innerText = getCoinNum;
        }
        
    })
}
    
