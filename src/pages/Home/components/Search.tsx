import React, { ReactElement, useRef } from "react";
import { Form, Input, Button } from "reactstrap";

interface Props {
  defaultValue?: string;
  loading?: boolean;
  onSubmit: (query: string) => void;
}

function Search(props: Props): ReactElement {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(inputRef.current) {
      props.onSubmit(inputRef.current.value);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className="d-flex">
        <Input
          type="text"
          placeholder="Search Movie"
          className="mr-1"
          defaultValue={props.defaultValue}
          innerRef={inputRef}
        />
        <Button color="danger">
          {props.loading ? "Searching..." : "Search"}
        </Button>
      </div>
    </Form>
  );
}

export default Search;
