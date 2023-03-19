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

  let female = 0;
  let male = 0;
  let nb = 0;

  const FsalaryGGL = [];
  const MsalaryGGL = [];

  const FsalaryAPPL = [];
  const MsalaryAPPL = [];

  const FsalaryOMC = [];
  const MsalaryOMC = [];

  const FsalaryBAC = [];
  const MsalaryBAC = [];

  const FsalaryCVS = [];
  const MsalaryCVS = [];

  const FsalaryUNH = [];
  const MsalaryUNH = [];

  

function storeValues(){
  // COLLECTING THE DATA
  let email = document.getElementById("email").value;
  let salaryInput = document.getElementById("salary").value;
  let company = document.getElementById("topic").value;

  let salary = 25000;
  
  if(salaryInput=="25,000 - 40,000"){
    salary = 32500
  }
  else if(salaryInput=="40,000 - 60,000"){
    salary = 50000
  }
  else if(salaryInput=="60,000 - 80,000"){
    salary = 70000
  }
  else if(salaryInput=="80,000 - 100,000"){
    salary = 90000
  }
  else if(salaryInput==" > 100,000"){
    salary = 120000
  }

  //add values to the list if email is not duped
  if(!emailList.includes(email)){
    if (document.getElementById("FemaleBubble").checked || document.getElementById("NBBubble").checked){
      female ++;
      if(company=="Google"){
        FsalaryGGL.push(salary);
      }
      else if(company=="Apple"){
        FsalaryAPPL.push(salary);
      }
      else if(company=="Omnicon Group"){
        FsalaryOMC.push(salary);
      }
      else if(company=="Bank of America"){
        FsalaryBAC.push(salary);
      }
      else if(company=="CVS Health Corp."){
        FsalaryCVS.push(salary);
      }
      else if(company=="UnitedHealth Group Inc."){
        FsalaryUNH.push(salary);
      }
    }
    else if (document.getElementById("MaleBubble").checked){
      male ++;
      if(company=="Google"){
        MsalaryGGL.push(salary);
      }
      else if(company=="Apple"){
        MsalaryAPPL.push(salary);
      }
      else if(company=="Omnicon Group"){
        MsalaryOMC.push(salary);
      }
      else if(company=="Bank of America"){
        MsalaryBAC.push(salary);
      }
      else if(company=="CVS Health Corp."){
        MsalaryCVS.push(salary);
      }
      else if(company=="UnitedHealth Group Inc."){
        MsalaryUNH.push(salary);
      }
    }

  
    emailList.push(email);

  
    console.log(emailList);
    console.log(company);
    console.log(salary)



    //DOING THE CALCULATIONS & SAVING THE VALUES TO SESSION STORAGE (average salary for males vs gender minorities)

    //females
      sessionStorage.setItem("FAvSalaryGGL", JSON.stringify(FsalaryGGL.reduce((partialSum, a) => partialSum + a, 0))/(FsalaryGGL.length));
      sessionStorage.setItem("FAvSalaryAPPL", JSON.stringify(FsalaryGGL.reduce((partialSum, a) => partialSum + a, 0))/(FsalaryAPPL.length));
      sessionStorage.setItem("FAvSalaryOMC", JSON.stringify(FsalaryGGL.reduce((partialSum, a) => partialSum + a, 0))/(FsalaryOMC.length));
      sessionStorage.setItem("FAvSalaryBAC", JSON.stringify(FsalaryGGL.reduce((partialSum, a) => partialSum + a, 0))/(FsalaryBAC.length));
      sessionStorage.setItem("FAvSalaryCVS", JSON.stringify(FsalaryGGL.reduce((partialSum, a) => partialSum + a, 0))/(FsalaryCVS.length));
      sessionStorage.setItem("FAvSalaryUNH", JSON.stringify(FsalaryGGL.reduce((partialSum, a) => partialSum + a, 0))/(FsalaryUNH.length));
    //males
      sessionStorage.setItem("MAvSalaryGGL", JSON.stringify(FsalaryGGL.reduce((partialSum, a) => partialSum + a, 0))/(MsalaryGGL.length));
      sessionStorage.setItem("MAvSalaryAPPL", JSON.stringify(FsalaryGGL.reduce((partialSum, a) => partialSum + a, 0))/(MsalaryAPPL.length));
      sessionStorage.setItem("MAvSalaryOMC", JSON.stringify(FsalaryGGL.reduce((partialSum, a) => partialSum + a, 0))/(MsalaryOMC.length));
      sessionStorage.setItem("MAvSalaryBAC", JSON.stringify(FsalaryGGL.reduce((partialSum, a) => partialSum + a, 0))/(MsalaryBAC.length));
      sessionStorage.setItem("MAvSalaryCVS", JSON.stringify(FsalaryGGL.reduce((partialSum, a) => partialSum + a, 0))/(MsalaryCVS.length));
      sessionStorage.setItem("MAvSalaryUNH", JSON.stringify(FsalaryGGL.reduce((partialSum, a) => partialSum + a, 0))/(MsalaryUNH.length));

    //did session storage work?
    console.log("is this number the same as above? if so ss worked")
    console.log(JSON.parse(sessionStorage.getItem("FsalaryGGL")));


  }
}