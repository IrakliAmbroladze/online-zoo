type Pet = {
  commonName: string;
  description: string;
  id: number;
  name: string;
};

export const fetchPets = async (): Promise<Pet[]> => {
  const URL =
    "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/pets";
  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  const { data } = await response.json();
  return data;
};
