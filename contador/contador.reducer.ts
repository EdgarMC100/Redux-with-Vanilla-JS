import { Action } from "../ngrx/ngrx";

export default function contadorReducer(oldState = 10, action: Action) {
  switch (action.type) {
    case "INCREMENTAR":
      return (oldState += 1);
    case "DECREMENTAR":
      return (oldState -= 1);
    case "MULTIPLICAR":
      //   let { multiplicador } = action.payload;
      return (oldState *= action.payload.multiplicador);
    case "DIVIDIR":
      return (oldState /= action.payload.divisor);
    case "RESET":
      return (oldState = action.payload.reseter);
    default:
      break;
  }
  return oldState;
}
