import MessageContainer from "../../components/Messages/MessageContainer";
import SideBar from "../../components/SideBar/SideBar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] p-6 rounded-lg shadow-md bg-gray-800">
      <SideBar />
      <MessageContainer />
    </div>
  );
};

export default Home;
