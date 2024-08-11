function getInput(id) {
    let numb = document.getElementById(id).value;
    while (isNaN(numb) || parseFloat(numb) < 1) {
        alert('Enter valid values')
        numb = document.getElementById(id).value;
        return 0
      
    }
    return parseFloat(numb);
  }

 
  
  function simpleInterest() {
    let principal = getInput('principal');
    let interestRate = getInput('interest-rate') / 100;
    let time = getInput('time');
  
    const simpleInterest = principal * interestRate * time;
   
    return simpleInterest;
            
  }
  
  function compoundInt() {
    let principal = getInput('principal');
    let interestRate = getInput('interest-rate') / 100;
    let time = getInput('time');
  
    const compoundInterest = principal * (Math.pow((1 + interestRate), time) - 1);
   
    return compoundInterest;
  }
  
  function calculateLoan() {
    const simpleInterestAmount = simpleInterest();
    const compoundInterestAmount = compoundInt();
  
    document.getElementById('simple-interest').textContent = ` Your Simple Interest is: ₦${simpleInterestAmount.toFixed(2)} `;
    document.getElementById('compound-interest').textContent = ` Your Compound Interest is: ₦${compoundInterestAmount.toFixed(1)}`;
  }
  