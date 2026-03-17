import type { Pet } from "../types/Pet";
import { fetchData } from "./fetchData";

export const fetchPets = () =>
  fetchData<Pet[]>(
    "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/pets",
  );
