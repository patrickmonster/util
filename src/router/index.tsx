import { getParameter } from "@/lib/window";
import { RouteObject, useRoutes } from "react-router-dom";

import Main from "@/page/Main";
import PageNotFound from "@/page/PageNotFound";
import BotChzzk from "@/page/bot/chzzk";
import { ErrorBoundary } from "react-error-boundary";

///////////////////////////////////////////////////////////////////////////////////////
const ErrorFallback = () => (
  <img
    alt="Midone Tailwind HTML Admin Template"
    className="w-[450px] h-48 lg:h-auto"
    // src={errorIllustration}
  />
);
///////////////////////////////////////////////////////////////////////////////////////

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/chzzk/bot",
    element: <BotChzzk />,
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
];

export default () => {
  const ex = getParameter("EX");
  const r = routes;

  return useRoutes(
    r.map(
      (route): RouteObject =>
        Object.assign(route, {
          children: route.children?.map((child: RouteObject): RouteObject => {
            const { element } = child;
            return {
              ...child,
              element: (
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  {element}
                </ErrorBoundary>
              ),
              path: `${route.path}/${child.path}`,
            };
          }),
        })
    ) as RouteObject[]
  );
};
