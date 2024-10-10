const paragraph = document.getElementById("p");
const searchBtn = document.getElementById('searchBtn');
const countDisplay = document.getElementById('countDisplay');  

searchBtn.addEventListener('click', () => {
    let input = document.getElementById('input').value;

    if (input !== "") {
        let regExp = new RegExp(input, 'gi'); 
        
        
        paragraph.innerHTML = paragraph.textContent.replace(regExp, "<mark>$&</mark>");
        
        let matches = paragraph.textContent.match(regExp);
        let count = matches ? matches.length : 0; 
        
        countDisplay.innerText = `Found ${count} occurrences of "${input}"`;
        
    } else {
       
        countDisplay.innerText = "Please enter a word to search.";
    }
});
