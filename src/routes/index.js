import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const LandingPage = lazy(() => import("./landing-page"));

export const Routes = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path='/' component={LandingPage} />
      </Switch>
    </Suspense>
  )
}