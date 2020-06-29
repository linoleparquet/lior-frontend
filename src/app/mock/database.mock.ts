import { Visit } from 'models/visit.model';
import { Doctor } from 'models/doctor.model';

export const DOCTORS: Doctor[] = [
    {
        "id": 1,
        "name": "Didier",
        "surname": "Raoult",
        "city": "Marseille",
        "department": 13,
        "periodicity": 12,
        "lastVisitId": 1,
        "nextVisitDate": "2020-04-21"
    },
    {
        "id": 2,
        "name": "Dominique-Jean",
        "surname": "Larray",
        "city": "Paris",
        "department": 75,
        "periodicity": 1,
        "lastVisitId": 2,
        "nextVisitDate": "2020-04-22"
    },
    {
        "id": 3,
        "name": "Maurice",
        "surname": "Teboul",
        "city": "Pechabou",
        "department": 3,
        "periodicity": 6,
        "lastVisitId": 3,
        "nextVisitDate": "2001-01-02"
    },
    {
        "id": 4,
        "name": "Jeannnnnnnnnn",
        "surname": "Valjean",
        "city": "Paris",
        "department": 75,
        "periodicity": 1,
        "lastVisitId": 4,
        "nextVisitDate": "2000-05-21"
    },
    {
        "id": 5,
        "name": "Patrick",
        "surname": "Nian",
        "city": "Afrique",
        "department": 37,
        "periodicity": 6,
        "lastVisitId": 5,
        "nextVisitDate": "2501-01-02"
    },
    {
        "id": 6,
        "name": "Suzanne",
        "surname": "Valadon",
        "city": "Paris",
        "department": 75,
        "periodicity": 1,
        "lastVisitId": 6,
        "nextVisitDate": "2520-05-21"
    },
    {
        "id": 7,
        "name": "Maurice",
        "surname": "Léléphan",
        "city": "Boulogne sur Mer",
        "department": 75,
        "periodicity": 1,
        "lastVisitId": 7,
        "nextVisitDate": "0"
    },
    {
        "id": 8,
        "name": "Eric",
        "surname": "Ramzi",
        "city": "La lune",
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
        "note": "The  classic courtroom  adventure series  that has  sold  over  6.7\n" +
            "million copies worldwide is finally here. Become Phoenix Wright and\n" +
            "experience the thrill of battle as you fight to save  your innocent\n" +
            "clients in a court of law. Play all 14 episodes, spanning the first\n" +
            "three  games,  in one  gorgeous collection.  Solve  the  intriguing\n" +
            "mysteries  behind  each  case  and  witness  the  final  truth  for\n" +
            "yourself!"
    }
]

export const DOCTOR_TABLE_HEADER: String[] = ["Name", "Surname", "City", "Department", "Last Visit", "Next Visit"];
export const VISITS_TABLE_HEADER: String[] = ["Doctor", "Date", "Notes"];
export const VISIT_PER_DOCTOR_TABLE_HEADER: String[] = ["Date", "Notes"];