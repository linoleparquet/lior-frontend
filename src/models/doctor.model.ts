export class Doctor {
    id: number;
    name: string;
    surname: string;
    city: string;
    department: number;
    periodicity: number;
    lastVisitId: number;
    nextVisitDate: string;

    constructor() {
        this.id = null;
        this.name = null;
        this.surname = null;
        this.city = null;
        this.department = null;
        this.periodicity = null;
        this.lastVisitId = null;
        this.nextVisitDate = null;
    }
}