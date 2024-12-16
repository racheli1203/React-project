
import {makeObservable,observable,computed,action,runInAction,toJS } from 'mobx'
const url="http://localhost:8787"
class DataBusiness{
    
    cntId = 1;
    businessObject = { 
        id: "555",
        name: "My salon",
        address: "תל אביב רח' הירקון 12",
        email:"mySalon@gmail.com",
        phone: "052-8976541",
        owner: "דן כהן",
        logo: "https://balloons-r-us.co.il/wp-content/uploads/2016/10/balloons-r-us-logo.png",
        description: "the best ballons",
      };
    constructor(){
        makeObservable(this,{
            businessObject:observable,
            initList:action,
            GetDataBusiness:computed,
            AddBusiness:action,
            
        });
        this.initList();
    }
    
    async initList() {
        try {
            const res = await fetch(`${url}/businessData`);
            const data = await res.json();
            runInAction(() => {
                this.businessObject = [...this.businessObject, ...data]; // Merge fetched data with the static list
            })
        }
        catch (err) {
            console.log(err);
        }
    }
    
    get GetDataBusiness(){
        // return toJS(this.businessObject);
        return this.businessObject;
    }


    async AddBusiness(business)
    {
       
        try{
            const res=await fetch(`${url}/businessData`,{
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(business)
            });
            this.businessObject = { ...business, id:this.cntId++};

            // this.businessObject.push({...business, id: this.cntId++})
            
        }
        catch(err){
            console.log(err)
        }
    }

}
const businessStore =new DataBusiness();
export default businessStore ;