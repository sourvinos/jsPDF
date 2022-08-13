import { Injectable } from '@angular/core'
// Custom
import { LogoService } from 'src/app/logo.service'
// Fonts
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { strAkaAcidCanterBold } from 'src/assets/fonts/Aka-Acid-CanterBold.Base64.encoded'
import { strPFHandbookPro } from 'src/assets/fonts/PF-Handbook-Pro.Base64.encoded'
import { InvoicingVM } from '../view-models/invoicing-vm'

pdfMake.vfs = pdfFonts.pdfMake.vfs

@Injectable({ providedIn: 'root' })

export class NewInvoicingPDFService {

    private records: InvoicingVM[] = [
        {
            customer: {
                id: 33,
                description: 'GET YOUR GUIDE'
            },
            portGroup: [
                {
                    port: 'CORFU PORT',
                    hasTransferGroup: [
                        {
                            hasTransfer: true,
                            adults: 31,
                            kids: 2,
                            free: 0,
                            totalPersons: 33,
                            totalPassengers: 33
                        },
                        {
                            hasTransfer: false,
                            adults: 98,
                            kids: 6,
                            free: 2,
                            totalPersons: 106,
                            totalPassengers: 104
                        }
                    ],
                    adults: 129,
                    kids: 8,
                    free: 2,
                    totalPersons: 139,
                    totalPassengers: 137
                },
                {
                    port: 'LEFKIMMI PORT',
                    'hasTransferGroup': [
                        {
                            hasTransfer: true,
                            adults: 19,
                            kids: 0,
                            free: 0,
                            totalPersons: 19,
                            totalPassengers: 19
                        },
                        {
                            hasTransfer: false,
                            adults: 4,
                            kids: 0,
                            free: 0,
                            totalPersons: 4,
                            totalPassengers: 2
                        }
                    ],
                    adults: 23,
                    kids: 0,
                    free: 0,
                    totalPersons: 23,
                    totalPassengers: 21
                }
            ],
            reservations: [
                {
                    date: '2022-07-01',
                    refNo: 'PA3303',
                    reservationId: '08da45eb-d7e6-45dd-80bd-84fb68a69efa',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'LEFKIMMI PORT',
                    ship: 'PAXOS STAR',
                    ticketNo: 'GYG998XKX6KR',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: true
                },
                {
                    date: '2022-07-01',
                    refNo: 'PA7611',
                    reservationId: '08da58e2-bdb3-4db4-8706-f5e7312de580',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'LEFKIMMI PORT',
                    ship: 'PAXOS STAR',
                    ticketNo: 'GYGVN436Y5FM',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: true
                },
                {
                    date: '2022-07-01',
                    refNo: 'PA7769',
                    reservationId: '08da5927-518e-4759-81d3-efc09d47378e',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'PAXOS STAR',
                    ticketNo: 'GYGZG3VW63XY',
                    adults: 3,
                    kids: 0,
                    free: 0,
                    totalPersons: 3,
                    embarkedPassengers: 3,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: true
                },
                {
                    date: '2022-07-01',
                    refNo: 'PA7970',
                    reservationId: '08da59fb-7766-4187-8a2f-80c685b1b5ac',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'PAXOS STAR',
                    ticketNo: 'GYGN6GYBBLLX',
                    adults: 3,
                    kids: 1,
                    free: 0,
                    totalPersons: 4,
                    embarkedPassengers: 4,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: true
                },
                {
                    date: '2022-07-01',
                    refNo: 'PA7982',
                    reservationId: '08da5a5b-8a46-42da-8c9b-9c89cc7b15a4',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'LEFKIMMI PORT',
                    ship: 'ΔΙΟΝΥΣΙΟΣ Μ.',
                    ticketNo: 'GYG6H95FLXYF',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: true
                },
                {
                    date: '2022-07-01',
                    refNo: 'PA7983',
                    reservationId: '08da5a5c-dcbb-4741-8c99-2524efc52439',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'LEFKIMMI PORT',
                    ship: 'PAXOS STAR',
                    ticketNo: 'GYGMX6AGRAMB',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: true
                },
                {
                    date: '2022-07-01',
                    refNo: 'PA8105',
                    reservationId: '08da5a96-0366-4813-8b78-1d4a2bdc79c3',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'LEFKIMMI PORT',
                    ship: 'PAXOS STAR',
                    ticketNo: 'GYGVN4355663',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: true
                },
                {
                    date: '2022-07-01',
                    refNo: 'PA8106',
                    reservationId: '08da5a97-314d-4496-87b8-55db3e2250e7',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'PAXOS STAR',
                    ticketNo: 'GYGN6GYA4H73',
                    adults: 1,
                    kids: 0,
                    free: 0,
                    totalPersons: 1,
                    embarkedPassengers: 1,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: true
                },
                {
                    date: '2022-07-01',
                    refNo: 'PA7790',
                    reservationId: '08da5934-0ef4-48f9-8ff3-240df4d72951',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYG32NZM4WL4',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-01',
                    refNo: 'PA7923',
                    reservationId: '08da59de-864f-4105-81c9-13da0a2b88f1',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYG83Y9LLNKZ',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-01',
                    refNo: 'PA7927',
                    reservationId: '08da59e0-28b7-4b36-887c-79123afe1fd5',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGX7Q7ZL96F',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-01',
                    refNo: 'PA7928',
                    reservationId: '08da59e0-7078-4a47-8dd9-af788a1c4bfa',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGZG3VW339N',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-01',
                    refNo: 'PA7933',
                    reservationId: '08da59e2-ed94-454d-80ac-0973b0005bbb',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYG32NZMRKZ7',
                    adults: 3,
                    kids: 0,
                    free: 0,
                    totalPersons: 3,
                    embarkedPassengers: 3,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-01',
                    refNo: 'PA7984',
                    reservationId: '08da5a5c-fb54-445f-824b-f0a8c491935b',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGLMWRLB5L3',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-01',
                    refNo: 'PA8064',
                    reservationId: '08da5a85-312a-4ef0-8540-5cee5427b1f4',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYG2RBBQZZ9Y',
                    adults: 3,
                    kids: 0,
                    free: 0,
                    totalPersons: 3,
                    embarkedPassengers: 3,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-01',
                    refNo: 'PA8094',
                    reservationId: '08da5a93-3630-4089-801a-d2bcc4634bd4',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGN6GYA4R6M',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-01',
                    refNo: 'PA8216',
                    reservationId: '08da5b1d-0cb6-4f76-8688-94b167cc8bdd',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYG83Y865X4A',
                    adults: 2,
                    kids: 1,
                    free: 2,
                    totalPersons: 5,
                    embarkedPassengers: 5,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-02',
                    refNo: 'BL7954',
                    reservationId: '08da59f0-b81a-401e-872d-5182c0768b0c',
                    destination: 'BLUE LAGOON',
                    port: 'LEFKIMMI PORT',
                    ship: 'ΔΙΟΝΥΣΙΟΣ Μ.',
                    ticketNo: 'GYG32NZMQZ3H',
                    adults: 4,
                    kids: 0,
                    free: 0,
                    totalPersons: 4,
                    embarkedPassengers: 4,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: true
                },
                {
                    date: '2022-07-02',
                    refNo: 'BL7986',
                    reservationId: '08da5a5f-51ac-40a3-8e53-41a52927ea12',
                    destination: 'BLUE LAGOON',
                    port: 'CORFU PORT',
                    ship: 'ΔΙΟΝΥΣΙΟΣ Μ.',
                    ticketNo: 'GYG482KH54QV',
                    adults: 1,
                    kids: 1,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: true
                },
                {
                    date: '2022-07-02',
                    refNo: 'PA8194',
                    reservationId: '08da5ac7-f8dd-4d9d-8acc-2d62bc8f768f',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'LEFKIMMI PORT',
                    ship: 'PAXOS STAR',
                    ticketNo: 'GYG482KXR5Q8',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: true
                },
                {
                    date: '2022-07-02',
                    refNo: 'BL8203',
                    reservationId: '08da5aca-a32e-439f-8b00-87f426190089',
                    destination: 'BLUE LAGOON',
                    port: 'CORFU PORT',
                    ship: 'ΔΙΟΝΥΣΙΟΣ Μ.',
                    ticketNo: 'GYGX7Q7Y3R7W',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: true
                },
                {
                    date: '2022-07-02',
                    refNo: 'PA8211',
                    reservationId: '08da5acd-2f3c-4ee6-8640-be505fb59e72',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'LEFKIMMI PORT',
                    ship: 'PAXOS STAR',
                    ticketNo: 'GYGFWX2XLKXL',
                    adults: 3,
                    kids: 0,
                    free: 0,
                    totalPersons: 3,
                    embarkedPassengers: 3,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: true
                },
                {
                    date: '2022-07-02',
                    refNo: 'BL4086',
                    reservationId: '08da49ec-8517-436e-8ab8-83471eaa812d',
                    destination: 'BLUE LAGOON',
                    port: 'CORFU PORT',
                    ship: 'ΔΙΟΝΥΣΙΟΣ Μ.',
                    ticketNo: 'GYG6H95VB6XR',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-02',
                    refNo: 'BL6029',
                    reservationId: '08da52a7-ba70-4563-87af-d6940210742b',
                    destination: 'BLUE LAGOON',
                    port: 'CORFU PORT',
                    ship: 'ΔΙΟΝΥΣΙΟΣ Μ.',
                    ticketNo: 'GYG7VMQG5G8A',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-02',
                    refNo: 'BL6490',
                    reservationId: '08da544a-2e57-42b9-82ed-ba01aa68a841',
                    destination: 'BLUE LAGOON',
                    port: 'CORFU PORT',
                    ship: 'ΔΙΟΝΥΣΙΟΣ Μ.',
                    ticketNo: 'GYGBLLF5HR67',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-02',
                    refNo: 'PA7960',
                    reservationId: '08da59f4-03cd-4af2-8fbc-beb9654dab7f',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYG482KH6NQQ',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-02',
                    refNo: 'BL7972',
                    reservationId: '08da59fc-1029-4249-818b-9dbdd0db1373',
                    destination: 'BLUE LAGOON',
                    port: 'CORFU PORT',
                    ship: 'ΔΙΟΝΥΣΙΟΣ Μ.',
                    ticketNo: 'GYGWZFM3VHQ2',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-02',
                    refNo: 'PA8085',
                    reservationId: '08da5a8f-1445-4fc3-87ea-bbdbbc4a431d',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGZG3VW9H9R',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-02',
                    refNo: 'PA8195',
                    reservationId: '08da5ac8-1978-4964-8e2d-16f1757fc1d2',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGKBH6NYXMW',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-02',
                    refNo: 'PA8196',
                    reservationId: '08da5ac8-3489-46cb-8ec3-42afd3762a1a',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGRFVG8RL8G',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-02',
                    refNo: 'PA8197',
                    reservationId: '08da5ac8-7960-43bd-870b-9304eb62860f',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGZG3VWF74Q',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-02',
                    refNo: 'BL8204',
                    reservationId: '08da5aca-d559-4f71-816a-71f8002b01b5',
                    destination: 'BLUE LAGOON',
                    port: 'CORFU PORT',
                    ship: 'ΔΙΟΝΥΣΙΟΣ Μ.',
                    ticketNo: 'GYG998W8YHB4',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-02',
                    refNo: 'BL8205',
                    reservationId: '08da5aca-f339-444e-8b5c-cb51c6d1a52c',
                    destination: 'BLUE LAGOON',
                    port: 'CORFU PORT',
                    ship: 'ΔΙΟΝΥΣΙΟΣ Μ.',
                    ticketNo: 'GYG7VMQGZR5L',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-02',
                    refNo: 'BL8207',
                    reservationId: '08da5acb-48c5-46f8-8dfd-410d2bbf2a37',
                    destination: 'BLUE LAGOON',
                    port: 'CORFU PORT',
                    ship: 'ΔΙΟΝΥΣΙΟΣ Μ.',
                    ticketNo: 'GYGN6GYAZL53',
                    adults: 2,
                    kids: 2,
                    free: 0,
                    totalPersons: 4,
                    embarkedPassengers: 4,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-02',
                    refNo: 'PA8231',
                    reservationId: '08da5b2f-d891-4c3e-8690-6c02c4c65af6',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYG7VMN9LRLV',
                    adults: 5,
                    kids: 0,
                    free: 0,
                    totalPersons: 5,
                    embarkedPassengers: 5,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-02',
                    refNo: 'PA8237',
                    reservationId: '08da5b30-f527-4b74-89c5-1721dace29d1',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGBLLFZ3GZH',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-02',
                    refNo: 'PA8238',
                    reservationId: '08da5b31-2eee-496f-82ef-4b81bcbf6412',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGG47LR2NHN',
                    adults: 0,
                    kids: 1,
                    free: 0,
                    totalPersons: 1,
                    embarkedPassengers: 1,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-02',
                    refNo: 'PA8241',
                    reservationId: '08da5b31-6636-432a-8604-3b8c26432be2',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGBLLFZ3YZ5',
                    adults: 1,
                    kids: 0,
                    free: 0,
                    totalPersons: 1,
                    embarkedPassengers: 1,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-02',
                    refNo: 'PA8242',
                    reservationId: '08da5b31-933b-478d-8d26-22259a766400',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGN6GYAX5X7',
                    adults: 1,
                    kids: 0,
                    free: 0,
                    totalPersons: 1,
                    embarkedPassengers: 1,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-02',
                    refNo: 'PA8243',
                    reservationId: '08da5b31-c314-4bc4-8036-34f377b1bd98',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYG83Y86469Z',
                    adults: 1,
                    kids: 0,
                    free: 0,
                    totalPersons: 1,
                    embarkedPassengers: 1,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-02',
                    refNo: 'PA8244',
                    reservationId: '08da5b31-e695-4d7b-8274-201a5670ba60',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYG482KHN4F8',
                    adults: 1,
                    kids: 0,
                    free: 0,
                    totalPersons: 1,
                    embarkedPassengers: 1,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-02',
                    refNo: 'PA8350',
                    reservationId: '08da5b61-59d7-4998-83c4-6838a08a7e17',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'LEFKIMMI PORT',
                    ship: 'PAXOS STAR',
                    ticketNo: 'GYGVN435MXB4',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 0,
                    totalNoShow: 2,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-02',
                    refNo: 'PA8419',
                    reservationId: '08da5b8e-09f0-4aff-8124-7e9d09bfc2c0',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYG6H95BWHQV',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-03',
                    refNo: 'PA8320',
                    reservationId: '08da5b59-ab1e-4723-81ca-25c265155c12',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'ΔΙΟΝΥΣΙΟΣ Μ.',
                    ticketNo: 'GYG998W4BZKA',
                    adults: 4,
                    kids: 0,
                    free: 0,
                    totalPersons: 4,
                    embarkedPassengers: 4,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: true
                },
                {
                    date: '2022-07-03',
                    refNo: 'PA8334',
                    reservationId: '08da5b5d-d486-42bc-8437-abc7ddb6ff6f',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'ΔΙΟΝΥΣΙΟΣ Μ.',
                    ticketNo: 'GYGN6GYG54QG',
                    adults: 5,
                    kids: 0,
                    free: 0,
                    totalPersons: 5,
                    embarkedPassengers: 5,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: true
                },
                {
                    date: '2022-07-03',
                    refNo: 'PA8473',
                    reservationId: '08da5bff-35f3-44be-81b7-e6539a340bee',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'ΔΙΟΝΥΣΙΟΣ Μ.',
                    ticketNo: 'GYG482KG9M4L',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: true
                },
                {
                    date: '2022-07-03',
                    refNo: 'PA8474',
                    reservationId: '08da5bff-7f61-4dba-852c-f2f9621a41f7',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'ΔΙΟΝΥΣΙΟΣ Μ.',
                    ticketNo: 'GYGFWX2W8VMZ',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: true
                },
                {
                    date: '2022-07-03',
                    refNo: 'PA8564',
                    reservationId: '08da5c29-c761-400f-8bef-0f0b61581ffb',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'ΔΙΟΝΥΣΙΟΣ Μ.',
                    ticketNo: 'GYGMX6AFWLQV',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: true
                },
                {
                    date: '2022-07-03',
                    refNo: 'PA7430',
                    reservationId: '08da5822-25bf-42a1-836e-941630b998cc',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGKBH6QZ9AR',
                    adults: 3,
                    kids: 0,
                    free: 0,
                    totalPersons: 3,
                    embarkedPassengers: 3,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-03',
                    refNo: 'PA8202',
                    reservationId: '08da5aca-3556-4d0b-83f8-09eb9255b3c1',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'LEFKIMMI PORT',
                    ship: 'PAXOS STAR',
                    ticketNo: 'GYG2RBBQWGBG',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-03',
                    refNo: 'PA8272',
                    reservationId: '08da5b3f-8007-406b-8fed-b2c0b18777cc',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGX7Q7YNW67',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-03',
                    refNo: 'PA8327',
                    reservationId: '08da5b5b-9968-4551-8fdb-97f1a1502df3',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGLMWRKRVRZ',
                    adults: 1,
                    kids: 0,
                    free: 0,
                    totalPersons: 1,
                    embarkedPassengers: 1,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-03',
                    refNo: 'PA8470',
                    reservationId: '08da5bfe-92af-4669-854d-7f90c91ac90b',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGBLLFZMW34',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-03',
                    refNo: 'PA8471',
                    reservationId: '08da5bfe-f342-4fbc-8780-2b678fd78966',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYG998W36MM6',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-03',
                    refNo: 'PA8486',
                    reservationId: '08da5c04-f400-43a2-8a69-5975e9e617c5',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGG47LRG843',
                    adults: 4,
                    kids: 0,
                    free: 0,
                    totalPersons: 4,
                    embarkedPassengers: 4,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-03',
                    refNo: 'PA8565',
                    reservationId: '08da5c2a-81e7-4407-8670-07852bc6c577',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGWZFM2N74F',
                    adults: 3,
                    kids: 0,
                    free: 0,
                    totalPersons: 3,
                    embarkedPassengers: 3,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-03',
                    refNo: 'PA8584',
                    reservationId: '08da5c39-8ec0-422d-849a-815bee389ec3',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGVN4346QM6',
                    adults: 4,
                    kids: 2,
                    free: 0,
                    totalPersons: 6,
                    embarkedPassengers: 6,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-03',
                    refNo: 'PA8642',
                    reservationId: '08da5c5a-c404-41a7-8649-c895fc12e0fd',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGLMWRH6X35',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-04',
                    refNo: 'PA7158',
                    reservationId: '08da56d1-347a-4fd9-85bb-eb5c6845a39c',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYG2RBBV2NA8',
                    adults: 1,
                    kids: 0,
                    free: 0,
                    totalPersons: 1,
                    embarkedPassengers: 1,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: true
                },
                {
                    date: '2022-07-04',
                    refNo: 'PA8279',
                    reservationId: '08da5b41-d5c9-4a8a-878e-78c273d630b2',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYG482KHKR4Y',
                    adults: 3,
                    kids: 0,
                    free: 0,
                    totalPersons: 3,
                    embarkedPassengers: 3,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: true
                },
                {
                    date: '2022-07-04',
                    refNo: 'PA8739',
                    reservationId: '08da5ce5-0cf3-427c-84a0-2e7995b80d38',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYG2RBBNQYH8',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: true
                },
                {
                    date: '2022-07-04',
                    refNo: 'PA8554',
                    reservationId: '08da5c23-109e-4008-8fa4-c98d28545e29',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYG2RBBXKHFB',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-04',
                    refNo: 'PA8639',
                    reservationId: '08da5c59-42b4-4b8d-88d0-fd0845afeaf0',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYG6H95BB4AR',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-04',
                    refNo: 'PA8652',
                    reservationId: '08da5cb7-8a7d-49d3-83f3-88c21ff0baf2',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGMX6AFNFNW',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-04',
                    refNo: 'PA8696',
                    reservationId: '08da5cd2-c965-4335-81dd-6380e2164443',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGG47LQ38F7',
                    adults: 4,
                    kids: 0,
                    free: 0,
                    totalPersons: 4,
                    embarkedPassengers: 2,
                    totalNoShow: 2,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-04',
                    refNo: 'PA8769',
                    reservationId: '08da5cff-b3da-44d6-8b1b-d7be5958c012',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGLMWRHWR7X',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-05',
                    refNo: 'PA8735',
                    reservationId: '08da5ce2-0683-459f-8df4-39e87bc67755',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGLMWVKRR7B',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-05',
                    refNo: 'PA9005',
                    reservationId: '08da5dbc-7288-4aa6-8dce-a609297424f1',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGZG3VRQK4V',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                },
                {
                    date: '2022-07-05',
                    refNo: 'PA9008',
                    reservationId: '08da5dbf-4308-4fa5-871f-65852787ec6c',
                    destination: 'PAXOS - ANTIPAXOS',
                    port: 'CORFU PORT',
                    ship: 'CAPTAIN BILL',
                    ticketNo: 'GYGVN43387HA',
                    adults: 2,
                    kids: 0,
                    free: 0,
                    totalPersons: 2,
                    embarkedPassengers: 2,
                    totalNoShow: 0,
                    remarks: '',
                    hasTransfer: false
                }
            ]
        }
    ]

    constructor(private logoService: LogoService) { }

    public createPDF(): void {
        this.setFonts()
        const dd = {
            background: this.setBackgroundImage(),
            info: this.setPageInfo(),
            pageOrientation: 'portrait',
            pageSize: 'A4',
            content: [
                {
                    margin: [-10, 0, 0, 20],
                    columns: [
                        this.setLogo(),
                        this.setTitle(),
                    ]
                },
                {
                    table: {
                        body: this.createPortGroup(this.records[0].portGroup),
                    },
                    layout: ''
                },
            ],
            styles: {
                AkaAcidCanterBold: {
                    font: 'AkaAcidCanterBold',
                }, PFHandbookPro: {
                    font: 'PFHandbookPro',
                }
            },
            defaultStyle: {
                fontSize: 7,
                font: 'PFHandbookPro',
            },
            footer: (currentPage: { toString: () => string }, pageCount: string) => {
                return this.setFooter(currentPage, pageCount)
            }
        }
        this.createPdf(dd)
    }

    private createPdf(document: any): void {
        pdfMake.createPdf(document).open()
    }

    private setBackgroundImage(): any[] {
        const backgroundImage = [
            {
                image: this.logoService.getLogo(),
                width: 1000,
                opacity: 0.03
            }
        ]
        return backgroundImage
    }

    private setPageInfo(): any {
        const pageInfo = {
            title: 'Embarkation',
            filename: 'Boos.pdf'
        }
        return pageInfo
    }

    private setFooter(currentPage: { toString: any }, pageCount: string): any {
        const footer = {
            layout: 'noBorders',
            margin: [0, 10, 40, 10],
            table: {
                widths: ['100%'],
                body: [
                    [
                        { text: 'Page ' + currentPage.toString() + ' of ' + pageCount, alignment: 'right', fontSize: 6 }
                    ]
                ]
            }
        }
        return footer
    }

    private setLogo(): any {
        const logo = {
            type: 'none',
            width: 60,
            margin: [0, -6, 0, 0],
            ul: [
                { image: this.logoService.getLogo(), fit: [40, 40], alignment: 'left' },
            ]
        }
        return logo
    }

    private setTitle(): any {
        const title = {
            type: 'none',
            ul: [
                { text: 'Corfu Cruises', alignment: 'left', color: '#0a5f91', fontSize: 20, margin: [-5, 0, 0, 0], style: 'AkaAcidCanterBold' },
                { text: 'Embarkation Report', alignment: 'left', color: '#22a7f2', fontSize: 10, margin: [-4, 0, 0, 0] }
            ]
        }
        return title
    }

    private createPortGroup(portGroup): any[] {
        const rows = []
        console.log('Port group', portGroup.length)
        portGroup.forEach((element: any) => {
            console.log('portGroup', element)
            rows.push([
                { text: '' },
                { text: 'Adults' },
                { text: 'Kids' },
                { text: 'Free' },
                { text: 'Total' },
                { text: 'Actual' },
                { text: 'N/S' },
                { text: 'Transfer' },
            ])
            element.hasTransferGroup.forEach(x => {
                rows.push([
                    { text: '' },
                    { text: x.adults, alignment: 'right' },
                    { text: x.kids, alignment: 'right' },
                    { text: x.free, alignment: 'right' },
                    { text: x.totalPersons, alignment: 'right' },
                    { text: x.totalPassengers, alignment: 'right' },
                    { text: x.totalPersons - x.totalPassengers, alignment: 'right' },
                    { text: x.hasTransfer ? 'Yes' : 'No', alignment: 'center' }
                ])
            })
            rows.push([
                { text: element.port },
                { text: element.adults, alignment: 'right' },
                { text: element.kids, alignment: 'right' },
                { text: element.free, alignment: 'right' },
                { text: element.totalPersons, alignment: 'right' },
                { text: element.totalPassengers, alignment: 'right' },
                { text: element.totalPersons - element.totalPassengers, alignment: 'right' },
                { text: '' }
            ])
        })
        return rows
    }

    private setFonts(): void {
        pdfFonts.pdfMake.vfs['AkaAcidCanterBold'] = strAkaAcidCanterBold
        pdfFonts.pdfMake.vfs['PFHandbookPro'] = strPFHandbookPro
        pdfMake.fonts = {
            Roboto: {
                normal: 'Roboto-Regular.ttf',
            },
            PFHandbookPro: {
                normal: 'PFHandbookPro',
            },
            AkaAcidCanterBold: {
                normal: 'AkaAcidCanterBold'
            }
        }
    }

}
