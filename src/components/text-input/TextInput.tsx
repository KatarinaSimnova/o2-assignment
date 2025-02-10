import "./TextInput.css";

interface IProps {
  id: string;
  label: string;
  type: "text" | "email" | "password" | "textarea";
  required: boolean;
  name: string;
  value: string | null;
  onChange: (key: string, value: string | null) => void;
  error: string | null;
  warning: string | null;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  maxlength?: number;
  pattern?: string;
  autoFocus?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const TextInput = ({
  id,
  label,
  type,
  required,
  name,
  value,
  onChange,
  error,
  warning,
  placeholder,
  disabled,
  readOnly,
  maxlength,
  pattern,
  autoFocus,
  onFocus,
  onBlur,
}: IProps) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    event.preventDefault();

    if (event.target.value === "") {
      onChange(name, null);
    } else {
      onChange(name, event.target.value);
    }
  };

  let inputIssueClassName = "";
  let inputIssueParagraphId = "";
  if (error) {
    inputIssueClassName = "form-item-input-error";
    inputIssueParagraphId = "form-item-error";
  } else if (warning) {
    inputIssueClassName = "form-item-input-warning";
    inputIssueParagraphId = "form-item-warning";
  }
  return (
    <div className="form-item">
      <div className="form-item-label-group">
        <label className="form-item-label-primary" htmlFor={id}>
          {label}
        </label>
        {!required && (
          <span className="form-item-label-secondary">Optional</span>
        )}
      </div>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          className={`form-item-input ${inputIssueClassName}`}
          value={value || ""}
          onChange={handleChange}
          required={required}
          aria-required={required}
          placeholder={placeholder}
          aria-disabled={disabled}
          readOnly={readOnly || disabled} // for accessibility
          aria-readonly={readOnly}
          maxLength={maxlength}
          autoFocus={autoFocus}
          aria-invalid={!!error || !!warning}
          aria-describedby={inputIssueParagraphId}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      ) : (
        <input
          id={id}
          className={`form-item-input form-item-input-fixed-height ${inputIssueClassName}`}
          type={type}
          value={value || ""}
          onChange={handleChange}
          required={required}
          aria-required={required}
          placeholder={placeholder}
          aria-disabled={disabled}
          readOnly={readOnly || disabled} // for accessibility
          aria-readonly={readOnly}
          maxLength={maxlength}
          pattern={pattern}
          autoFocus={autoFocus}
          aria-invalid={!!error || !!warning}
          aria-describedby={inputIssueParagraphId}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}
      {error && (
        <p id="form-item-error" className="form-item-error-message">
          {error}
        </p>
      )}
      {!error && warning && (
        <p id="form-item-error" className="form-item-warning-message">
          {warning}
        </p>
      )}
    </div>
  );
};
