export function addComma(value: any) {
  if (isNaN(value)) {
    return 'Invalid number';
  }

  const numberValue = Number(value);

  if (Number.isInteger(numberValue)) {
    return numberValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    const formattedValue = numberValue.toFixed(2);

    const parts = formattedValue.split('.');

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return parts.join('.');
  }
}
