/**
 * Created by ChungCh on 6/9/2017.
 */
import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as courseAction from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.state ={
      course: {title:""}
    };
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }
  render() {
        const {courses} = this.props;

        return (
            <div>
              <h1>Courses</h1>
              <input type="submit"
                     value="Add New Course"
                     className="btn btn-primary"
                     onClick={this.redirectToAddCoursePage} />
              <CourseList courses={courses} />
            </div>
        );
  }
}
CoursePage.propTypes = {
   actions: PropTypes.object,
   courses: PropTypes.array
};
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (CoursePage);
