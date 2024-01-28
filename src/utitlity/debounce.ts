import { API_DEBOUNCE_TIME } from "../constants";

/**
 * This is the debounce function to delay execution of the function
 * @param func - The function to be debounced
 */
export const debounce = (func: Function) => {
    let timeoutId: NodeJS.Timeout;
    return  (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(), API_DEBOUNCE_TIME);
    };
}
