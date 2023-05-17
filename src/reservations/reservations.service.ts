import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ReservationRepository } from './reservations.repository';

@Injectable()
export class ReservationsService {

  constructor(@InjectRepository(ReservationRepository) private reservationRespository : ReservationRepository ){}
 db = this.reservationRespository.manager;
  async create(createReservationDto: CreateReservationDto) {
    const {
      day_arrival,
      day_departure,
      time_arrival,
      departure_time,
      room_id
    } = createReservationDto
    return  await this.reservationRespository.manager
    .query(`INSERT INTO reservation (timearrival, departuretime, room_id, dayarrival, daydeparture)
    VALUES ('${time_arrival}', '${departure_time}', ${room_id}, '${day_arrival}', '${day_departure}');`);
  }

  async findAll() {
    return await this.db.query('SELECT * FROM reservation')
  }

  async findOne(id: number) {
    return await this.db.query(`SELECT * FROM reservation WHERE id = ${id}`);
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  async remove(id: number) {
    return await this.db.query(`DELETE FROM reservation WHERE id = ${id}`);
  }
}
