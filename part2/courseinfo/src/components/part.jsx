
const Part = ({ course: { key, name, exercises } }) => (
  <tr>
    <td key={key}>{name}</td><td>{exercises}</td>
  </tr>
);

export default Part;