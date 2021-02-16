async function loadCSV(){
    const res = await fetch("/getData");
    const data = await res.text();
    
    document.getElementById('out').textContent = data.toString();
}

loadCSV();
