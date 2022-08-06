import { Guid } from 'guid-typescript'
import { EmbarkationPassenger } from './embarkation-passenger-vm'

export interface EmbarkationVM {

    reservationId: Guid
    refNo: string
    ticketNo: string
    remarks: string
    customer: string
    destination: string
    driver: string
    port: string
    ship: string
    totalPersons: number
    embarkedPassengers: number
    embarkationStatus: boolean
    isCheckedIn: string
    passengerIds: number[]

    passengers: EmbarkationPassenger[]

}

export const list =
{
    totalPersons: 369,
    embarkedPassengers: 362,
    pendingPersons: 7,
    reservations: [
        {
            refNo: 'PA189',
            ticketNo: '876621726',
            remarks: '',
            customer: 'VIATOR CORFU CRUISES',
            destination: 'PAXOS - ANTIPAXOS',
            driver: 'TSAGKARIS 2',
            port: 'CORFU PORT',
            ship: 'CAPTAIN BILL',
            totalPersons: 2,
            embarkedPassengers: 2,
            embarkationStatus: 'OK',
            passengerIds: [
                1405,
                1406
            ],
            'passengers': [
                {
                    id: 1405,
                    lastname: 'Razmpour',
                    firstname: 'Shabnam ',
                    nationalityCode: 'de',
                    nationalityDescription: 'GERMANY',
                    isCheckedIn: true
                },
                {
                    id: 1406,
                    lastname: 'Schroeder',
                    firstname: 'Karen',
                    nationalityCode: 'de',
                    nationalityDescription: 'GERMANY',
                    isCheckedIn: true
                }
            ]
        }]
}

