import useUser from "../hooks/useUser";
import KeyData from "../components/KeyData";

const KeyDataContainer = () => {
  const { keyData } = useUser();

  return (
    <div className="key-data-container">
      <KeyData value={keyData?.calorieCount} kind={"Calories"} />
      <KeyData value={keyData?.proteinCount} kind={"Proteines"} />
      <KeyData value={keyData?.carbohydrateCount} kind={"Glucides"} />
      <KeyData value={keyData?.lipidCount} kind={"Lipides"} />
    </div>
  );
};

export default KeyDataContainer;
