import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo.png";
import GeneralStyles from "../../../styles/GeneralStyles.module.css";
import ResetPasswordForm from "./ResetPasswordForm";
import AuthLayout from "../../layouts/AuthLayout";

const ResetPassword = () => {
    return (
        <AuthLayout>
              <ResetPasswordForm />
        </AuthLayout>
    );
};

export default ResetPassword;