interface TimeLineProps {
  mode?: "left" | "alternate" | "right";
  items: any;
  color?: string;
}
const dotColor: any = {
  green: "border-green-400",
  red: "border-red-400",
  blue: "border-blue-400",
};

export const TimeLine = (props: TimeLineProps) => {
  console.log("props: ", props);

  const TimeNode = (props: any) => {
    const { children, color, index, lastItem } = props;
    return (
      <div className="flex w-full ">
        <div className="relative flex">
          {!lastItem && (
            <div
              className="absolute flex items-center justify-center w-2 h-full top-1 "
              style={{ left: "0.25rem" }}
            >
              <div
                className="h-full bg-gray-200 pointer-events-none "
                style={{ width: "2px" }}
              />
            </div>
          )}
          {props.dot === "clock" ? (
            <div className="absolute z-10 flex-shrink-0 w-4 h-4 overflow-hidden text-blue-600 bg-white fill-current top-1">
              <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" />
              </svg>
            </div>
          ) : (
            <div
              className={`absolute flex-shrink-0 w-4 h-4 bg-white  border-4 rounded-full top-1  ${
                color ? dotColor[color] : "border-gray-400"
              }`}
            />
          )}
          <div className="flex-grow max-w-lg pb-8 ml-8 ">
            <h2 className="text-sm font-medium tracking-wider text-gray-600 ">
              {children}
            </h2>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {props.items.map((item: any, idx: number) => (
        <TimeNode
          key={idx}
          index={idx}
          {...item}
          lastItem={props.items.length === idx + 1}
        />
      ))}
    </div>
  );
};
