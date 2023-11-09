import React, { useEffect, useState } from "react";

import {
  DivWrapper,
  DivClock,
  Clock,
  Hour,
  Hr,
  Minute,
  Min,
  Second,
  Sec,
} from "./ClockApp.css";

const deg = 6;

export default function ClockApp() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      let time = new Date();
      let hour = time.getHours() * 30;
      let minute = time.getMinutes() * deg;
      let second = time.getSeconds() * deg;
      setHour(hour);
      setMinute(minute);
      setSecond(second);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <DivWrapper>
        <DivClock>
          <Clock>
            <Hour>
              <Hr
                style={{ transform: `rotateZ(${hour + minute / 12}deg)` }}
              ></Hr>
            </Hour>
            <Minute>
              <Min style={{ transform: `rotateZ(${minute}deg)` }}></Min>
            </Minute>
            <Second>
              <Sec style={{ transform: `rotateZ(${second}deg)` }}></Sec>
            </Second>
          </Clock>
        </DivClock>
      </DivWrapper>
    </>
  );
}
