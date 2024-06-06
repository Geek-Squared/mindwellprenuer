import { ReactTidyCal } from "react-tidycal";

export default function Calendar() {
  return (
    <div className="flex flex-col items-center justify-start flex-grow w-full px-[8%] mt-[92px]">
      <div style={{
        padding: "100px"
      }}>
        <ReactTidyCal path="msngwelz/free-first-session" />
      </div>
    </div>
  );
}