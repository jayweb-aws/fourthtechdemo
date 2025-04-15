import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo.png";
import GeneralStyles from "../../../styles/GeneralStyles.module.css";
import ForgetPasswordForm from "./ForgetPasswordForm";
import AuthLayout from "../../layouts/AuthLayout";

const ForgetPassword = () => {
    return (
        <AuthLayout>
              <ForgetPasswordForm />
        </AuthLayout>
    );
};

export default ForgetPassword;

