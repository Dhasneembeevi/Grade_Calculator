const calculate = () => {
    let eng = document.getElementById('eng').value;
    let mat = document.getElementById('mat').value;
    let phy = document.getElementById('phy').value;
    let chem = document.getElementById('chem').value;
    let comp = document.getElementById('comp').value;

    if (eng < 0 || eng > 100) {
        alert("Please enter marks in range of 100")
    }
    if (mat < 0 || mat > 100) {
        alert("Please enter marks in range of 100")
    }
    if (phy < 0 || phy > 100) {
        alert("Please enter marks in range of 100")
    }
    if (chem < 0 || chem > 100) {
        alert("Please enter marks in range of 100")
    }
    if (comp < 0 || comp > 100) {
        alert("Please enter marks in range of 100")
    }
    else{
        let total = parseFloat(eng) + parseFloat(mat) + parseFloat(phy) + parseFloat(chem) + parseFloat(comp)
    let displayTotal = document.getElementById('total')
    displayTotal.innerHTML = `Total marks : ${total}`


    let avg = document.getElementById('average')
    let scoreAvg = total / 5
    avg.innerHTML = `Your Average marks are: ${scoreAvg}%`

   
    let grade = document.getElementById('grade')
    if (eng < 35 || mat < 35 || phy < 35 || chem < 35 || comp < 35) {
        grade.innerHTML = "You Got F Grade "
        grade.classList.add('grade-f');
    }
    else{
        if (scoreAvg >= 90) {
            grade.innerHTML = "You Got A Grade "
            grade.classList.add('grade-a');
        }
        else if (scoreAvg >= 80 && scoreAvg < 89) {
            grade.innerHTML = "You Got B Grade "
            grade.classList.add('grade-b');
        }
        else if (scoreAvg >= 70 && scoreAvg < 79) {
            grade.innerHTML = "You Got C Grade "
            grade.classList.add('grade-c');
        }
        else if (scoreAvg >= 60 && scoreAvg < 69) {
            grade.innerHTML = "You Got D Grade "
            grade.classList.add('grade-d');
        }
        else if (scoreAvg < 60 ) {
            grade.innerHTML = "You Got F Grade "
            grade.classList.add('grade-f');
        }
    }

    }

    

}

