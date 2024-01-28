import { API_DEBOUNCE_TIME } from "../constants";

export const debounce = (func: Function) => {
    let timeoutId: NodeJS.Timeout;
    return  (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(), API_DEBOUNCE_TIME);
    };
  }