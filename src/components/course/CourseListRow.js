/**
 * Created by chungch on 6/30/2017.
 */
import React, {PropTypes} from 'react';
import { Link } from 'react-router';


const CourseListRow = ({course}) => {
  return (
    <tr>
      <td><a href={course.watchHref} target="_blank">watch</a></td>
      <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  );
};

CourseListRow.prototype = {
  courses: PropTypes.array.isRequired
}

export default CourseListRow;
