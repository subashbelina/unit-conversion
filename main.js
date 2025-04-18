document.addEventListener('DOMContentLoaded', () => {
    // Conversion functions
    const convertTemperature = (celsius) => (celsius * 9/5) + 32;
    const convertWeight = (kilos) => kilos * 2.205;
    const convertDistance = (km) => km / 1.609;

    // Add input validation and formatting
    const formatNumber = (num) => Number(num.toFixed(2));

    // Generic conversion handler
    const handleConversion = (inputId, outputId, conversionFn) => {
        const input = document.getElementById(inputId);
        const output = document.getElementById(outputId);
        
        if (input.value === '') {
            output.value = '';
            return;
        }
        
        const inputValue = parseFloat(input.value);
        if (!isNaN(inputValue)) {
            output.value = formatNumber(conversionFn(inputValue));
        }
    };

    // Event listeners with input validation
    const addConversionListener = (buttonId, inputId, outputId, conversionFn) => {
        const button = document.getElementById(buttonId);
        const input = document.getElementById(inputId);
        
        // Convert on button click
        button.addEventListener('click', () => {
            handleConversion(inputId, outputId, conversionFn);
        });

        // Convert on Enter key
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleConversion(inputId, outputId, conversionFn);
            }
        });

        // Clear output when input is empty
        input.addEventListener('input', () => {
            const output = document.getElementById(outputId);
            if (input.value === '') {
                output.value = '';
            }
        });
    };

    // Initialize all converters
    addConversionListener('convertTemp', 'celsius', 'fahrenheit', convertTemperature);
    addConversionListener('convertWeight', 'kilo', 'pounds', convertWeight);
    addConversionListener('convertDistance', 'km', 'miles', convertDistance);

    // Add visual feedback for buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // Add input validation
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('input', function() {
            if (this.value < 0) {
                this.value = 0;
            }
        });
    });

    // Smooth scroll for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('