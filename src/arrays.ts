

type Chai={
    price:number;
    name:string;
    masala:number;
    isHot:boolean;

}
const updateChai=(updates:Partial<Chai>) =>{
  console.log("updating chai with:",updates)
}
updateChai({price:25})
updateChai({isHot:false})
updateChai({})