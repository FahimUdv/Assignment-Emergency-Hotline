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
let callHistoryTitle = document.getElementById("call-history-title").innerText;
let callHistoryNum = document.getElementById("call-history-num").innerText;

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

            callHistoryTitle = `${callBtn.parentNode.parentNode.children[1].children[0].innerText}`;
            // document.getElementById("call-history-title").innerText = callHistoryTitle;

            callHistoryNum = `${callBtn.parentNode.parentNode.children[1].children[2].innerText}`;
            // document.getElementById("call-history-num").innerText = callHistoryNum;


            let now = new Date();
            let callTime = now.toLocaleTimeString("en-US", {
                timeZone: "Asia/Dhaka",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            });
            // document.getElementById("call-time").innerText = callTime;



            const callHistoryContainer = document.getElementById("call-history-container");

            const newCallHistory = document.createElement("div");
            newCallHistory.innerHTML = `
            <div class="flex justify-between px-6 pb-6 items-center bg-[#FAFAFA] rounded-lg w-full">
                <div>
                    <p id="call-history-title" class = "text-base md:text-lg py-1 font-semibold">${callHistoryTitle}</p>
                    <p id="call-history-num" class = "md:text-lg">${callHistoryNum}</p>
                </div>
                <div>
                    <p id="call-time" class = "font-semibold text-base md:text-lg me-2">${callTime}</p>
                </div>
            </div>
            `;
            callHistoryContainer.append(newCallHistory);
        }
    })
}
    
// Clear Button Functionalities ----------

document.getElementById("clear-btn").addEventListener("click", function(){
    document.getElementById("call-history-container").innerHTML = "";
});

// Copy Button Functionalities ----------

document.addEventListener('DOMContentLoaded', function () {
    let copyButtons = document.querySelectorAll('button.btn.border-2');

    for (let i = 0; i < copyButtons.length; i++) {
        copyButtons[i].addEventListener('click', function (event) {
        let btn = event.currentTarget;
            let card = btn.closest('.card');

            if (!card) {
                alert('Card not found.');
                return;
            }

        let phoneElem = card.querySelector('.phone-number') || card.querySelector('h1.text-4xl');
        if (!phoneElem) {
            alert('No phone number found.');
            return;
        }

        let phoneNumber = phoneElem.innerText.trim();

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(phoneNumber).then(function () {
            alert('📝 কপি করা হয়েছেঃ  ' + phoneNumber);

            let copyCount = document.getElementById("copy-count").innerText;
            copyCount = parseInt(copyCount) + 1;
            document.getElementById("copy-count").innerText = copyCount + " Copy";

            }).catch(function () {
                fallbackCopy(phoneNumber);
            });
        } else {
            fallbackCopy(phoneNumber);
        }
        });
    }

    function fallbackCopy(text) {
        let ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        try {
            document.execCommand('copy');
            alert('Copied: ' + text);
        } catch (err) {
            alert('Copy failed');
        }
        document.body.removeChild(ta);
    }
});
