//Actions
import {
  incrementadorAction,
  decrementadorAction,
  multiplicadorAction,
  dividirAction,
  resetAction,
} from "./contador/contador.actions";
import reducer from "./contador/contador.reducer";

console.log(reducer(10, incrementadorAction));
console.log(reducer(10, decrementadorAction));
console.log(reducer(10, multiplicadorAction));
console.log(reducer(10, dividirAction));
console.log(reducer(10, resetAction));
