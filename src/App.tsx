import React, { Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { routes } from "./router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <route.route
                key={index}
                path={route.path}
                exact={route.exact}
                roles={route.roles}
                component={(props: any) => {
                  return (
                    <Suspense fallback={<div></div>}>
                      <route.component {...props} />
                    </Suspense>
                  );
                }}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
