import { useEffect, useState } from "react";
import "./App.css";
import { Wheel } from "react-custom-roulette";

function App() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [data, setData] = useState([
    { option: "Sameer Ahmed" },
    { option: "Sameer Ahmed" },
    { option: "Sameer Ahmed" },
    { option: "Sameer Ahmed" },
    { option: "Sameer Ahmed" },
    { option: "Sameer Ahmed" },
    { option: "Sameer Ahmed" },
    { option: "Sameer Ahmed" },
    { option: "Sameer Ahmed" },
    { option: "Sameer Ahmed" },
    { option: "Sameer Ahmed" },
    { option: "Sameer Ahmed" },
  ]);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4">
        <InputBoxComponent data={data} setData={setData} />
      </div>
      <div className="col-span-4">
        <WheelComponent
          handleClick={handleSpinClick}
          prizeNumber={prizeNumber}
          mustSpin={mustSpin}
          setMustSpin={setMustSpin}
          data={data}
        />
      </div>
      <div className="col-span-4">Reandom Topic</div>
    </div>
  );
}

function WheelComponent({
  handleSpinClick,
  prizeNumber,
  mustSpin,
  setMustSpin,
  data,
}: any) {
  return (
    <div>
      <h6 className="text-4xl font-bold pt-5 text-center">
        Kishore Sir Classes
      </h6>
      <div className="m-5 flex justify-center">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={["#3e3e3e", "#df3428"]}
          textColors={["#ffffff"]}
          spinDuration={0.5}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
      </div>
      <div className="flex justify-center">
        <ButtonComponent handleClick={handleSpinClick} buttonName="Spin" />
      </div>
    </div>
  );
}

function InputBoxComponent({ data, setData }: any) {
  const [name, setName] = useState("");
  function handleAddClick() {
    setData([...data, { option: `${name}` }]);
  }
  return (
    <div className="flex justify-center items-center h-screen max-w-2xl ">
      <div>
        <h6 className="text-4xl font-bold m-5 text-center">Add New Member</h6>
        {/* <label className="block mb-2 text-sm font-medium text-gray-900">
          First name
        </label> */}
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter Name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div className="m-5 flex justify-center">
          <ButtonComponent
            buttonName="Add the Name"
            handleClick={handleAddClick}
          />
        </div>
      </div>
    </div>
  );
}

function ButtonComponent({ handleClick, buttonName }: any) {
  return (
    <div>
      <button
        type="button"
        className=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        onClick={handleClick}
      >
        {buttonName}
      </button>
    </div>
  );
}
export default App;
