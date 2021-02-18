import AppRouter from "./router/AppRouter";
import fetchPersistedAuthData from "./utils/fetchPersistedAuthData";
import setAuthToken from "./utils/setAuthToken";

const data = fetchPersistedAuthData();

if (data) {
  setAuthToken(data.token);
}

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
