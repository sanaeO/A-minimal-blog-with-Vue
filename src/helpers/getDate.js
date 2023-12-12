export const getDate = (_date) => {
    const dateOnly = _date.split(" ")[0];

    const [day, month, year] = dateOnly.split('/');
    const date = new Date(`${year}-${month}-${day}`);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    return formattedDate;
  };