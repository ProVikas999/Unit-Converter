 function convert() {
            var fromUnit = document.getElementById("fromUnit").value;
            var toUnit = document.getElementById("toUnit").value;
            var inputValue = parseFloat(document.getElementById("value").value);

            var conversions = {
                "m_to_km": 0.001,
                "m_to_cm": 100,
                "m_to_mm": 1000,
                "m_to_inch": 39.3701,
                "m_to_ft": 3.28084,
                "km_to_m": 1000,
                "cm_to_m": 0.01,
                "mm_to_m": 0.001,
                "inch_to_m": 0.0254,
                "ft_to_m": 0.3048,
                "ft_to_mm": 304.8
            };

            var conversionKey = fromUnit + "_to_" + toUnit;
            if (conversions.hasOwnProperty(conversionKey)) {
                var result = inputValue * conversions[conversionKey];
                document.getElementById("result").innerHTML = inputValue + " " + fromUnit + " = " + result + " " + toUnit;
            } else {
                document.getElementById("result").innerHTML = "Invalid conversion.";
            }
        }