import { Pipe, PipeTransform } from '@angular/core';
import { DoctorService } from 'app/services/doctor.service';

@Pipe({ name: 'DoctorNameById' })
export class DoctorNameByIdPipe implements PipeTransform {

    constructor(private doctorService: DoctorService) { }

    transform(id: number): String {
        let name;
        this.doctorService.getOneDoctor(id).subscribe(
            // doctor => name = doctor.name + doctor.surname
            doctor => { return doctor.name + doctor.surname }
        )
        return "";
    }
}