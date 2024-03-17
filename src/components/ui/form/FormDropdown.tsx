import React from "react";
import { Form } from "react-bootstrap";

interface FormDropdownProps {
  children: string[];
  label: string;
  defaultValue: string;
  onChange: (value: string) => void;
}

const FormDropdown: React.FC<FormDropdownProps> = ({
  children,
  label,
  defaultValue,
  onChange,
}) => {
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Select
        defaultValue={defaultValue}
        onChange={(formData) => onChange(formData.target.value as T)}
      >
        <option disabled>{defaultValue}</option>
        {children.map((children, index) => (
          <option key={index} value={children}>
            {children}
          </option>
        ))}
      </Form.Select>
    </>
  );
};

export default FormDropdown;
