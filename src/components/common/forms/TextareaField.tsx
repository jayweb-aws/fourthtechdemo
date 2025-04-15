const TextareaField = ({
  label,
  type,
  handleChange,
  value,
  errors,
  placeholder,
  touched,
  name,
  isRequired = false,
  rows,
}: {
  label: any;
  type: any;
  handleChange: any;
  value: any;
  errors: any;
  placeholder: any;
  touched: any;
  name: any;
  isRequired: any;
  rows: any;
}) => {
  return (
    <div className="mb-5 flex flex-col gap-1">
      <label className="font-semibold">
        {label} {isRequired && <span className="text-danger">*</span>}
      </label>
      <textarea
        name={name}
        className="custom_focus_input rounded-[10px] border-[1px] border-[#C9C9C9] px-4 py-3"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        rows={rows}
      />
      <p className="pt-[3px] text-sm text-red-600">
        {errors && touched && errors}
      </p>
    </div>
  );
};

export default TextareaField;
