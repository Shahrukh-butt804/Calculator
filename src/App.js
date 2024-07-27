import { useState } from "react";

import { evaluate, typeOf } from "mathjs";


function App() {

  // let res = evaluate("2+6+2*5+6")
  // console.log(res)

  const [isOff, setIsOff] = useState();


  const [input, setInput] = useState([]);

  const [value, setValue] = useState([]);
  const [result, setResult] = useState('');





  // Follows Bodmas Rule Now
  const calculate = () => {

    try {
      const evaluatedResult = evaluate(input.join(""));
      if (typeof evaluatedResult === 'number' && !Number.isInteger(evaluatedResult)) {
        setInput([Number(evaluatedResult).toFixed(2)]);
      } else {
        setInput([evaluatedResult]);
      }
      // console.log(evaluatedResult)
      // setResult(evaluatedResult);

    } catch (error) {
      setResult('Error');
      alert("Invalid Input")
    }
  };







  // This code is for Simple Calculator
  // function operatorAndConcate(operator) { 
  //   // console.log(value, typeof value, "this is value")
  //   numbers.push(Number(value))
  //   setValue("")
  //   console.log(numbers)


  //   if(operator !== "=") {
  //     operators.push(operator)
  //     console.log(operators)
  //   }
  // }

  // This code is for Simple Calculator
  // function calculate() {
  //   let sum=0
  //   for(let i=0; i<numbers.length; i++) {
  //     if(i==0) {
  //       sum = numbers[i]
  //     } else {
  //       if(operators[i-1] == "+") {
  //         sum += numbers[i]
  //       } else if(operators[i-1] == "-") {
  //         sum -= numbers[i]
  //       } else if(operators[i-1] == "*") {
  //         sum *= numbers[i]
  //       } else if(operators[i-1] == "/") {
  //         sum /= numbers[i]
  //       }
  //     }
  //   }
  //   setInput([...input,"=",sum])
  //   setNumbers([])
  //   numbers.push([])
  //   setoperators([])
  //   setValue(sum)
  // }


  return (
    // main div
    <div className="flex justify-center items-center h-screen">

      {/* Calculator div */}
      <div className='border border-black w-[80vw] h-[85vh] md:w-[35vw] md:h-[85vh]' style={{background:"#434F60"}}>

        {/* screen */}
        <div className="w-full flex  justify-center items-center h-[15vh] mt-4 ">

          <div className={`border text-white bg-black border-white w-[60vw] md:w-[26vw] h-[8vh] md:h-[10vh] rounded-lg pt-5 ps-3`}>
            <h1 className='text-2xl' >{isOff ?  ""  : input.length !== 0? input : "0"}</h1>
          </div>

        </div>

        {/* Seperatior */}
        <div className='bg-black min-h-1 min-w-full'></div>




        {/* Buttons */}
        <div className='mt-5'>



          {/* controllers Row */}

          <div className='flex justify-center items-center h-[10vh] gap-8 my-5'>
            <button className={`${!isOff? 'bg-red-600 text-white hover:bg-red-700'  : 'bg-emerald-800 text-white hover:bg-emerald-950'} 
            border border-black w-[10vw] h-[8vh] md:w-[5vw] md:h-[10vh] rounded-lg
            `}
              onClick={() => {
                setInput([])
                setIsOff(isOff => !isOff)
              }}
            >{isOff? "ON":"OFF"}</button>
            <button className='border border-black w-[10vw] h-[8vh] md:w-[5vw] md:h-[10vh] rounded-lg
             bg-black text-3xl text-white font-bold hover:bg-zinc-600'
              onClick={() => {
                setInput(input.slice(0,-1))
              }}>C</button>
            <button className='border border-black w-[10vw] h-[8vh] md:w-[5vw] md:h-[10vh] rounded-lg
             bg-yellow-400 text-3xl text-white font-bold hover:bg-yellow-600'
              onClick={() => {
                // setValue(value + "9");
                // setInput([...input, 9]);
              }}>%</button>
            <button className='border border-black w-[10vw] h-[8vh] md:w-[5vw] md:h-[10vh] rounded-lg
             bg-yellow-400 text-3xl text-white font-bold hover:bg-yellow-600'
              onClick={() => {
              }}>~</button>
          </div>














          {/* 1st row */}
          <div className='flex justify-center items-center h-[10vh] gap-8 my-5'>
            <button className='border border-black w-[10vw] h-[8vh] md:w-[5vw] md:h-[10vh] rounded-lg
             bg-blue-400 text-3xl text-white font-bold hover:bg-blue-600'
              onClick={() => {
                setValue(value + "7");
                setInput([...input, 7]);
              }}
            >7</button>
            <button className='border border-black w-[10vw] h-[8vh] md:w-[5vw] md:h-[10vh] rounded-lg
             bg-blue-400 text-3xl text-white font-bold hover:bg-blue-600'
              onClick={() => {
                setValue(value + "8");
                setInput([...input, 8]);
              }}>8</button>
            <button className='border border-black w-[10vw] h-[8vh] md:w-[5vw] md:h-[10vh] rounded-lg
             bg-blue-400 text-3xl text-white font-bold hover:bg-blue-600'
              onClick={() => {
                setValue(value + "9");
                setInput([...input, 9]);
              }}>9</button>
            <button className='border border-black w-[10vw] h-[8vh] md:w-[5vw] md:h-[10vh] rounded-lg
             bg-yellow-400 text-3xl text-white font-bold hover:bg-yellow-600'
              onClick={() => {
                setInput([...input, "/"]);
              }}>/</button>
          </div>

          {/* 2nd row */}
          <div className='flex justify-center items-center h-[10vh] gap-8 my-5'>
            
            <button className='border border-black w-[10vw] h-[8vh] md:w-[5vw] md:h-[10vh] rounded-lg
             bg-blue-400 text-3xl text-white font-bold hover:bg-blue-600'
              onClick={() => {
                setValue(value + "4");
                setInput([...input, 4]);
              }}>4</button>
            <button className='border border-black w-[10vw] h-[8vh] md:w-[5vw] md:h-[10vh] rounded-lg
             bg-blue-400 text-3xl text-white font-bold hover:bg-blue-600' onClick={() => {
              setValue(value + "5");
              setInput([...input, 5]);
            }}>5</button>
            <button className='border border-black w-[10vw] h-[8vh] md:w-[5vw] md:h-[10vh] rounded-lg
             bg-blue-400 text-3xl text-white font-bold hover:bg-blue-600'
              onClick={() => {
                setValue(value + "6");
                setInput([...input, 6]);
              }}>6</button>
            <button className='border border-black w-[10vw] h-[8vh] md:w-[5vw] md:h-[10vh] rounded-lg
             bg-yellow-400 text-3xl text-white font-bold hover:bg-yellow-600'
              onClick={() => {
                setInput([...input, "*"]);
              }}>*</button>
          </div>

          {/* 3rd row */}
          <div className='flex justify-center items-center h-[10vh] gap-8 my-5'>
            <button className='border border-black w-[10vw] h-[8vh] md:w-[5vw] md:h-[10vh] rounded-lg
             bg-blue-400 text-3xl text-white font-bold hover:bg-blue-600' onClick={() => {
              setValue(value + "1");
              setInput([...input, 1]);
            }}>1</button>
            <button className='border border-black w-[10vw] h-[8vh] md:w-[5vw] md:h-[10vh] rounded-lg
             bg-blue-400 text-3xl text-white font-bold hover:bg-blue-600' onClick={() => {
              setValue(value + "2");
              setInput([...input, 2]);
            }}>2</button>
            <button className='border border-black w-[10vw] h-[8vh] md:w-[5vw] md:h-[10vh] rounded-lg
             bg-blue-400 text-3xl text-white font-bold hover:bg-blue-600' onClick={() => {
              setValue(value + "3");
              setInput([...input, 3]);
            }}>3</button>
            <button className='border border-black w-[10vw] h-[8vh] md:w-[5vw] md:h-[10vh] rounded-lg
             bg-yellow-400 text-3xl text-white font-bold hover:bg-yellow-600' onClick={() => {
              setInput([...input, "-"]);
            }}>-</button>
          </div>

          {/* 4th row */}
          <div className='flex justify-center items-center h-[10vh] gap-8 my-5'>
            <button className='border border-black w-[10vw] h-[8vh] md:w-[5vw] md:h-[10vh] rounded-lg
             bg-blue-400 text-3xl text-white font-bold hover:bg-blue-600' onClick={() => {
              setInput([...input, 0]);
            }}>0</button>
            <button className='border border-black w-[10vw] h-[8vh] md:w-[5vw] md:h-[10vh] rounded-lg
             bg-blue-400 text-3xl text-white font-bold hover:bg-blue-600' onClick={() => {
              setInput([...input, "."]);
            }}>.</button>
            <button className='border border-black w-[10vw] h-[8vh] md:w-[5vw] md:h-[10vh] rounded-lg
             bg-indigo-800 text-3xl text-white font-bold hover:bg-zinc-600'
              onClick={() => {
                setInput([...input, "="])
                calculate()
              }}>=</button>
            <button className='border border-black w-[10vw] h-[8vh] md:w-[5vw] md:h-[10vh] rounded-lg
             bg-yellow-400 text-3xl text-white font-bold hover:bg-yellow-600' onClick={() => {
              setInput([...input, "+"]);
            }}>+</button>
          </div>


        </div>







      </div>




    </div>
  );
}

export default App;
