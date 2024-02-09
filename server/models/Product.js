const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    productname: { type: String },
    desc: { type: String },
    img1: { type: String },
    img2: { type: String },
    img3: { type: String },
    img4: { type: String },
    img5: { type: String },
    img6: { type: String },
    img7: { type: String },
    img8: { type: String },
    img9: { type: String },
    color: { type: String },
    storage: { type: String },
    ram: { type: String },
    brand: { type: String },
    stock: { type: Boolean, default: true },
    power: { type: String },
    categories: { type: Array },
    category: { type: String },
    about: { type: String },
    category: { type: String },
    price: { type: Number },
    salePrice: { type: Number },

    displayWashingMachine: { type: String },
    programCountWashingMachine: { type: String },
    energyClassWashingMachine: { type: String },
    washingMachineCapacity: { type: String },
    washingMachineSpinSpeed: { type: String },


    typeOfCooling: { type: String },
    classOfEnergyConsumption: { type: String },
    producingCountry: { type: String },

    recommendedRoomArea: { type: String },
    heatingPower: { type: String },
    coolingPower: { type: String },
    compressorType: { type: String },
    basicModes: { type: String },


    productWeight: { type: String },
    dishwasherCapacity: { type: String },
    warrantyPeriod: { type: String },
    dimensions: { type: String },
    management: { type: String },
    soundLevel: { type: String },
    waterConsumption: { type: String },
},
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);