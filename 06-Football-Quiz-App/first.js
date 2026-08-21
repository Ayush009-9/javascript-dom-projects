 const form = document.querySelector('form');
 const answer = {
    q1: "Brazil",
    q2: "Lionel Messi",
    q3: "Real Madrid",
    q4: "Cristiano Ronaldo",
    q5: "Argentina"
};

 form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const data = new FormData(form);
    let finalScore = 0;

    for(let [name,value] of data.entries()){

        if(answer[name]==value)
            finalScore++;

    }
    document.getElementById("result").textContent=`Your score is ${finalScore} out of five`;
    form.reset();
 })