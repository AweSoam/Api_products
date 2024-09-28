axios.get("https://fakestoreapi.com/products")
    .then((res) => {
        return res.data.map((ele) => {
            console.log(ele)
            let con = document.getElementsByTagName("div")[0]
            let div = document.createElement("div")
            div.setAttribute("class", "card")



            div.innerHTML = `
                        <img src="${ele.image}" class="card-img-top" alt="...">
                        
                      
                        <div class="card-body">
                            <h4 class="card-title">${ele.title} </h4>
                            <p class="card-text"> ${ele.description} </p>
                            <div class="bar">
                            <p> ${ele.category} </p>
                            <p>  ${ele.rating.rate}<span class = "fa fa-star fa-fade checked"></span> 
                                 (${ele.rating.count} )</p>
                            </div>
                            <div class="bar">
                            <p class="price"><span>&#8377</span> ${ele.price} </p>
                            <button type="button" class="btn btn-success">
                         
                            <span class=”glyphicon glyphicon-shopping-cart”> </span>
                        Add to Cart</button>
                            </div>
                        </div> 
                        
                `
            con.appendChild(div)
        })
    })
    .catch((err) => console.log(err))
