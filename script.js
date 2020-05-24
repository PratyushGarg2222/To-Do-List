var inpu = document.querySelector("input");
var inpuDisp = 1;
var inputdiv = document.querySelector("#input");

var plusButton = document.querySelector("#plusToDo");
var list = document.querySelector("#list");
var listCount = 0;

plusButton.addEventListener("click", function(){

    if(inpuDisp==1){

        $(inpu).fadeOut(200);
        inpu.value = '';
        inpuDisp = 0;

    }    
    else{

        $(inpu).fadeIn(300);
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
    
    spans[0].style.width = "0";
    spans[0].style.opacity = "0";

    n.addEventListener("mouseover", function(){

            spans[0].style.width = "10%";
            spans[0].style.opacity = "1";

    });

    n.addEventListener("mouseout", function(){

        spans[0].style.width = "0";
        spans[0].style.opacity = "0";

    });

    spans[0].addEventListener("click", function(){

        var d = document.querySelector("#list").querySelectorAll("div");
        var z;

        for(var i=0; i<d.length; i++){

            if(d[i] == n){

                z = i;

            }
           
        }

         $(n).fadeOut(500, function(){
            
            for(var i = z +1; i<d.length; i++){

                if(d[i].classList.contains("itemOdd")){
    
                    d[i].classList.remove("itemOdd");
                    d[i].classList.add("itemEven");
    
                }
                else{
    
                    d[i].classList.remove("itemEven");
                    d[i].classList.add("itemOdd");
                }
    
             }
         
         
            n.remove();
         })
       
         listCount--;

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

