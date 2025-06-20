import DetailBodyBox from "./DetailBodyBox";
import DetailBodyInput from "./DetailBodyInput";
import DetailBodyTop from "./DetailBodyTop";
import DetailHeader from "./DetailHeader";

const Detail = () => {
  return (
    <div className=" font-body flex flex-col p-3 w-full ">
      <DetailHeader />
      <DetailBodyTop />
      <DetailBodyInput />
      <DetailBodyBox />
    </div>
  );
};

export default Detail;
