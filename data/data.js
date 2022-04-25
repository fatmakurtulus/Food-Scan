
export const glu=1;
export const nut=2;
export const lac=3;
export const none=0;
const glutenInTole=[
    "gluten",
    "wheat",
    "oats",
    "barley",
],
const nutAler=[
    "peanut",
    "cashew",
    "nut",
],
const lactoseInTole=[
    "milk",
    "lactose",
    "whey",

],

const glutenInTolerance = glutenInTole.concat(gluten);
const nutAlergy= nutAler.concat(nut);
const lactoseIntolerance= lactoseInTole.concat(lactose);

export const alergenIngre=[
    {
        level:none,ingredients:[]
    },
    {
        level:glu,ingredients:glutenInTolerance.sort()
    },
    {
        level:nut ,ingredients:nutAlergy.sort()
    },
    {
        level:lac,ingredients:lactoseIntolerance.sort()
    },
];