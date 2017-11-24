/**
 * Created by chungch on 6/30/2017.
 */
import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
  return (
           <table className="table">
               <thead>
                 <th>&nbsp;</th><th>Title</th><th>Author</th><th>Category</th><th>Length</th>
               </thead>
               <tbody>
               {courses.map(course =>
                 <CourseListRow key={course.id} course={course} />)}
               </tbody>

           </table>
  );
};

CourseList.prototype = {
  course: PropTypes.array.required
}

export default CourseList;
