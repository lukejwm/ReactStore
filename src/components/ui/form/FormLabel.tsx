import React from "react";
import { Form } from "react-bootstrap";

interface FormLabelProps {
  labelText: string;
  inputType: string;
  placeholder: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormLabel: React.FC<FormLabelProps> = ({
  labelText,
  inputType,
  placeholder,
  value,
  onChange,
}: FormLabelProps) => {
  return (
    <>
      <Form.Label>{labelText}:</Form.Label>
      <Form.Control
        type={inputType}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default FormLabel;
