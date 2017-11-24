import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CourseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';


class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state ={
          course: Object.assign({},this.props.course),
          authors: Object.assign({}, this.props.authors),
          errors: {},
          saving: false
        };
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps (nextProps) {
         if(this.state.course.id != nextProps.course.id){
           this.setState({course: Object.assign({},nextProps.course)});
         }
    }

    updateCourseState(event) {
      const field = event.target.name;
      let course = Object.assign({},this.state.course);
      course[field] = event.target.value;
      return this.setState({course: course});
    }

    saveCourse(event){
      event.preventDefault();
      this.setState({saving:true});
      this.props.actions.saveCourse(this.state.course)
        .then(() => this.redirect());

    }

    redirect(){
      this.setState({saving:false});
      toastr.success('the course has been saved');
      this.context.router.push('/courses');
    }

    render() {
        return (
          <div>
            <CourseForm
              allAuthors={this.props.authors}
              course={this.state.course}
              errors={this.state.errors}
              onSave={this.saveCourse}
              saving={this.state.saving}
              onChange={this.updateCourseState} />
          </div>
        );
    }
}
ManageCoursePage.propTypes = {
    course: PropTypes.object,
    authors: PropTypes.array,
    actions: PropTypes.object
};
//pull in context available as this.context.router
ManageCoursePage.contextTypes = {
    router: PropTypes.object
};



function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id;
    const targetCourse = state.courses.filter(course => { return course.id == courseId});
    let course = targetCourse.length > 0 ? {id: targetCourse[0].id , watchHref:targetCourse[0].watchHref,
                                 title:targetCourse[0].title,
                                 authorId:targetCourse[0].authorId,
                                 length:targetCourse[0].length,
                                 category:targetCourse[0].category } :
                                 {id: '', watchHref:'', title:'', authorId:'', length:'', category:'' };

    const authorFormattedForDropdown = state.authors.map(author =>{
      return {
        value: author.id,
        text: author.firstName + ' ' + author.lastName
      };
    });

    return {
        course: course, authors: authorFormattedForDropdown
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(CourseActions, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage)



