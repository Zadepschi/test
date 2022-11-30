import Filter from "./Filter";

const AllCategories = () => {
  return (
    <div className="cont">
      {[
        "all",
        "dress",
        "skirt",
        "pants",
        "pijamas",
        "shoes",
        "tunic",
        "shirt",
      ].map((category, index) => (
        <Filter key={index} category={category} />
      ))}
    </div>
  );
};
export default AllCategories;
