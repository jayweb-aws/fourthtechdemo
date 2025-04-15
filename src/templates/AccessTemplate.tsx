import { useAppSelector } from "../app/hooks";
import NotFound from "../components/pages/404";

type Roles = ("admin" | "student" | "instructor" | "hr")[]
type PrivateTemplateProps = {
    children: React.ReactNode
    accessRole: Roles
}

const AccessTemplate = (props: PrivateTemplateProps) => {
    const roleAccessChecker = (userRoles: Roles, accessRole: Roles) => {
        for (let role of accessRole) {
            if (userRoles.includes(role)) {
                return true;
            }
        }
        return false;
    }

    const { children, accessRole } = props;
    const { user: { roles } } = useAppSelector((state) => state.auth);

    return roleAccessChecker(roles, accessRole) ? <>{children}</> : <NotFound />
};

export default AccessTemplate;