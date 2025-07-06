import React from 'react';
import { DayPicker } from 'react-day-picker';
import { format, isBefore, startOfDay, addDays } from 'date-fns';
import 'react-day-picker/dist/style.css';
import './DateSelect.css';

const DateSelect = ({ 
  selectedDate, 
  onDateSelect, 
  error, 
  label = "Preferred Date *",
  className = "" 
}) => {
  // Get tomorrow's date for minimum selectable date
  const tomorrow = startOfDay(addDays(new Date(), 1));
  
  // Disable past dates (today and earlier)
  const disabledDays = [
    { before: tomorrow }
  ];



  const handleDateSelect = (date) => {
    if (date) {
      const formattedDate = format(date, 'yyyy-MM-dd');
      onDateSelect(formattedDate);
    }
  };

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium mb-2" style={{color: 'var(--charcoal-black)'}}>
          {label}
        </label>
      )}
      
      <div className="bg-white rounded-lg shadow p-4">
        <DayPicker
          mode="single"
          selected={selectedDate ? new Date(selectedDate) : undefined}
          onSelect={handleDateSelect}
          disabled={disabledDays}
          defaultMonth={tomorrow}
          fromMonth={tomorrow}
          toMonth={addDays(new Date(), 365)} // Allow selection up to 1 year from now
          showOutsideDays={false}
          fixedWeeks
          className="w-full"
        />
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default DateSelect; 