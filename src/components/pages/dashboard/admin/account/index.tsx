import AccountForm from "./AccountForm";
import ChangePasswordForm from "./ChangePasswordForm";

const Account = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-8">
        <div className="bg-[#ffffff] px-5 py-4">
          <h2 className="text-[#232D42] text-xl md:text-3xl font-medium border-b-2 pb-3">My Account</h2>
          <AccountForm />
          <ChangePasswordForm />
        </div>
      </div>
      <div className="col-span-12 md:col-span-4">

      </div>
    </div>
  );
};

export default Account;
