document.getElementById('Deposite').addEventListener('click',function(){
    const DValue =document.getElementById('DepositeAmount').value;
    const DepositeValue= parseInt(DValue);
    const DBalance=document.getElementById('DepositeBalance').innerText;
    var depositebalance=parseInt(DBalance);
    const DTotal=DepositeValue + depositebalance;
    DepositeBalance.innerText=DTotal;

    DepositeAmount.value='';
    


//Total Balance Calculate
   const TBalance= document.getElementById('Balance').innerText;
  const  tBalance=parseInt(TBalance)
   const TotalBalance= DepositeValue + tBalance;
   Balance.innerText=TotalBalance;

  
   
})




document.getElementById('Withdraw').addEventListener('click',function(){
    const WValue =document.getElementById('WithdrawAmount').value;
    const WithdrawValue= parseInt(WValue);
    const WBalance=document.getElementById('WithdrawBalance').innerText;
    const withdrawbalance=parseInt(WBalance);
    const WTotal=WithdrawValue + withdrawbalance;
    WithdrawBalance.innerText=WTotal;

    WithdrawAmount.value='';

// //Total Balance Calculate
   const TBalance= document.getElementById('Balance').innerText;
  const  tBalance=parseInt(TBalance)
   const TotalBalance=  tBalance - WithdrawValue;
   Balance.innerText=TotalBalance;


})
