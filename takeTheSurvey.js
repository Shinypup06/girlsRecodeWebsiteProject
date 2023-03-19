var subjectObject = {
    "Technology": {
      "Google": ["Data Analyst", "Software Engineer", "Operations Manager", "Data Scientist", "Cybersecurity Analysist", "Customer Support", "Tech Support", "IT Coordinator", "UX/UI Designer"],
      "Apple": ["Data Analyst", "Software Engineer", "Operations Manager", "Data Scientist", "Cybersecurity Analysist", "Customer Support", "Tech Support", "IT Coordinator", "UX/UI Designer"],

    },
    "Buisness/Finance": {
      "Omnicom Group": ["Marketing", "Advertisment", "Sales", "Finance Manager", "Accountant", "Tax associate", "Data analyst", "Investment Banker", "Insurance advisor"],
      "Bank of America": ["Marketing", "Advertisment", "Sales", "Finance Manager", "Accountant", "Tax associate", "Data analyst", "Investment Banker", "Insurance advisor"]
      
    },
    "Healthcare": {
      "CVS Health Corp.": ["Pharmacist", "Nurse", "Doctor", "Therapist", "Anesthesiologist", "Surgeon", "Pharmacy technician", "Nutritionist"],
      "UnitedHealth Group Inc.": ["Pharmacist", "Nurse", "Doctor", "Therapist", "Anesthesiologist", "Surgeon", "Pharmacy technician", "Nutritionist"]
    }
  }
  window.onload = function() {
    var subjectSel = document.getElementById("subject");
    var topicSel = document.getElementById("topic");
    var chapterSel = document.getElementById("chapter");
    for (var x in subjectObject) {
      subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function() {
      //empty Chapters- and Topics- dropdowns
      chapterSel.length = 1;
      topicSel.length = 1;
      //display correct values
      for (var y in subjectObject[this.value]) {
        topicSel.options[topicSel.options.length] = new Option(y, y);
      }
    }
    topicSel.onchange = function() {
      //empty Chapters dropdown
      chapterSel.length = 1;
      //display correct values
      var z = subjectObject[subjectSel.value][this.value];
      for (var i = 0; i < z.length; i++) {
        chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
      }
    }
  }

 const emailList = [];
 const salaryList = [];
 let female = 0;
 let male = 0;
 let nb = 0;


function storeValues(){
  let email = document.getElementById("email").value;
  let salary = document.getElementById("salary").value;


  if (document.getElementById("FemaleBubble").checked){
    female ++;
  }
  else if (document.getElementById("MaleBubble").checked){
    male ++;
  }
  else{
    nb ++;
  }
  
  emailList.push(email);
  salaryList.push(salary);
  
  console.log(male);
}