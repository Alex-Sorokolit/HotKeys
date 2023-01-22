import Select from 'react-select';
export const Form = () => {
  // Очистка інпутів (через очистку стейту)
  const reset = () => {
    // setName('');
    // setNumber('');
  };
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    // Очистка форми
    reset();
  };
  return (
    <section>
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <label>
          Category
          <Select
          // options={options}
          // onChange={this.handleChange}
          />
        </label>
        <label>
          ShortCut
          <input type="text" name="shortcut" required />
        </label>
        <label>
          Description
          <input type="text" name="description" required />
        </label>
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

// makeOptions = () => {
//   return this.state.breeds.map(breed => ({
//     value: breed.id,
//     label: breed.name,
//   }));
// };

// handleChange = option => {
//   this.props.onSelect(option.value);
// };
