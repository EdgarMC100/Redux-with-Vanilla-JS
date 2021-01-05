import { Action } from "../ngrx/ngrx";

const incrementadorAction: Action = {
  type: "INCREMENTAR",
};

const decrementadorAction: Action = {
  type: "DECREMENTAR",
};

const multiplicadorAction: Action = {
  type: "MULTIPLICAR",
  payload: {
    multiplicador: 2,
  },
};

const dividirAction: Action = {
  type: "DIVIDIR",
  payload: {
    divisor: 2,
  },
};

const resetAction: Action = {
  type: "RESET",
  payload: {
    reseter: 0,
  },
};

export {
  incrementadorAction,
  decrementadorAction,
  multiplicadorAction,
  dividirAction,
  resetAction,
};
