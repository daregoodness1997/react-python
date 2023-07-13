import { useState, useEffect } from "react";
import { PythonProvider } from "react-py";
import "./App.css";
import Chart from "./components/chart/Chart";
import FilterCard from "./components/filter-card/FilterCard";
import CSVReader from "react-csv-reader";
import Pill from "./components/pill/Pill";
import { AlgorithmMaker } from "./algo";
import Editor from "./components/code-view/Editor";
import { filtersData,data } from "./utils/data";

interface ParseProps {
  income: number;
  expenses: number;
  is_renter: boolean;
  credit_score: number;
  net_worth: number;
  is_employed: boolean;
  num_jobs: number;
  job_duration: number;
}

function App() {
  const [parsedata, setParsedData] = useState<ParseProps[]>([]);
  const [homelessIndex, setHomelessIndex] = useState<number[]>([]);
  const [filterName, setFilterName] = useState(filtersData[0]);
  const [input, setInput] = useState("");

  const AlgoMaker = new AlgorithmMaker();

  useEffect(() => {
    const homelessness = [];

    for (const parse of parsedata) {
      const result = AlgoMaker.calculateomelessness(
        parse.income,
        parse.expenses,
        parse.is_renter,
        parse.credit_score,
        parse.net_worth,
        parse.is_employed,
        parse.num_jobs,
        parse.job_duration
      );
      homelessness.push(result);
    }

    setHomelessIndex(homelessness);
  }, [filterName, parsedata]);

  const changeHandler = (data: any, fileInfo: any) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    console.dir(data, fileInfo);
    setParsedData(data);
  };

  

  return (
    <PythonProvider>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Editor input={input} setInput={setInput} />

        <div>
          <CSVReader
            parserOptions={{ header: true }}
            onFileLoaded={changeHandler}
          />
          <div className="box-container">
            <div>
              <FilterCard label={filterName} />
            </div>
            <div>
              <Chart
                label={"Economic Simulator"}
                data={data}
                labels={[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ]}
                datasets={[
                  {
                    label: "Homelessness",
                    data: homelessIndex,
                    borderColor: "rgb(255, 99, 132)",
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                  },
                ]}
              >
                <div className="chart-flter-container ">
                  {filtersData.map((filter) => (
                    <Pill
                      label={filter}
                      onClick={() => setFilterName(filter)}
                    />
                  ))}
                </div>
              </Chart>
            </div>
          </div>
        </div>
      </div>
    </PythonProvider>
  );
}

export default App;
