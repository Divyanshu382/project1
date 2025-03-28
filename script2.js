
let k=0;
let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
function hello(){

    if(k==0){
    btn2.classList.add("active");
    btn1.classList.remove("active");
    k=1;
    console.log(k);
}
    else{
        btn1.classList.add("active");
        btn2.classList.remove("active");
    k=0;
    console.log(k);
    }
    if(k==1){
        document.getElementsByClassName("main")[0].style.display="none";
        document.getElementsByClassName("main1")[0].style.display="block";
    }else{
        document.getElementsByClassName("main")[0].style.display="block"; 
        document.getElementsByClassName("main1")[0].style.display="none";
    }

}
Array.from(document.querySelectorAll(".choose")).forEach(i => {
    i.addEventListener("click",()=>hello(i));
});

const advertiserCard = document.getElementById('advertiser');
    const channelOwnerCard = document.getElementById('channelOwner');
    let selectedOption = 'advertiser';

    advertiserCard.addEventListener('click', () => {
      selectedOption = 'advertiser';
      k=1;
      advertiserCard.classList.add('active');
      channelOwnerCard.classList.remove('active');
      if(k==0){
        btn2.classList.add("active");
        btn1.classList.remove("active");
        k=1;
        console.log(k);
    }
        else{
            btn1.classList.add("active");
            btn2.classList.remove("active");
        k=0;
        console.log(k);
        }
        if(k==1){
            document.getElementsByClassName("main")[0].style.display="none";
        }else{
            document.getElementsByClassName("main")[0].style.display="block"; 
        }
    });

    channelOwnerCard.addEventListener('click', () => {
        k=0;  
      selectedOption = 'channelOwner';
      channelOwnerCard.classList.add('active');
      advertiserCard.classList.remove('active');
      if(k==0){
        btn2.classList.add("active");
        btn1.classList.remove("active");
        k=1;
        console.log(k);
    }
        else{
            btn1.classList.add("active");
            btn2.classList.remove("active");
        k=0;
        console.log(k);
        }
        if(k==1){
            document.getElementsByClassName("main")[0].style.display="none";
            document.getElementsByClassName("main1")[0].style.display="block";
        }else{
            document.getElementsByClassName("main")[0].style.display="block"; 
            document.getElementsByClassName("main1")[0].style.display="none";
        }
    });
    function next(){
        document.getElementById("mainchoose").style.display="none";
        document.getElementsByClassName("signup-container")[0].style.display="block";


    }
    document.getElementsByClassName("button")[0].addEventListener("click",()=>next())

    document.addEventListener("DOMContentLoaded", function () {
        const advertiserBtn = document.getElementById("btn1");
        const channelOwnerBtn = document.getElementById("btn2");
        const advertiserForm = document.querySelector(".main");
        const channelOwnerForm = document.querySelector(".main1");
        const signupButton1 = advertiserForm.querySelector(".signup-button");
        const signupButton2 = channelOwnerForm.querySelector(".signup-button");
        
        // Show respective forms based on selection
        advertiserBtn.addEventListener("click", function () {
            advertiserForm.style.display = "block";
            channelOwnerForm.style.display = "none";
        });
    
        channelOwnerBtn.addEventListener("click", function () {
            advertiserForm.style.display = "none";
            channelOwnerForm.style.display = "block";
        });
    
        function validateForm(form) {
            const inputs = form.querySelectorAll("input[required]");
            for (let input of inputs) {
                if (input.value.trim() === "") {
                    alert("Please fill all fields before proceeding.");
                    return false;
                }
            }
            return true;
        }
    
        signupButton1.addEventListener("click", function (event) {
            event.preventDefault();
            if (validateForm(advertiserForm)) {
                window.location.href = "index.html";
            }
        });
    
        signupButton2.addEventListener("click", function (event) {
            event.preventDefault();
            if (validateForm(channelOwnerForm)) {
                window.location.href = "influsignup.html";
            }
        });
    });
    