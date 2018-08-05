import React, {Component} from 'react'
import axios from 'axios'
import Dashboard from './Dashboard'
import imgName from './helpers'

const productsToShow={
    dhl_1:'DHL 1',
    dhl_2:'DHL 2',
    dhl_3:'DHL 3',
    tnt_1:'TNT 1',
    tnt_2:'TNT 2',
    tnt_3:'TNT 3',
    ups_1:'UPS 1',
    ups_2:'UPS 2',
    dsv_1:'DSV 1'
}


class DashboardContainer extends Component {

        state={
            items:[],
            checked:false,
            itemClicked:'',
            price:false,
            sortedTime:[],
            time:false,
            sortedPrice:[]
        }
    componentDidMount(){
        axios.get('/prod')
         .then(data=> {
             let items=data.data.items
             if(items.length>0){  
               this.setState({items})
           }
      }).catch(err=> console.log('error ', err)) 
   }
   
   sortPrice(){
       const {items}= this.state
       const sortPrice = items.slice().sort((a,b)=>{
           return a.cost>b.cost
       })
      this.setState({sortedPrice:sortPrice,price:true})
   }  
   
   sortSpeed(){
       const {items}= this.state
       const sortSpeed = items.slice().sort((a,b)=>{
           return a.lead_time>b.lead_time
       })
      this.setState({sortedTime:sortSpeed,time:true})
   }
   
   handleSelection(event){
   }
     
    render(){

        const {price,items,time,sortedPrice,sortedTime}=this.state
        // const items = price ? this.state.sortedTime : items
        let itemsList;
        let buildList
        if(items.length>0){
            buildList = (items)=>{
                   itemsList= items.map((item,index)=>{      
                           let brand =  imgName(item.product)
                             let product= productsToShow[item.product]
                             return(
                                 <div key = {index}className="items-list__container">
                                     <ul className="items-list__list" item={index} onClick={this.handleSelection.bind(this)}>
                                         <li><b>{product} </b></li>
                                         <li><b>Price </b></li>
                                         <li><b><span className="items-list__figures">{item.cost} </span>
                                            <span className="items-list__currency">{item.currency}</span> </b></li>
                                         <li><b>Lead time {item.lead_time} Days </b></li>
                                         <img className="items-list__img" src={require(`./img/${brand}.svg`)} alt="dhl img"/>    
                                     </ul>     
                                 </div>
                             )
                         })
                return itemsList
           }
        }
        const child = items.length>0 ? <Dashboard items={buildList(items)}/> : ""
        const itemsOriginal= items.length>0 && !price ? <Dashboard items={buildList(items)}/> : ""
        const itemsOriginal2= items.length>0 && !time ? <Dashboard items={buildList(items)}/> : ""
        const itemsPrice= sortedPrice.length> 0 ? <Dashboard items={buildList(sortedPrice)}/> : ""
        const itemsTime= sortedTime.length> 0 ? <Dashboard items={buildList(sortedTime)}/> : ""
    
        return(
            <div className='app-container__dashboard'>
                <div className='btn__container'>
                    <button className='btn__button'
                     onClick={this.sortPrice.bind(this)}>Price</button>
                 <button className='btn__button'
                     onClick={this.sortSpeed.bind(this)}>Time</button>
                </div>
                
                {itemsOriginal}
                {itemsPrice }
                
                {itemsOriginal2}
                {itemsTime}
                
            </div>
        )
    }
}


export default DashboardContainer


