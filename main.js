let cartItems=[];



function loginLogout(){
    let login=document.querySelector("#right");
    //getting one user data from local storage
    let oneUserData=JSON.parse(localStorage.getItem("oneuser"));
    console.log(oneUserData);

    //user i formation
    if(oneUserData){
        //providing information inside right division
        login.innerHTML=`<span>${oneUserData.first}</span> <a href="./main.html"> <button id="logout">Logout</button></a>` 
    
        //accesing logut button 
        let logout=document.querySelector("#logout");
        //logout event  
    
        logout.addEventListener("click",(e)=>{
    
            //removing one user from local storage
            localStorage.removeItem("oneuser");
            
        })
    }
}
loginLogout();


///fetching data from server
async function allProductsData( ) {

    let datafromserver= await fetch ("https://www.shoppersstack.com/shopping/products/alpha");
    let converteddata=await datafromserver.json();
    //only data property
    let allData=converteddata.data;
    console.log(allData)
    //filtered data for men

    let menData=allData.filter((e)=>{

        if(e.category=="men")
        {
            return e;
        }
    })

     //filtered data for electronics
    let Electronics=allData.filter((e)=>{

        if(e.category=="electronics")
        {
            return e;
        }
    })

     //filtered data for kids
    let kids=allData.filter((e)=>{

        if(e.category=="kids")
        {
            return e;
        }
    })

     //filtered data for women
    let women=allData.filter((e)=>{

        if(e.category=="women")
        {
            return e;
        }
    });


    let MaleOutput=document.querySelector("#malecont");

    //male data output
    menData.map((e)=>{
        MaleOutput.innerHTML+= ` <div id="${e.productId}">
                <img src= "${e.productImageURLs[0] }" alt=""/>
               
                <h3>${e.name}</h3>
                <h2>Price: ${e.price}</h2>
                <h2>Ratings: ${e.rating}</h2>
                <button>Add To Cart</button>
            </div> `;
    });


    let FeMaleOutput=document.querySelector("#femalecont");

    //female data output
    women.map((e)=>{
        FeMaleOutput.innerHTML+= ` <div id="${e.productId}" >
                <img src= "${e.productImageURLs[0] }" alt=""/>
               
                <h3>${e.name}</h3>
                <h2>Price: ${e.price}</h2>
                <h2>Ratings: ${e.rating}</h2>
                <button>Add To Cart</button>
            </div> `;
    });

    //kids data output
    let Kidsoutput=document.querySelector("#kidscont");
    kids.map((e)=>{
        Kidsoutput.innerHTML+= ` <div id="${e.productId}">
                <img src= "${e.productImageURLs[0] }" alt=""/>
               
                <h3>${e.name}</h3>
                <h2>Price: ${e.price}</h2>
                <h2>Ratings: ${e.rating}</h2>
                <button>Add To Cart</button>
            </div> `;
    });

    //electronics data output
    let Electronicss=document.querySelector("#electronicscont");
    Electronics.map((e)=>{
        Electronicss.innerHTML+= ` <div id="${e.productId}">
                <img src= "${e.productImageURLs[0] }" alt=""/>
               
                <h3>${e.name}</h3>
                <h2>Price: ${e.price}</h2>
                <h2>Ratings: ${e.rating}</h2>
                <button>Add To Cart</button>
            </div> `;
    });



    console.log(menData);
    console.log(women);
    console.log(kids);
    console.log(Electronics);



    //search Results

    let input=document.querySelector("input");    //to get value
    let searchBtn=document.querySelector("#searchBtn");    //when to display
    let searchResult=document.querySelector("#searchResult");   //where to display

    searchBtn.addEventListener("click",(e)=>{

        searchResult.innerHTML="";
        allData.map((e)=>{
            if( e.name.toLowerCase().includes(input.value.trim().toLowerCase())){
                searchResult.innerHTML += ` <div id="${e.productId}">
                <img src= "${e.productImageURLs[0] }" alt=""/>
               
                <h3>${e.name}</h3>
                <h2>Price: ${e.price}</h2>
                <h2>Ratings: ${e.rating}</h2>
                <button>Add To Cart</button>
            </div> `;

            }
        })

    });


    //accessing all add to cart button

    let main=document.querySelector("main");
    let allBtn=main.querySelectorAll("button");
    console.log(allBtn);


    allBtn.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            console.log(btn.parentElement);
            
        })
    })
    
    
}
allProductsData();
