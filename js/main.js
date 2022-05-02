const list = document.querySelector(".list");
/* from 1 to 100 */
for (let i = 1; i<=100; i++){
    const element = document.createElement("li");

    element.classList.add("item");
    element.innerText = i;
    list.append(element)
    if((i%3 === 0) && (i%5 === 0)){
        console.log("FizzBuzz");
        element.classList.add("both");
        element.innerText = "FizzBuzz";
    }else if (i%5 === 0){
        console.log("Buzz");
        element.classList.add("multiple-5");
        element.innerText = "Buzz";
    }else if (i%3 === 0){
        console.log("Fizz");
        element.innerText = "Fizz";
        element.classList.add("multiple-3");
    }else{
        console.log(i);
        element.classList.add("ordinary");
    }
    
}