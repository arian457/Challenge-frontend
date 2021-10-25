import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Profile } from "../pages";
import { Layout, LoginForm, RegisterForm } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getAllService } from "../services";
import { fillUserData } from "../store/authSlice";
import { useEffect } from "react";

const App = () => {
  const { isLogged, user } = useSelector((state) => state.user_auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMe = async () => {
      const response = await getAllService("me");
      dispatch(fillUserData(response.data));
    };
    if (!user.firstName && isLogged) {
      fetchMe();
    }
  }, [dispatch, isLogged, user]);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
