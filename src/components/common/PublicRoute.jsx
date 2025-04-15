import { useRouter } from "next/router";
import { useAppSelector } from "../../app/hooks";
import { isAuthorized } from "../../utils/auth";

export default function PublicRoute({ children }) {
  const {
    refresh,
    user: { email },
  } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const isLoggedIn = isAuthorized(email, refresh);
  if (isLoggedIn) {
    router.push("/");
  }
  return !isLoggedIn && children;
}
