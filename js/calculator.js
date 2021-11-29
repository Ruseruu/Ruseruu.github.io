//Assignment 6
//2. Add jQuery to complete and update the Loans table form


// --- global variables ---

var loans = [
    { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
  ]; 
  let loanWithInterest = 0;
  let int = 0;
  let payments;
  // --- function: loadDoc() ---
  
  function loadDoc() {
    
    // pre-fill defaults for first loan year
    var defaultYear = loans[0].loan_year;
    $("#loan_year0" + 1).val(defaultYear++);
    var defaultLoanAmount = loans[0].loan_amount;
    $("#loan_amt0" + 1).val(defaultLoanAmount.toFixed(2));
    var defaultInterestRate = loans[0].loan_int_rate;
    $("#loan_int0" + 1).val(defaultInterestRate);
    var loanWithInterest 
      = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
    $("#loan_bal0" + 1).text(toMoney(loanWithInterest));
      
    // pre-fill defaults for other loan years
    for(var i=2; i<6; i++) {
      $(`#loan_year0${i}`).val(defaultYear++);
      $(`#loan_year0${i}`).attr("disabled","true");
      $(`#loan_year0${i}`).css({
        "backgroundColor":"grey","color":"white"
      });
      $(`#loan_amt0${i}`).val(defaultLoanAmount.toFixed(2));
      $(`#loan_int0${i}`).val(defaultInterestRate);
      $(`#loan_int0${i}`).attr("disabled","true");
      $(`#loan_int0${i}`).css({
        "backgroundColor":"grey","color":"white"
      });
      loanWithInterest 
        = (loanWithInterest + defaultLoanAmount) 
        * (1 + defaultInterestRate);
      $("#loan_bal0" + i).text(toMoney(loanWithInterest));
    } // end: "for" loop
      
    $("input[type=text]").focus(function() {
      $(this).select();
      $(this).css("background-color", "yellow");
    }); 
    $("input[type=text]").blur(function() {
      $(this).css("background-color", "white");
      updateLoansArray();
    });
      
    // set focus to first year: messes up codepen
    // $("#loan_year01").focus();
  
  } // end: function loadDoc()
  
  
  function toComma(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  let toMoney = (value) => {
    return `\$${toComma(value.toFixed(2))}`; 
  }
  function updateLoansArray() {
  
    // regex tester web site: https://www.regexpal.com/
    let yearP = /^(19|20)\d{2}$/;
    let amtP = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/;
    let intP = /^(0|)+(.[0-9]{1,5})?$/;
  
    let valid = true;
    if(!yearP.test($(`#loan_year01`).val())){
      valid = false;
      $(`#loan_year01`).css("background-color", "red");
    }
    for (i = 1; i < 6; i++) {
      if(!amtP.test($(`#loan_amt0${i}`).val())) {
        valid = false;
        $(`#loan_amt0${i}`).css("background-color", "red");
      } 
    }
    if(!intP.test($(`#loan_int01`).val())) {
      valid = false;
      $(`#loan_int01`).css("background-color", "red");
    }
  
    if(valid) {
      loans[0].loan_year = parseInt($("#loan_year01").val());
      for(var i=1; i<5; i++) {
        loans[i].loan_year = loans[0].loan_year + i;
      }
      for(i = 1; i<6; i++){
        let amt = parseFloat($(`#loan_amt0${i}`).val()).toFixed(2);
        loans[i-1].loan_amount = amt;
      }
      let rate = parseFloat($("#loan_int01").val());
      for(i=0; i<5; i++){
        loans[i].loan_int_rate = rate;
      }
      validateFields();
      updateForm();
      
    } // end: if
    
  } // end: function updateLoansArray()
  
  /*function updateForm(){
    var loan_year = loans[0].loan_year;
    var loan_amount = loans[0].loan_amount;
    var loan_int_rate = loans[0].loan_int_rate;
    var loan_bal = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
    var loan_bal_array = [];
    loan_bal_array.push(loan_bal);
    for(var i=1; i<5; i++) {
      loan_year = loans[i].loan_year;
      loan_amount = loans[i].loan_amount;
      loan_int_rate = loans[i].loan_int_rate;
      loan_bal = loan_bal + loan_amount * (1 + loan_int_rate);
      loan_bal_array.push(loan_bal);
    }
    var loan_bal_array_string = loan_bal_array.toString();
    document.getElementById("loan_bal_array").innerHTML = loan_bal_array_string;
    validateFields();
    //document.getElementById("loan_bal_array").innerHTML = loan_bal_array.toString();
  }  End: function updateForm() */

  let updateForm = () => {
    loanWithInterest = 0;
    let totalAmt = 0;
    for(i = 1; i < 6; i++) {
      $(`#loan_year0${i}`).val(loans[i - 1].loan_year);
      let amt = loans[i - 1].loan_amount; //
      $(`#loan_amt0${i}`).val(amt);
      totalAmt += parseFloat(amt);
      $(`#loan_int0${i}`).val(loans[i - 1].loan_int_rate);
      loanWithInterest 
        = (loanWithInterest + parseFloat(amt)) 
        * (1 + loans[0].loan_int_rate);
      $("#loan_bal0" + i).text(toMoney(loanWithInterest));
    }
    validateFields();
    int = loanWithInterest - totalAmt;
    $(`#loan_int_accrued`).text(toMoney(int));
    
  } // end: function updateForm()
  //Create function to store and retieve the loans array data using localStorage
  function storeLoansArray() {
    localStorage.setItem("loans", JSON.stringify(loans)); // Stores the array into localStorage
  }
  function retrieveLoansArray() {
    // Retrieve the array from localStorage if it exists
    if (localStorage.getItem("loans") !== null) {
      loans = JSON.parse(localStorage.getItem("loans"));
    }
    else{
      alert('Error: no saved values');
    }
  }

  function validateFields(){
    //Validate the loan year
    var loan_year = document.getElementById("loan_year01").value;
    if(loan_year < 0){ //If the loan year is less than 0, display an error message and return false
      alert("Loan year must be greater than 0.");
      return false;
    }
    //Validate the loan amount
    var loan_amount = document.getElementById("loan_amt01").value; 
    if(loan_amount < 0 || loan_amount > 1000000){ //If the loan amount is not between 0 and 1000000, display an error message and return false
      alert("Loan amount must be between 0 and 1000000");
      return false;
    }
    //Validate the loan interest rate
    var loan_int_rate = document.getElementById("loan_int01").value;
    if(loan_int_rate < 0 || loan_int_rate > 0.1){ //If the loan interest rate is not between 0 and 0.1, display an error message and return false
      alert("Loan interest rate must be between 0 and 0.1");
      return false;
    }
    return true;
  }

