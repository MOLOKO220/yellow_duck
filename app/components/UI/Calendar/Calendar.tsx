"use client";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./Calendar.scss";

export default function Calendar() {
  return (
    <div className="Calendar">
      <h6>Календар поїздок</h6>
      <div>
        <button>+ Купити квиток</button>
        <DayPicker
          showOutsideDays
          mode="single"
          onSelect={(date) => console.log(date)}
        />
      </div>
    </div>
  );
}
