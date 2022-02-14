import Part from './part';
import Header from './header';

const Content = ({ course: { parts } }) => {

  const listExercises = parts.map(c => c.exercises);
  const totalExercises = listExercises.reduce((previus, next) => previus + next);

  return (
    <div>
      <Header course={parts.name} />
      <table>
        <tbody>
          {parts.map(selectedCourse =>
            <Part key={selectedCourse.id} course={selectedCourse} />)}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan='2'>total of {totalExercises} exercises</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
};

export default Content;