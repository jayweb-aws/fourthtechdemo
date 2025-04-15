import dynamic from "next/dynamic";
import React from "react";
//@ts-ignore
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
//@ts-ignore

class ApexChart extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      series: [`${props?.data?.data?.subQuiz?.mark}`],
      options: {
        chart: {
          height: 350,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "69%",
            },
            track: {
              background: "#DEF6FF",
            },
            dataLabels: {
              show: true,
              name: {
                color: "#343434",
                offsetY: 30,
                fontWeight: 400,
                fontFamily: "Poppins",
                fontSize: "14px",
              },
              value: {
                offsetY: -22,
                fontSize: "33px",
                fontWeight: "600",
                fontFamily: "Poppins",
                color: "#00ADEF",
                formatter: function (val: any) {
                  return val;
                },
              },
            },
          },
        },
        fill: {
          color: "#00ADEF",
        },
        colors: ["#00ADEF"],
        labels: ["Candidate’s Score"],
        stroke: {
          lineCap: "round",
        },
      },
    };
  }

  render() {
    return (
      <div>
        <Chart
          //@ts-ignore
          options={this.state.options}
          //@ts-ignore
          series={this.state.series}
          type="radialBar"
          height={242}
        />
      </div>
    );
  }
}

export default ApexChart;
