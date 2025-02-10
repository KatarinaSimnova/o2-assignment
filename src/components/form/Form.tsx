import { useState } from "react";
import { TextInput } from "../text-input/TextInput";
import "./Form.css";

interface IFormData {
  username: string | null;
  email: string | null;
  password: string | null;
  note: string | null;
}

export function Form() {
  const [formData, setFormData] = useState<IFormData>({
    username: null,
    email: null,
    password: null,
    note: null,
  });

  const handleChange = (key: string, value: string | null) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <form className="text-input-form">
      <TextInput
        id="username"
        label="Username"
        type="text"
        name="username"
        value={formData["username"]}
        onChange={handleChange}
        error={null}
        warning={null}
        required={false}
        placeholder="Your username"
        autoFocus={true}
      />
      <TextInput
        id="email"
        label="Email"
        type="email"
        name="email"
        value={formData["email"]}
        onChange={handleChange}
        error={null}
        warning={null}
        required={true}
        placeholder="Your email"
      />
      <TextInput
        id="password"
        label="Password"
        type="password"
        name="password"
        value={formData["password"]}
        onChange={handleChange}
        error={null}
        warning={null}
        required={true}
        placeholder="Your password"
      />
      <TextInput
        id="note"
        label="Note"
        type="textarea"
        name="note"
        value={formData["note"]}
        onChange={handleChange}
        error={null}
        warning={null}
        required={false}
        placeholder="Your note"
      />
      <TextInput
        id="input-with-error"
        label="Input with error"
        type="text"
        name=""
        value={null}
        onChange={() => {}}
        error="Input error"
        warning={null}
        required={false}
        placeholder="Your input with error"
      />
      <TextInput
        id="input-with-warning"
        label="Input with warning"
        type="text"
        name=""
        value={null}
        onChange={() => {}}
        error={null}
        warning="Input warning"
        required={false}
        placeholder="Your input with warning"
      />
      <TextInput
        id="input-disabled"
        label="Input disabled"
        type="text"
        name=""
        value={null}
        onChange={() => {}}
        error={null}
        warning={null}
        required={false}
        placeholder="Your disabled input"
        disabled={true}
      />
    </form>
  );
}
