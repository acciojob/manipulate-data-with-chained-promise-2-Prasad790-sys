//your JS code here. If required.
function getNumbers() {
    return new Promise((resolve) => {
            resolve([1, 2, 3, 4]);
    });
}

getNumbers()
    .then((numbers) => {
        // Filter out odd numbers and update output after 1 second
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        setTimeout(() => {
            document.getElementById('output').textContent = `${evenNumbers.join(', ')}`;
        }, 1000);
        
        // Return the even numbers to chain the next promise
        return evenNumbers;
    })
    .then((evenNumbers) => {
        // Multiply even numbers by 2 and update output after 2 second
        const multipliedNumbers = evenNumbers.map(num => num * 2);
        setTimeout(() => {
            document.getElementById('output').textContent = `${multipliedNumbers.join(', ')}`;
        }, 2000);
    });