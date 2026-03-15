type CreateFormProps = {
  formNodeId: string | undefined;
};
export const createForm = ({ formNodeId }: CreateFormProps): void => {
  if (!formNodeId) return;
  const elForm = document.getElementById(formNodeId);
  console.log(elForm);
};
