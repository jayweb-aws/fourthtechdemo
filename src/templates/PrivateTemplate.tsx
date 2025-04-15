/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import { isAuthorized } from "../utils/auth";

type PrivateTemplateProps = {
    children: React.ReactNode
}

const PrivateTemplate = (props: PrivateTemplateProps) => {
    const { children } = props;
    const router = useRouter();
    const { refresh, user: { email } } = useAppSelector((state) => state.auth);

    useEffect(() => {
        if (refresh && !isAuthorized(email, refresh)) {
            router.push("/signin");
        }
    }, [refresh])

    return refresh && isAuthorized(email, refresh) ? <>{children}</> : <></>
};

export default PrivateTemplate;