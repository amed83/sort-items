

// const obj = {
//     dhl_1:'DHL 1',
//     dhl_2:'DHL 2',
//     dhl_3:'DHL 3',
//     tnt_1:'TNT 1',
//     tnt_2:'TNT 2',
//     tnt_3:'TNT 3',
//     ups_1:'UPS 1',
//     ups_2:'UPS 2',
//     dsv_1:'DSV 1'
// }
// 
// let product = 'tnt_3'
// 
// let newProd = Object.keys(obj).filter(key=>key===product)
// 
// console.log(obj[product])

const imgName=(product)=>{
    let brands = ['ups','dhl','tnt','dsv']
    let imgName;
    for (let i=0; i<brands.length; i++){
        
        if( product.includes(brands)===true) {
            imgName = brands[i]
        }else{
            return dioporco
        }    
    }

    return imgName
}



console.log(imgName('dhl_2'))