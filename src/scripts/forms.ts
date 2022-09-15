/**
 * needed because only works in ts like that
 */
export const formData = (form: HTMLFormElement) => {
    const inputs = form.querySelectorAll('input');
    let values: {[prop: string]: string} = {};

    inputs.forEach(input => {
      values[input.id] = input.value;
    });
    return values;
  };
