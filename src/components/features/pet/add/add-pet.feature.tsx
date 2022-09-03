import { ApolloError, ServerError, useMutation } from "@apollo/client";
import { Button, Input } from "@components/common";
import { Form } from "@components/templates/form/form";
import { Pet } from "@entities/pet";
import { ADD_PET_MUTATION } from "@mutations/pet";
import logger from "loglevel";
import { BaseSyntheticEvent, useRef } from "react";

type ErrorMessage = {
  message: string;
};

export const AddPet = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [addPet, { loading, error }] = useMutation(ADD_PET_MUTATION, {
    variables: {} as Pet,
  });

  const onSubmit = async (event: BaseSyntheticEvent) => {
    event.preventDefault();

    const data = Array.from(formRef?.current?.children as HTMLCollection)
      .map((item: Element) => {
        const { id, value } = item as HTMLInputElement;
        return (
          id &&
          value && {
            [id]: value,
          }
        );
      })
      .reduce((acc, value) => ({
        ...acc,
        ...value,
      })) as Pet;

    try {
      await addPet({
        variables: data,
      });
    } catch (error) {
      const { networkError } = error as ApolloError;
      logger.error("ERROR", (networkError as ServerError).result.errors);
    }
  };

  return (
    <Form onSubmit={onSubmit} ref={formRef}>
      <Input
        disabled={loading}
        id="name"
        name="name"
        onInvalid={() => logger.info("onInvalid")}
        onError={() => logger.info("onError")}
        variant=""
      />
      <Input
        disabled={loading}
        id="birthDate"
        name="birthDate"
        type="date"
        variant=""
      />
      <Input disabled={loading} id="gender" name="gender" variant="" />
      <Button isLoading={loading}>Salvar</Button>
      {error &&
        (error?.networkError as ServerError)?.result?.errors?.map(
          ({ message }: ErrorMessage) =>
            message && <h1 key={message}>{message}</h1>,
        )}
    </Form>
  );
};
