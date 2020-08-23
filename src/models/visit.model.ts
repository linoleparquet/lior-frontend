export class Visit {
    id: number;
    doctorId: number;
    date: string;
    note: string;
    doctor: string;

    constructor() {
        this.id = null;
        this.doctorId = null;
        this.date = new Date().toISOString().slice(0, 10);
        this.note = null;
        this.doctor = null;
    }
}