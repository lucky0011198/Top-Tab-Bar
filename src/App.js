import * as React from "react";
import "./style.css";

const Tabbar = ({ Data, color, children }) => {
  const [pos, setPos] = React.useState(Array(5).fill(0));
  let position = Array(5).fill(0);
  const [activepos, setactivepos] = React.useState(0);

  React.useEffect(() => {
    position[0] = 1;
    setPos(position);
  }, []);

  return (
    <>
      <div className="__tabbar" onChange={() => {}}>
        {typeof Data !== "undefined"
          ? Data.map((item, index) => (
              <span
                key={index}
                style={{
                  color: pos[index] === 1 ? color : "#363636c7",
                  borderBottom: pos[index] === 1 ? `solid ${color} 2px` : "none"
                }}
                onClick={() => {
                  position[index] = 1;
                  setPos(position);
                  setactivepos(index);
                }}
                className={pos[index] === 1 ? "active" : "inactive"}
              >
                {item.icon}
                <b> {item.name}</b>
                {item.count > 0 ? (
                  <div className="badges">
                    <b>{item.count}</b>
                  </div>
                ) : (
                  ""
                )}
              </span>
            ))
          : " "}
      </div>
      <div>{typeof children !== "undefined" ? children[activepos] : ""}</div>
    </>
  );
};
export default Tabbar;
