import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-calendars/styles/material.css";
import "@syncfusion/ej2-dropdowns/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-lists/styles/material.css";
import "@syncfusion/ej2-layouts/styles/material.css";
import "@syncfusion/ej2-navigations/styles/material.css";
import "@syncfusion/ej2-popups/styles/material.css";
import "@syncfusion/ej2-splitbuttons/styles/material.css";
import "@syncfusion/ej2-grids/styles/material.css";
import "@syncfusion/ej2-treegrid/styles/material.css";
import "@syncfusion/ej2-react-gantt/styles/material.css";

import {
  ColumnsDirective,
  ColumnDirective,
  GanttComponent,
  EventMarkerDirective,
  DayMarkers,
  Inject,
  EventMarkersDirective,
} from "@syncfusion/ej2-react-gantt";
import { useEffect } from "react";

const Gantt = () => {
  let GanttData = [
    {
      TaskID: 2,
      TaskName: "Identify Site location",
      StartDate: new Date("04/02/2019"),
      EndDate: new Date("04/04/2019"),

      Progress: 57.142857142857146,

      BaselineEndDate: new Date("04/06/2019"),
      //   Duration: 1,
      //   subtasks: [
      //     {
      //       TaskID: 2,
      //       TaskName: "Identify Site location",
      //       BaselineStartDate: new Date("04/02/2019"),
      //       BaselineEndDate: new Date("04/06/2019"),
      //       StartDate: new Date("04/02/2019"),
      //       Duration: 0,
      //       Progress: 50,
      //     },
      //     {
      //       TaskID: 3,
      //       TaskName: "Perform Soil test",
      //       BaselineStartDate: new Date("04/04/2019"),
      //       BaselineEndDate: new Date("04/09/2019"),
      //       StartDate: new Date("04/02/2019"),
      //       Duration: 4,
      //       Progress: 50,
      //     },
      //     {
      //       TaskID: 4,
      //       TaskName: "Soil test approval",
      //       BaselineStartDate: new Date("04/08/2019"),
      //       BaselineEndDate: new Date("04/12/2019"),
      //       StartDate: new Date("04/02/2019"),
      //       Duration: 4,
      //       Progress: 50,
      //     },
      //   ],
    },
    {
      TaskID: 6,
      TaskName: "Develop floor plan for estimation",
      StartDate: new Date("04/04/2019"),
      EndDate: new Date("04/11/2019"),

      BaselineEndDate: new Date("04/08/2019"),
      Progress: 57.142857142857146,

      //   subtasks: [
      //     {
      //       TaskID: 6,
      //       TaskName: "Develop floor plan for estimation",
      //       BaselineStartDate: new Date("04/04/2019"),
      //       BaselineEndDate: new Date("04/08/2019"),
      //       StartDate: new Date("04/04/2019"),
      //       Duration: 3,
      //       Progress: 50,
      //     },
      //     {
      //       TaskID: 7,
      //       TaskName: "List materials",
      //       BaselineStartDate: new Date("04/02/2019"),
      //       BaselineEndDate: new Date("04/04/2019"),
      //       StartDate: new Date("04/04/2019"),
      //       Duration: 3,
      //       Progress: 50,
      //     },
      //     {
      //       TaskID: 8,
      //       TaskName: "Estimation approval",
      //       BaselineStartDate: new Date("04/02/2019"),
      //       BaselineEndDate: new Date("04/02/2019"),
      //       StartDate: new Date("04/04/2019"),
      //       Duration: 0,
      //       Progress: 50,
      //     },
      //   ],
    },
  ];
  let data1 = [
    {
      TaskID: 1,
      TaskName: "اجرا فلان",
      StartDate: new Date("04/02/1398"),
      EndDate: new Date("05/21/1399"),
    },
    {
      TaskID: 5,
      TaskName: "اجرا سازه همکف",
      StartDate: new Date("04/02/1398"),
      EndDate: new Date("05/21/1399"),
      //   subtasks: [
      //     {
      //       TaskID: 6,
      //       TaskName: "Develop floor plan for estimation",
      //       StartDate: new Date("04/04/1398"),
      //       Duration: 3,
      //       Progress: 50,
      //     },
      //     {
      //       TaskID: 7,
      //       TaskName: "List materials",
      //       StartDate: new Date("04/04/1398"),
      //       Duration: 3,
      //       Progress: 50,
      //     },
      //     {
      //       TaskID: 8,
      //       TaskName: "Estimation approval",
      //       StartDate: new Date("04/04/1398"),
      //       Duration: 3,
      //       Progress: 50,
      //     },
      //   ],
    },
  ];
  let taskSettings = {
    id: "TaskID",
    name: "TaskName",
    duration: "Duration",
    startDate: "StartDate",
    endDate: "EndDate",
    progress: "Progress",
    // child: "subtasks",
  };
  function queryTaskbarInfo(args) {
    const x =
      ((args.data.taskData.BaselineEndDate.getTime() -
        args.data.taskData.StartDate.getTime()) *
        100) /
      (args.data.taskData.EndDate.getTime() -
        args.data.taskData.StartDate.getTime());

    console.log({ args }, x);

    if (x < 100) {
      args.taskbarBgColor = "#FF006E";

      args.progressBarBgColor = "blue";
      args.data.Progress = x;
    } else if (args.data.Progress == 70) {
      args.progressBarBgColor = "yellow";
    } else if (args.data.Progress == 80) {
      args.progressBarBgColor = "lightgreen";
    }
  }

  useEffect(() => {
    // document.querySelectorAll(
    //   "div[style*='font-family: Helvetica Neue, Helvetica, Arial;']"
    // )[0].style.opacity = 0;
    document.querySelectorAll(
      "div[style*='font-family: Helvetica Neue, Helvetica, Arial;']"
    )[0].style.visibility = "hidden";

    document
      .querySelectorAll("table:first-child .e-timeline-top-header-cell")
      .forEach(
        (item) =>
          (item.innerHTML += `<div class="seasons"><div>بهار</div><div>تابستان</div><div>پاییز</div><div>زمستان</div></div>`)
      );
  }, []);

  return (
    <>
      <div
        id="gattChart"
        className="mt-9 text-xs text-[#173046]"
        style={{ direction: "ltr" }}
      >
        <GanttComponent
          queryTaskbarInfo={queryTaskbarInfo}
          timezone="UTC +3:30"
          tooltipSettings={{
            showTooltip: true,
          }}
          dataSource={GanttData}
          treeColumnIndex={1}
          taskFields={taskSettings}
          timelineSettings={{
            timelineUnitSize: 20,
            timelineViewMode: "Year",
          }}
          splitterSettings={{
            columnIndex: 4,
          }}
        >
          <ColumnsDirective>
            {/* <ColumnDirective field="TaskID" width="100"></ColumnDirective> */}
            <ColumnDirective
              field="TaskName"
              headerText="فعالیت"
              width="250"
            ></ColumnDirective>
            <ColumnDirective
              width="100"
              field="Duration"
              headerText="مدت زمان"
            ></ColumnDirective>
            <ColumnDirective
              width="100"
              field="StartDate"
              headerText="شروع"
            ></ColumnDirective>
            <ColumnDirective
              width="100"
              field="EndDate"
              headerText="پایان"
            ></ColumnDirective>
          </ColumnsDirective>

          <EventMarkersDirective>
            <EventMarkerDirective
              day={new Date("11/11/2019")}
              cssClass="e-custom-event-marker"
              // label="Project approval and kick-off"
            ></EventMarkerDirective>
          </EventMarkersDirective>
          <Inject services={[DayMarkers]} />
        </GanttComponent>
      </div>
      <style jsx global>{`
        .e-headercelldiv {
          text-align: center !important;
        }
        .e-content * {
          font-size: 10px !important;
          font-weight: 500 !important;
        }
        .e-headertext {
          font-weight: bold !important;
        }
        #gattChart * {
          font-family: "IRANYekanXVF", tahoma !important;
          color: #173046 !important;
        }
        .e-header-cell-label {
          text-align: center !important;
        }
        .e-gantt-child-taskbar-inner-div {
          text-align: left !important;
        }
        .seasons {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: space-around;
          font-size: 0.6rem;
        }
        .e-timeline-top-header-cell {
          position: relative !important;
        }
        .e-timeline-header-table-container:last-child {
          display: none !important;
        }
        .e-timeline-header-container {
          height: unset !important;
        }
      `}</style>
    </>
  );
};

export default Gantt;
