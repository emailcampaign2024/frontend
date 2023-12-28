export const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    // Format the date (Month abbreviation, Day)
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: '2-digit',
    }).format(date);
  
    // Format the time (hours, minutes, AM/PM)
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const amOrPm = date.getHours() >= 12 ? 'pm' : 'am';
  
    const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')} ${amOrPm}`;
  
    const finalFormat = `${formattedDate} at ${formattedTime}`;
    return finalFormat;
  };