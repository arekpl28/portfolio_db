import React, { useState } from "react";

import { Calc, CalculatorWrapper } from "./Calculator.css";

import Display from "./Dispaly";
import BtnMemory from "./BtnMemory";
import BtnLogic from "./BtnLogic";
import BtnFunctions from "./BtnFunctions";
import BtnNumbers from "./BtnNumbers";

export default function Calculator() {
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);
  const [data, setData] = useState("0");

  const handlerButtonPress = (content) => () => {
    const num = parseFloat(value);

    if (content === "C") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      setData("0");
      return;
    }
    if (content === "CE") {
      setValue("0");
      return;
    }
    if (content === "1/x") {
      setValue((1 / num).toString());
      return;
    }
    if (content === "ⁿ") {
      setValue(Math.pow(num, 2).toString());
      return;
    }
    if (content === "⇐") {
      if (value.length === 1) {
        setValue("0");
        return;
      } else {
        setValue(value.slice(0, value.length - 1));
      }
      return;
    }
    if (content === "-/+") {
      setValue((num * -1).toString());
      return;
    }
    if (content === "%") {
      if (operator === "+") {
        setValue((memory + parseFloat(memory * (num / 100))).toString());
      } else if (operator === "-") {
        setValue((memory - parseFloat(memory * (num / 100))).toString());
      } else if (operator === "x") {
        setValue(parseFloat(memory * (num / 100)).toString());
      } else if (operator === "/") {
        setValue(parseFloat(memory / (num / 100)).toString());
      } else {
        setValue((num / 100).toString());
      }
      setMemory(null);
      setOperator(null);
      return;
    }
    if (content === "√") {
      if (operator === "+") {
        setValue((memory + Math.sqrt(num)).toString());
      } else if (operator === "-") {
        setValue((memory - Math.sqrt(num)).toString());
      } else if (operator === "x") {
        setValue((memory * Math.sqrt(num)).toString());
      } else if (operator === "/") {
        setValue((memory / Math.sqrt(num)).toString());
      } else {
        setValue(Math.sqrt(num).toString());
      }
      setMemory(null);
      setOperator(null);
      return;
    }
    if (content === "MC") {
      if (!data) {
      } else {
        setData("0");
      }
      return;
    }
    if (content === "MR") {
      if (!data) {
      } else {
        setValue(data.toString());
      }
      return;
    }
    if (content === "M+") {
      setData((parseFloat(data) + num).toString());
      return;
    }
    if (content === "M-") {
      setData((parseFloat(data) - num).toString());
      return;
    }
    if (content === "MS") {
      setData(num);
      return;
    }
    if (content === ".") {
      if (value.includes(".")) return;
      setValue(value + ".");
      return;
    }
    const checkOperator = () => {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + num);
        } else if (operator === "-") {
          setMemory(memory - num);
        } else if (operator === "x") {
          setMemory(memory * num);
        } else if (operator === "/") {
          setMemory(memory / num);
        }
      } else {
        setMemory(num);
      }
    };
    if (
      content === "+" ||
      content === "-" ||
      content === "x" ||
      content === "/"
    ) {
      checkOperator();
      setValue("0");
      setOperator(content);
      return;
    }
    if (content === "=") {
      if (!operator) return;
      if (operator === "+") {
        setValue((memory + num).toString());
      } else if (operator === "-") {
        setValue((memory - num).toString());
      } else if (operator === "x") {
        setValue((memory * num).toString());
      } else if (operator === "/") {
        setValue((memory / num).toString());
      }
      setMemory(null);
      setOperator(null);
      return;
    }
    if (value[value.length - 1] === ".") {
      setValue(value + content);
    } else {
      setValue(parseFloat(num + content).toString());
    }
  };

  return (
    <>
      <CalculatorWrapper>
        <Calc>
          <Display value={value}></Display>
          <BtnMemory click={handlerButtonPress}></BtnMemory>
          <BtnLogic click={handlerButtonPress}></BtnLogic>
          <BtnNumbers click={handlerButtonPress}></BtnNumbers>
          <BtnFunctions click={handlerButtonPress}></BtnFunctions>
        </Calc>
      </CalculatorWrapper>
    </>
  );
}
