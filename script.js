var inpu = document.querySelector("input");
var inpuDisp = 1;
var inputdiv = document.querySelector("#input");

var plusButton = document.querySelector("#plusToDo");
var list = document.querySelector("#list");
var listCount = 0;

plusButton.addEventListener("click", function(){

    if(inpuDisp==1){

        inpu.style.display = "none";
        inpu.value = '';
        inpuDisp = 0;

    }    
    else{

        inpu.style.display = "block";
        inpuDisp = 1;

    }

});

function addToList( tod ){

    var n = document.createElement("div");

    if(listCount%2==0){

        n.classList.add("itemOdd");

    }
    else
        n.classList.add("itemEven");

    listCount++;

    var s = document.createElement("span");
    s.classList.add("delete-button");
    s.innerHTML = "<i class=\"fas fa-trash-alt smallButton\"></i>";

    n.appendChild(s);

    var s2 = document.createElement("span");
    s2.classList.add("todoText");

    s2.textContent = tod;

    n.appendChild(s2);

    var spans = n.childNodes;
    
    spans[0].style.display = "none";

    n.addEventListener("mouseover", function(){

        spans[0].style.display = "inline-block";

    });

    n.addEventListener("mouseout", function(){

        spans[0].style.display = "none";

    });

    spans[0].addEventListener("click", function(){

        n.remove();

    });

    spans[1].addEventListener("click", function(){

        this.classList.toggle("done");

    })

    list.appendChild(n);


}

document.addEventListener("keypress", function(e){

    if(e.keyCode == 13){

       if(inpu.value != ''){

            addToList(inpu.value);
            inpu.value = '';


       }

    }

});

