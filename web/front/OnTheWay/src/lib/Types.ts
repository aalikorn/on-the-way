export interface NewCar {
    owner_id: number;
    number: string | null | undefined;
    brand: string;
    color: string | null | undefined;
}

export interface Car extends NewCar {
    id: number
}

export interface User {
    id: number
    name: null | undefined | string;
    age: null | undefined | number;
    alias: string
    car_ids: number[];
    rides_amount: null | undefined | number;
}

export interface Passenger extends User {
    has_luggage: null | undefined | number;
    has_kids: null | undefined | number;
    has_pets: null | undefined | number;
}

export interface BaseTrip {
    start_location: string
    end_location: string
    departure_time: string
    price: number
    available_seats: null | undefined | number;
    has_child_seat: null | undefined | boolean;
}


export interface Trip extends BaseTrip {
    id: number
    driver: User
    passengers: Passenger[];
    car: null | undefined | Car;
}

export interface NewTrip extends BaseTrip {
    car_id: null | undefined | number;
    driver_id: number
}


export interface UserOptions {
    has_luggage: boolean
    has_kids: boolean
    has_pets: boolean
}