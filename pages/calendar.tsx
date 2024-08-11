import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { MOCK_DATA } from "../mock";
import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

const localizer = momentLocalizer(moment);

const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

export const MyCalendar = (props) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "4px",
            backgroundColor: "#656172",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Calendar
            localizer={localizer}
            events={MOCK_DATA}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            style={{
              border: "1px solid black",
              borderRadius: "4px",
              backgroundColor: "yellow",
            }}
          />
          <Example />
        </div>
      </LocalizationProvider>
    </>
  );
};

export default MyCalendar;
