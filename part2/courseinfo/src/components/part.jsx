
const Part = ({ course: { key, name, exercises } }) => {
  return (
    <tr>
      <td key={key}>{name}</td><td>{exercises}</td>
    </tr>
  );
};

export default Part;