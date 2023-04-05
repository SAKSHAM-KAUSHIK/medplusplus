export const prior_auth = [
    {
        id: 1,
        status: "Pending",
        requetid: "200005",
        date: "1/24/2023",
        urgency: "Medium",
        services: ["CPT 92227 x2 visits Annually", "CPT 99211 x2 visits Annually"],
        requestedby: "Dr. Roger Lenon, MD"
    },
    {
        id: 2,
        status: "Pending",
        requetid: "200004",
        date: "1/19/2023",
        urgency: "Medium",
        services: [`CPT 92227 x2 visits Annually`, "CPT 99211 x1 visits Annually"],
        requestedby: "Dr. Roger Lenon, MD"
    },
    {
        id: 3,
        status: "Accepted",
        requetid: "200003",
        date: "1/15/2023",
        urgency: "Medium",
        services: ["CPT 92227 x2 visits Annually"],
        requestedby: "Dr. Roger Lenon, MD"
    },
    {
        id: 4,
        status: "Accepted",
        requetid: "200002",
        date: "1/14/2023",
        urgency: "Medium",
        services: ["CPT 92227 x2 visits Annually", "CPT 99211 x1 visit One time"],
        requestedby: "Dr. Roger Lenon, MD"
    },
];

export const claims = [
    {
        id: 1,
        claimid: "20009",
        dos: "1/10/2022",
        status: "Pending",
        name: "Linda Harris",
        dob: "11/09/1945(76 yrs),F",
        smokes: false,
        empi: "P078645",
        phone: "512-265-4081",
        pcp: "Dr. Karen Carter",
        doctor: "Dr. Roger Lenon",
        docimg: "https://bearskinwellnesscenter.com/wp-content/uploads/2017/03/doctor-smiling-with-stethoscope_1154-36.jpg",
        docdetail: "MD, NPI 43212",
        docgrp: "Holtzman Medical Group",
        contact: "2380181221",
        rid: "200003",
        authid: "63c8cef16328c39de555111f",
        services: "CPT 92227 x2 visits Annually",
        payer1: "VETERANS ADMINISTRATION - PRESCOTT VA [199311] 123456789 (Contracts)",
        edi1: "199311",
        assignment: "Not Assigned",
        fdtp: "No",
        payer2: "Humana (Medicare Replacement/Advantage - PPO) [47006] 123456789",
        edi2: "47006",
        assignment2: "Not Assigned",
        fdtp2: "No",
        cpt: "92227",
        diagnosis: "Imaging of Retinna for detection or monitoring of disease",
        units: 2,
        price: 432,
        
    },
    {
        id: 2,
        claimid: "20010",
        dos: "5/1/2023",
        status: "Pending",
        name: "Peter Griffin",
        dob: "11/05/1974(49 yrs),M",
        smokes: false,
        empi: "P078645",
        phone: "512-265-4081",
        pcp: "Dr. Karen Carter",
        doctor: "Dr. Roger Lenon",
        docimg: "https://bearskinwellnesscenter.com/wp-content/uploads/2017/03/doctor-smiling-with-stethoscope_1154-36.jpg",
        docdetail: "MD, NPI 43212",
        docgrp: "Holtzman Medical Group",
        contact: "2380181221",
        rid: "200003",
        authid: "63c8cef16328c39de555111f",
        services: "CPT 92227 x2 visits Annually",
        payer1: "VETERANS ADMINISTRATION - PRESCOTT VA [199311] 123456789 (Contracts)",
        edi1: "199311",
        assignment: "Not Assigned",
        fdtp: "No",
        payer2: "Humana (Medicare Replacement/Advantage - PPO) [47006] 123456789",
        edi2: "47006",
        assignment2: "Not Assigned",
        fdtp2: "No",
        cpt: "92227",
        diagnosis: "Imaging of Retinna for detection or monitoring of disease",
        units: 1,
        price: 432,
        
    },
    {
        id: 3,
        claimid: "20011",
        dos: "10/3/2023",
        status: "Pending",
        name: "Glenn Quagmire",
        dob: "19/02/1972(51 yrs),M",
        smokes: true,
        empi: "P078645",
        phone: "512-265-4081",
        pcp: "Dr. Karen Carter",
        doctor: "Dr. Roger Lenon",
        docimg: "https://bearskinwellnesscenter.com/wp-content/uploads/2017/03/doctor-smiling-with-stethoscope_1154-36.jpg",
        docdetail: "MD, NPI 43212",
        docgrp: "Holtzman Medical Group",
        contact: "2380181221",
        rid: "200003",
        authid: "63c8cef16328c39de555111f",
        services: "CPT 92227 x2 visits Annually",
        payer1: "VETERANS ADMINISTRATION - PRESCOTT VA [199311] 123456789 (Contracts)",
        edi1: "199311",
        assignment: "Not Assigned",
        fdtp: "No",
        payer2: "Humana (Medicare Replacement/Advantage - PPO) [47006] 123456789",
        edi2: "47006",
        assignment2: "Not Assigned",
        fdtp2: "No",
        cpt: "92227",
        diagnosis: "Imaging of Retinna for detection or monitoring of disease",
        units: 3,
        price: 432,
        
    },
]

export const history=[
    {
        title:"Current Diagnoses",
        p:["-(I10) Essential(primary) hypertension","-(E11.9) Type 2 diabetes mellitus without complications","-(E11.31) Type 2 diabetes mellitus with unspecified diabetic retinopathy"]
        
    },
    {
        title:"Paitent Risk Score",
        p:["-(I10) Essential(primary) hypertension","-(E11.9) Type 2 diabetes mellitus without complications","-(E11.31) Type 2 diabetes mellitus with unspecified diabetic retinopathy"]
        

    },
    {
        title:"Social Deteminants",
        p:["-(I10) Essential(primary) hypertension","-(E11.9) Type 2 diabetes mellitus without complications","-(E11.31) Type 2 diabetes mellitus with unspecified diabetic retinopathy"]
        
    },
    {
        title:"Smoking Status",
        p:["-(I10) Essential(primary) hypertension","-(E11.9) Type 2 diabetes mellitus without complications","-(E11.31) Type 2 diabetes mellitus with unspecified diabetic retinopathy"]
        
    },
    {
        title:"Allergies",
        p:["-(I10) Essential(primary) hypertension","-(E11.9) Type 2 diabetes mellitus without complications","-(E11.31) Type 2 diabetes mellitus with unspecified diabetic retinopathy"]
        
    },
    {
        title:"Medicines",
        p:["-(I10) Essential(primary) hypertension","-(E11.9) Type 2 diabetes mellitus without complications","-(E11.31) Type 2 diabetes mellitus with unspecified diabetic retinopathy"]
        
    },
    {
        title:"Connections",
        p:["-(I10) Essential(primary) hypertension","-(E11.9) Type 2 diabetes mellitus without complications","-(E11.31) Type 2 diabetes mellitus with unspecified diabetic retinopathy"]
        
    }
]
export const details = [
    {
        "name": "Linda Harris",
        "dob":"11/09/1945",
        "age":"76yrs",
        "gender":"F",
        "type":"Non-Smoker",
        "EMPIMRN":"P078645",
        "phone":"512-265-4081",
        "PCP": "Dr. Karen Carter",
        "title":"Current Period Diabetic Retinopathy Scan",
        "subtitle":"DR Present,moderate",
        "doctor":"Verified by Dr. Domingo Sanchez",
        "photo":"https://www.nih.gov/sites/default/files/news-events/research-matters/2017/20170502-eye.jpg",
        "percentage":52,
        "time":"12h 28min"
        
        

    },
    {   
        "name":"Peter Griffin",
        "dob":"11/10/1948",
        "age":"49yrs",
        "gender":"M",
        "type":"Non-Smoker",
        "EMPIMRN":"P078645",
        "phone":"512-265-4081",
        "PCP":"Dr. John Carter",
        "title":"Current Period Diabetic Retinopathy Scan",
        "subtitle":"DR Present,moderate",
        "doctor":"Verified by Dr. Domingo Sanchez",
        "photo":"https://pankratzvision.com/wp-content/uploads/retina-eye-scan.jpg",
        "percentage":54,
        "time":"10h 20min"
              
    },
    {
        "name":"Glenn Quagmire",
        "dob":"11/09/1945",
        "age":"52yrs",
        "gender":"M",
        "type":"Smoker",
        "EMPIMRN":"P078645",
        "phone":"512-265-4081",
        "PCP": "Dr. Karen Carter",
        "title":"Current Period Diabetic Retinopathy Scan",
        "subtitle":"DR Present,moderate",
        "doctor":"Verified by Dr. Domingo Sanchez",
        "photo":"https://www.reviewofoptometry.com/CMSImagesContent/2016/12/064_ro1216_f5-2.jpg",       
        "percentage":49,
        "time":"9h 15min"

    }
]

export const data = [
    {
        "id": 0,
        "pc": "55,654",
        "ha": "74.2",
        "ra": "20.8",
        "ipp": "16.1",
        "ipn": "53",
        "rap": "421",
        "hcc": "73.1",
        "ed1": "25.5",
        "ed2": "22",
        "edn": "387"
    },
    {
        "id": 1,
        "pc": "64,554",
        "ha": "84.7",
        "ra": "29.8",
        "ipp": "13.1",
        "ipn": "72",
        "rap": "461",
        "hcc": "79.1",
        "ed1": "39.5",
        "ed2": "30",
        "edn": "380"
    },
    {
        "id": 2,
        "pc": "98,574",
        "ha": "77.7",
        "ra": "49.8",
        "ipp": "37.1",
        "ipn": "72",
        "rap": "461",
        "hcc": "77.1",
        "ed1": "49.5",
        "ed2": "30",
        "edn": "490"
    },
    {
        "id": 3,
        "pc": "45,594",
        "ha": "63.7",
        "ra": "49.8",
        "ipp": "17.8",
        "ipn": "42",
        "rap": "331",
        "hcc": "64.1",
        "ed1": "49.5",
        "ed2": "30",
        "edn": "495"
    }
]

