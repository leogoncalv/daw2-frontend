import { useRoutes } from "react-router-dom";
import PrivateRouters from "../Routes/PrivateRouters";
import PublicRouters from "../Routes/PublicRouters";

export default function Routes() {
    return useRoutes([PrivateRouters, PublicRouters]);
}


