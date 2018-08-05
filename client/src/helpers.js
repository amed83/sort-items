

const imgName=(product)=>{
    let brands = ['ups','dhl','tnt','dsv']
    let imgName;
    for (let i=0; i<brands.length; i++){
        if(product.includes(brands[i])){
            imgName = brands[i]
        }    
    }

    return imgName
}

module.exports= imgName