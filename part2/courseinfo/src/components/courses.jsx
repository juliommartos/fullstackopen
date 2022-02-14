import Headers from "./header";
import Content from "./content";

const Courses = ({ courses }) =>
  courses.map(
    course => (
      <div key={course.id}>
        <Headers name={course.name} />
        <Content course={course} />
      </div>
    )
  );

export default Courses;
