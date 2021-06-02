import React from "react";
import NavigationAppBar from "./NavigationAppBar";
import MainPage from "./main-page/MainPage";
import PhotographersPage from "./photographes-page/PhotographersPage";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PhotographerPage from "./photographer-page/PhotographerPage";

function App() {
    return (
        <BrowserRouter>
            <div>
                <NavigationAppBar/>
                <Switch>
                    <Route path={"/directors/:directorId"}>
                        <PhotographerPage/>
                    </Route>
                    <Route path={"/directors"}>
                        <PhotographersPage/>
                    </Route>
                    <Route path={"/"}>
                        <MainPage/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
