import React from "react";
import { Button, Spinner } from "react-bootstrap";

export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
    if (isLoading) {
        return (
        <Button variant="primary" disabled>
            <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
            />
            Loading...
        </Button>)
    } else {
        return (
            <Button variant="primary">
                {props.children}
            </Button>)
    }
}