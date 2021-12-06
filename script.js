const bouton = document.getElementById("button-addon2")



bouton.addEventListener("click",()=>{

  alert ()
    const ean = document.getElementById("EAN").value.trim()
  
    


    let url= ~`https://world.openfoodfacts.org/api/v0/product/3229820791074.json`
})




const bouton = document.getElementById("bnt-search")
bouton.addEventListener("click",()=>{
    const ean = documnt.getElementById("input-ean").value.trim()
    let url = 'https://world.openfoodfacts.org/api/v0.product/329820791074.json'
    axios.get(url).then(datas=>{
        const trouve = datas.data.status
        if(trouve == 0){
            alert("prduit non référencé")
            return
        }
        const produit = datas.data.product
        alert(prduit.product_name_fr)

        let html = 
        <artcile class="col-md-3">
            <div class="card">
                <img src="${product_image_url}" alt="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.product_name_fr}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${produit.brands}</h6>
                    <p class="card-text">${produit.nutriscore_grade}</p>
                    <button id="btn-suppr-"
                </div>
            </div>
        </artcile>

        var liste = document.getElementById("liste-produit")
        liste.innerHTML += html

        document.getElementsById("btn-suppr-" + produit.id).addEventListener("click",()=>{

        })
    })
})









