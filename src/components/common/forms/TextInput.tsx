const TextInput = ({
  label,
  type = "text",
  handleChange,
  value,
  errors,
  placeholder,
  touched,
  name,
  isRequired = false,
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
}) => {
  return (
    <div className="mb-5 flex w-full flex-col gap-1">
      <label className="font-semibold">
        {label} {isRequired && <span className="text-danger">*</span>}
      </label>
      <input
        name={name}
        type={type}
        className="custom_focus_input rounded-[10px] border-[1px] border-[#C9C9C9] px-4 py-3"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <p className="pt-[3px] text-sm text-red-600">
        {errors && touched && errors}
      </p>
    </div>
  );
};

export default TextInput;
