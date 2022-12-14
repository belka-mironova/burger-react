import { API_URL } from "./app-constants";
import { request } from "./app-utils";

export const loadIngerdients = () => {
  return request(`${API_URL}/ingredients`);
};

export const orderCheckout = (ingredients) => {
  return request(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: ingredients,
    }),
  });
};
