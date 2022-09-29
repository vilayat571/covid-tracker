import Contentbar from "./components/Contentbar/Contentbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Layout from "./layout/Layout";

function App() {
  return (
      <Layout>
        <Sidebar />
        <Contentbar />
      </Layout>
  );
}

export default App;