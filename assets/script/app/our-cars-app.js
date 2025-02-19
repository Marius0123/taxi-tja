import { badRequest, carTaken, emailNotValideAlert } from "../../data/json/Alerts.data.js";
import { db } from "./app.js";
import { getDatabase, ref, set, onValue, push, onChildAdded, onChildChanged, onChildRemoved } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";


const brandListRef = ref(db, `brand/`);
const carsListRef = ref(db, `cars/`);
const modelsListRef = ref(db, `models/`);
const transmissionListRef = ref(db, `transmission/`);


const carList = [];
const brandList = [];
const modelList = [];
const transmissionList = [];

function loadData(ref) {
    return new Promise((resolve, reject) => {
        onValue(ref, (snapshot) => {
            if (snapshot.exists()) {
                const dataList = [];
                snapshot.forEach((e) => {
                    dataList.push(e.val());
                });
                resolve(dataList);
            } else{
                resolve('');
            }
        }, (err) => reject(err)); 
    });
}

async function fetchAllData() {
    try {
        const [cars, brands, models, transmissions] = await Promise.all([
            loadData(carsListRef),
            loadData(brandListRef),
            loadData(modelsListRef),
            loadData(transmissionListRef),
        ]);

        carList.push(...cars);
        brandList.push(...brands);
        modelList.push(...models);
        transmissionList.push(...transmissions);

        console.log(carList);
        console.log(brandList);
        console.log(modelList);
        console.log(transmissionList);

        return [processCarData(), brandList, modelList, transmissionList];
    } catch (err) {
        console.log(err);
    }

    
}

function processCarData() {
    const carArr = [];

    carList.forEach((e, index) => {
        const model = modelList.find((m, i) => i+1  === parseInt(e.modelId)) || {};
        const brand = brandList.find((b, i) => i+1 === parseInt(model.brandId)) || {};
        const transmission = transmissionList.find((t, i) => i === parseInt(model.transmissionId)) || {};

        const car = {
            id: index+1,
            rating: e.rating,
            airCond: e.airCond,
            model: model.name,
            brand: brand.name,
            seats: parseInt(model.seatsNumber),
            transmission: transmission,
            taxPerKm: e.taxPerKm,
            year: model.year,
        };

        carArr.push(car);
    });

    return(carArr);
    
}

const fetchedData = await fetchAllData();

export const carsArrData = fetchedData[0];
export const brandsArrData = fetchedData[1];
export const modelsArrData = fetchedData[2];
export const transArrData = fetchedData[3];
console.log(carsArrData);