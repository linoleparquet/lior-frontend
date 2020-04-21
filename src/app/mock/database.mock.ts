import { Visit } from 'models/visit.model';
import { Doctor } from 'models/doctor.model';

export const DOCTORS: Doctor[] = [
    {
        "id": 1,
        "name": "Didier",
        "surname": "Raoult",
        "town": "Marseille",
        "departement": 13,
        "timePeriod": 12,
        "lastVisitId": 1,
        "nextVisitDate": new Date("2001-01-02")
    },
    {
        "id": 2,
        "name": "Dominique-Jean",
        "surname": "Larray",
        "town": "Paris",
        "departement": 75,
        "timePeriod": 1,
        "lastVisitId": 2,
        "nextVisitDate": new Date("2020-05-21")
    }
];

export const VISITS: Visit[] = [
    {
        "id": 1,
        "doctorId": 1,
        "date": "2000-01-02",
        "note": "haha c'était super avec Didier"
    },
    {
        "id": 2,
        "doctorId": 2,
        "date": "2020-04-20",
        "note": "Dominque Jean pas ouf ouf il parlait pas trop, peut être parcequ'il est mort jsp"
    },
    {
        "id": 3,
        "doctorId": 1,
        "date": "2050-01-02",
        "note": "haha c'était super avec Didier"
    }
]