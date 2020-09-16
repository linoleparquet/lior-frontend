export class Visit {
    id: number;
    doctorId: number;
    doctorName: string;
    date: string;
    notes: string;

    constructor() {
        this.date = new Date().toISOString().slice(0, 10);
    }
}