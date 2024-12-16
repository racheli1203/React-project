
import { makeObservable, observable, computed, action, runInAction } from 'mobx'
const url = "http://localhost:8787"
class DataService {
    cntId = 1;
    listService = [
    {
        name:"Wedding dress rental",
        description:"Wedding dress rental of all types, dresses worn only a few times",
        price:"800-9000",
        duration:"fake data",
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-sgH-WXV6fF6JOb4-7cUOEXyk9FmhKfqeIQ&usqp=CAU"
    },
    {
        name:"Evening dress rental",
        description:"Evening dress rentaOf all types, all fabric secrets at discounted prices",
        price:"400-1000",
        duration:"fake data",
        imageUrl:"https://rachelsitbon.fashion/wp-content/uploads/2023/08/3Z4A0354-copy-645x968.jpg"
    },
    {
        name:"Sale of wedding dresses - evening",
        description:"Selling dresses from previous seasons at fair prices!",
        price:800,
        duration:"fake data",
        imageUrl:"https://rachelsitbon.fashion/wp-content/uploads/2023/08/3Z4A8322-copy-768x1152.jpg"
    },
    {
        name:"Counseling meeting",
        description:"Consultation meeting for measurement of wedding dressesPossibility of evening dress sewing advice",
        price:"200 shekels per hour",
        duration:"fake data",
        imageUrl:"https://www.ida-home.co.il/wp-content/uploads/2016/05/udig_160426_003.jpg"
    },
    ];
    constructor() {
        makeObservable(this, {
            listService: observable,
            initList: action,
            GetService: computed,
            AddService: action,
        });
        this.initList();
    }
    async initList() {
        try {
            const res = await fetch(`${url}/services`);
            const data = await res.json();
            runInAction(() => {
                this.listService = [...this.listService, ...data]; // Merge fetched data with the static list
            })
        }
        catch (err) {
            console.log(err);
        }
    }
    

    get GetService() {
        return this.listService;
    }

    async AddService(service) {

        try {

            const res = await fetch(`${url}/service`, {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(service)
            });
           
            this.listService.push({...service, id: this.cntId++})
        }
        catch (err) {
            console.log(err)
        }
    }
}
const serviceList = new DataService();
export default serviceList;