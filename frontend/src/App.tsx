import CoverLetter from "./Coverletter";
import HomeNavbar from "./components/HomeNavbar";
import { Dashboard } from "./components/dashboard";
import SidebarMain from "./components/sidebar-main";

function App() {
  return (
    <>
      {/* <HomeNavbar />
      <HomePage /> */}
      <div className='flex min-h-screen w-full gap-2'>
        <div className='flex flex-col w-64'>
          <SidebarMain />
        </div>
        <div className='flex-1 overflow-y-auto'>
          <CoverLetter />
        </div>
      </div>
    </>
  );
}

export default App;
