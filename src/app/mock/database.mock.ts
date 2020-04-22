import { Visit } from 'models/visit.model';
import { Doctor } from 'models/doctor.model';

export const DOCTORS: Doctor[] = [
    {
        "id": 1,
        "name": "Didier",
        "surname": "Raoult",
        "town": "Marseille",
        "department": 13,
        "periodicity": 12,
        "lastVisitId": 1,
        "nextVisitDate": "2020-04-21"
    },
    {
        "id": 2,
        "name": "Dominique-Jean",
        "surname": "Larray",
        "town": "Paris",
        "department": 75,
        "periodicity": 1,
        "lastVisitId": 2,
        "nextVisitDate": "2020-04-22"
    },
    {
        "id": 3,
        "name": "Maurice",
        "surname": "Teboul",
        "town": "Pechabou",
        "department": 3,
        "periodicity": 6,
        "lastVisitId": 3,
        "nextVisitDate": "2001-01-02"
    },
    {
        "id": 4,
        "name": "Jean",
        "surname": "Valjean",
        "town": "Paris",
        "department": 75,
        "periodicity": 1,
        "lastVisitId": 4,
        "nextVisitDate": "2000-05-21"
    },
    {
        "id": 5,
        "name": "Patrick",
        "surname": "Nian",
        "town": "Afrique",
        "department": 37,
        "periodicity": 6,
        "lastVisitId": 5,
        "nextVisitDate": "2501-01-02"
    },
    {
        "id": 6,
        "name": "Suzanne",
        "surname": "Valadon",
        "town": "Paris",
        "department": 75,
        "periodicity": 1,
        "lastVisitId": 6,
        "nextVisitDate": "2520-05-21"
    },
    {
        "id": 7,
        "name": "Maurice",
        "surname": "Léléphan",
        "town": "Boulogne sur Mer",
        "department": 75,
        "periodicity": 1,
        "lastVisitId": 7,
        "nextVisitDate": "0"
    },
    {
        "id": 8,
        "name": "Eric",
        "surname": "Ramzi",
        "town": "La lune",
        "department": 75,
        "periodicity": 1,
        "lastVisitId": 6,
        "nextVisitDate": "0"
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

export const DOCTOR_TABLE_HEADER: String[] = ["name", "surname", "town", "department", "periodicity", "last visit", "next visit"];