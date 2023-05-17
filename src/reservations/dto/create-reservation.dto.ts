import { Room } from "src/rooms/entities/room.entity";

export class CreateReservationDto {
    day_arrival: string;
    day_departure: string;
    time_arrival: string;
    departure_time: string;
    room_id: Room;
}
