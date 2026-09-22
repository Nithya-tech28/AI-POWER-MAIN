// AI Power Grid Project

document.addEventListener("DOMContentLoaded", function () {

    console.log("AI Power Grid Platform Loaded");

    const predictionForm = document.getElementById("predictionForm");

    if (predictionForm) {

        predictionForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const temperature =
                Number(document.getElementById("temperature").value);

            const humidity =
                Number(document.getElementById("humidity").value);

            const wind =
                Number(document.getElementById("wind").value);

            const solar =
                Number(document.getElementById("solar").value);

            const previousDemand =
                Number(document.getElementById("previousDemand").value);

            /*
                Temporary calculation for frontend testing.
                Later this will be replaced with the trained ML model.
            */

            const predictedDemand =
                previousDemand +
                (temperature * 1.5) +
                (humidity * 0.2) -
                (wind * 0.5) -
                (solar * 0.1);

            const finalDemand =
                Math.max(0, predictedDemand).toFixed(2);

            const resultBox =
                document.getElementById("resultBox");

            const resultValue =
                document.getElementById("resultValue");

            resultValue.textContent =
                finalDemand + " MW";

            resultBox.style.display = "block";

        });

    }

});