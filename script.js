//your JS code here. If required.
function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        },0);
    });
}

getNumbers()
    .then((numbers) => {
        // Filter out odd numbers and update output after 1 second
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        setTimeout(() => {
            document.getElementById('output').textContent = `Even numbers: ${evenNumbers.join(', ')}`;
        }, 1000);
        
        // Return the even numbers to chain the next promise
        return evenNumbers;
    })
    .then((evenNumbers) => {
        // Multiply even numbers by 2 and update output after 2 seconds
        const multipliedNumbers = evenNumbers.map(num => num * 2);
        setTimeout(() => {
            document.getElementById('output').textContent = `Multiplied numbers: ${multipliedNumbers.join(', ')}`;
        }, 2000);
    });