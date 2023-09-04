import { IndexeddbPersistence } from 'y-indexeddb';
import Formula from './components/Formula';
import Navbar from './components/Navbar';
import Toolbar from './components/Toolbar';
import Table from './components/table/Table';
import { Doc } from 'yjs';
import { WebrtcProvider } from 'y-webrtc';
import CreateAppState from './yjs/CreateAppState';
import Login from './components/Login';

const doc = new Doc();
const networkProvider = new WebrtcProvider('syn-global-room', doc, {
  signaling: ['ws://localhost:3000/ws'],
});
new IndexeddbPersistence('syn-global-room', doc);

function App() {
  const state = CreateAppState(networkProvider, doc);

  return (
    <>
      <Login
        localUser={state.localUser}
        remoteUsers={state.remoteUsers}
        onLogin={state.handleLogin}
      />
      <Navbar />
      <Toolbar />
      <Formula />
      <Table />
    </>
  );
}

export default App;
