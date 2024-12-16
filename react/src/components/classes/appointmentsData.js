
import { makeObservable, observable, computed, action, runInAction } from 'mobx'
const url = "http://localhost:8787"
class DataAppointments {
    cntId = 1;
    listAppointmemt = [];
    constructor() {
        makeObservable(this, {
            listAppointmemt: observable,
            initList: action,
            GetAppoiintments: computed,
            AddAppointments: action,
        });
        this.initList();
    }
    async initList() {
        try {
            const res = await fetch(`${url}/appointments`);
            const data = await res.json();
            runInAction(() => {
                this.listAppointmemt = data;
            })
        }
        catch (err) {
            console.log(err);
        }
    }
    async AddAppointments(appointment) {

        try {

            const res = await fetch(`${url}/appointment`, {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(appointment)
            });

            this.listAppointmemt.push({ ...appointment, id: this.cntId++ })
        }
        catch (err) {
            console.log(err)
        }
    }

    get GetAppoiintments() {
        return this.listAppointmemt;
    }
}

const appointmentList = new DataAppointments();
export default appointmentList;