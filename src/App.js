import React from "react";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { RoomProvider } from "./RoomContext";

function App() {
  const data = {
    name: "Rajesh",
    greeting: "Hello"
  };
  return (
    <RoomProvider value={data}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:id" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </RoomProvider>
  );
}

export default App;
