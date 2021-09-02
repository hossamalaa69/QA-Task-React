import React, { Component } from 'react';
import {connect} from 'react-redux'
import { loadQuesions, deleteQuestion } from '../store/actions/qaActions';
import Question from '../components/Question';
import Pagination from '../Pagination';

class Questions extends Component {
    
    state = {
        currentPage: 1,
        questionsPerPage: 4
    }

    onItemDelete = (id) => {
        console.log(id);
        this.props.deleteQuestion(id);
    }
    
    paginate = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        });
    }

    render() { 

        const questions = this.props.questions;

        const indexOfLastQuestion = this.state.currentPage * this.state.questionsPerPage;
        const indexOfFirstQuestion = indexOfLastQuestion - this.state.questionsPerPage;
        const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);


        const questionsList = currentQuestions.length ? (
            currentQuestions.map(question => {
              return (  
                <div className="center" key={question.id} style={{ margin: '20px' }}>
                    <Question question={question} onItemDelete = {this.onItemDelete} />
                </div>
              )
            })
            ):(
              <div/>
        );

        return ( 
            <div style={{ marginRight: '15%', marginLeft: '15%', marginTop: '30px' }}>
                {questionsList}
                <Pagination
                  postsPerPage={this.state.questionsPerPage}
                  totalPosts={questions.length}
                  paginate={this.paginate}/>
            </div>
        );
    }
}
 
const mapStateToProps = (state) => {
    return {
      questions: state.questions
    }
}  

const mapDispatchToProps = (dispatch) => {
    return {
      loadQuesions: () => dispatch(loadQuesions()),
      deleteQuestion: (id) => dispatch(deleteQuestion(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
