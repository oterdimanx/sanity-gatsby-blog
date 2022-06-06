import GarageItems from "../components/GarageItems";

export default {
 name: "garageItems",
 title: "Garage Items",
 type: "document",
 of: [
   {
     type: "garageItem",
     name: "garageItem",
   },
 ],
 inputComponent: GarageItems,
};
