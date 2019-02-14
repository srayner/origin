import React from "react";
import { Button, PrimaryButton } from "../ui/button";
import ButtonGroup from "../ui/button-group";

const DeletePerson = props => {
  return (
    <div>
      <p>
        Are you sure you want to delete {props.person.forenames}{" "}
        {props.person.surname}?
      </p>
      <ButtonGroup>
        <PrimaryButton
          onClick={() => {
            props.submit();
          }}
        >
          Yes
        </PrimaryButton>
        <Button
          onClick={() => {
            props.cancel();
          }}
        >
          No
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default DeletePerson;
