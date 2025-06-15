    function calculateBMI() {
      const height = parseFloat(document.getElementById("height").value);
      const weight = parseFloat(document.getElementById("weight").value);
      const resultDiv = document.getElementById("result");

     
      resultDiv.textContent = "";

     

      if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.textContent = "Please enter valid, positive numbers.";
        resultDiv.style.color = "red";
        return;
      }


      const bmi = (weight / (height * height)).toFixed(2);
      let status = "";

      
      if (bmi < 18.5) {
        status = "Underweight";
      } else if (bmi < 25) {
        status = "Normal";
      } else if (bmi < 30) {
        status = "Overweight";
      } else {
        status = "Obese";
      }

      resultDiv.style.color = "black";
      resultDiv.innerHTML = `Your BMI is <strong>${bmi}</strong><br>Status: <strong>${status}</strong>`;
    }

    function resetForm() {
      document.getElementById("height").value = "";
      document.getElementById("weight").value = "";
      document.getElementById("result").textContent = "";
    }
