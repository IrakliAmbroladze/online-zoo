import { getFormFieldValue } from "./getFormFieldValue";

type Input = {
  type: string;
  placeholder?: string;
  name: string;
};

type CreateFormProps = {
  formNodeId: string | null;
  title?: string;
  inputs: Input[];
  endpointURL: string;
};
export const createForm = ({
  formNodeId,
  title = "Form",
  inputs,
  endpointURL,
}: CreateFormProps): void => {
  if (!formNodeId) return;
  const elForm = document.getElementById(formNodeId);
  const elTitle = document.createElement("h1");
  elTitle.textContent = title;
  elForm?.appendChild(elTitle);
  const form = document.createElement("form");
  elForm?.appendChild(form);
  inputs.map((input) => {
    const elInput = `
    <input type=${input.type} placeholder=${input.placeholder ? input.placeholder : ""} name=${input.name}>
`;
    form.insertAdjacentHTML("beforeend", elInput);
  });
  const btnSubmit = document.createElement("button");
  btnSubmit.type = "submit";
  btnSubmit.textContent = "submit";
  btnSubmit.classList.add("btnSubmit");
  btnSubmit.classList.add("btn");
  btnSubmit.classList.add("btn--orange");
  form.appendChild(btnSubmit);

  const serverErr = document.createElement("p");
  form.appendChild(serverErr);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const body: Record<string, string> = {};
    inputs.forEach((input) => {
      body[input.name] = getFormFieldValue({ form, name: input.name });
    });
    console.log("body is: ", body);
    try {
      const response = await fetch(endpointURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        let message = "not able to register";
        try {
          const data = await response.json();
          if (data?.error) {
            message = data.error;
          }
          console.log(data);
        } catch (err) {
          console.log(err);
        }
        serverErr.textContent = message;
        return;
      }

      const { data } = await response.json();
      const { user, access_token } = data;

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      }
      if (access_token) {
        localStorage.setItem("access_token", access_token);
      }
      window.location.href = "/";
    } catch (err) {
      if (err instanceof Error) {
        console.error("Caught an Error object:", err.message);
      } else {
        console.error("Caught an unknown error type:", err);
      }
      serverErr.textContent = "Network error. Please try again.";
    }
  });
};
