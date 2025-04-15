export const InputErrorMessage = (props: {
  message: string;
  className?: string;
}) => {
  const { message, className } = props;
  return (
    <div className={className}>
      <p className="text-red-500">{message}</p>
    </div>
  );
};
