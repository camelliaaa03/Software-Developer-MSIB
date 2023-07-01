import { Routes, Route, Outlet } from "react-router-dom";
import { Sidenav, DashboardNavbar } from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController } from "@/context";

export function Form() {
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "dark" ? "/img/logo.png" : "/img/logo.png"
        }
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Routes>
          {routes.map(({ layout, pages }) =>
            layout === "form" &&
            pages.map(({ path, element }) => (
              <Route key={path} exact path={path} element={element} />
            ))
          )}
        </Routes>
        <Outlet/>
      </div>
    </div>
  );
}

Form.displayName = "/src/layout/form.jsx";

export default Form;
