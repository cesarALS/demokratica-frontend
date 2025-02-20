"use client";

import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { format } from "date-fns"; {To get the date into a specific format}

interface DatePickerComponentProps {
  initialDate: Date;
  setValue: (date: Date) => void;
}

export default function DatePickerComponent({
  initialDate,
  setValue = () => {}
}: DatePickerComponentProps) {
  const [selectedTime, setSelectedTime] = useState(initialDate);

  const onChangeHandler = (date: Date | null): void => {
    if(date) setSelectedTime(date);          
    else setSelectedTime(initialDate);        
  };

  useEffect(() => {
    setValue(selectedTime);
  }, [selectedTime]);

  return (
    <DatePicker
      selected={selectedTime}
      onChange={onChangeHandler}
      timeInputLabel="Hora:"
      dateFormat="dd/MM/yyyy h:mm aa"
      className="rounded-lg border bg-ThirdGray p-1 text-center focus:outline-none focus:ring-1 focus:ring-PrimBlack"
      showTimeInput
    />
  );
}
