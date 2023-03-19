function refreshValues(){
    let FGGL = sessionStorage.getItem("FAvSalaryGGL");
    let MGGL = sessionStorage.getItem("MAvSalaryGGL");

    let FAPPL = sessionStorage.getItem("FAvSalaryAPPL");
    let MAPPL = sessionStorage.getItem("MAvSalaryAPPL");

    let FOMC = sessionStorage.getItem("FAvSalaryOMC");
    let MOMC = sessionStorage.getItem("MAvSalaryOMC");

    let FBAC = sessionStorage.getItem("FAvSalaryBAC");
    let MBAC = sessionStorage.getItem("MAvSalaryBAC");

    let FCVS = sessionStorage.getItem("FAvSalaryCVS");
    let MCVS = sessionStorage.getItem("MAvSalaryCVS");

    let FUNH = sessionStorage.getItem("FAvSalaryUNH");
    let MUNH = sessionStorage.getItem("MAvSalaryUNH");

    console.log("Female google: " + FGGL);
    console.log("Male google: " + MGGL);
    console.log("Female apple: " + FAPPL);
    console.log("male apple: " + MAPPL);
    console.log("Female omnicron: " + FOMC);
    console.log("Male omnicron: " + MOMC);
    console.log("Female bank of america: " + FBAC);
    console.log("Male bank of america: " + MBAC);
    console.log("Female CVS: " + FCVS);
    console.log("Male CVS: " + MCVS);
    console.log("Female UnitedHealth group: " + FUNH);
    console.log("Male UnitedHealth group: " + MUNH);
}