const init = () => {
    const inputForm = document.querySelector('form')
    inputForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        const input = document.querySelector('input#searchByID');

        fetch('http://localhost:3000/movies')
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    })
  
}

document.addEventListener('DOMContentLoaded', init);