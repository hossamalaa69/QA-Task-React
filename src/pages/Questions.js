import React, { Component } from 'react';
import {connect} from 'react-redux'
import { loadQuesions, deleteQuestion, addQuestion } from '../store/actions/qaActions';
import Question from '../components/Question';
//import Pagination from '../Pagination';
import AddQuestion from '../components/AddQuestion';
import Grid from '@material-ui/core/Grid';

class Questions extends Component {
    
    /*
    state = {
        currentPage: 1,
        questionsPerPage: 4
    }*/
    
    formatAMPM = () => {
        var date = new Date();
        var dateYMD = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();

        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = dateYMD + ' ' + hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    createQuestion = (content) => {
        var date = this.formatAMPM();
        var id = (Math.floor(Math.random()* 1000)).toString();
        var answers = [];
        const newQuestion = {
            id: id,
            date: date,
            content: content,
            answers: answers
        }; 
        this.props.addQuestion(newQuestion);
    }

    onItemDelete = (id) => {
        //console.log(id);
        this.props.deleteQuestion(id);
    }
    onAnswersClicked = (id) => {
        //console.log("Answers of: " + id);
        this.props.history.push('/question/' + id);
    }
    paginate = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        });
    }

    render() { 

        const questions = this.props.questions.reverse();

        /*const indexOfLastQuestion = this.state.currentPage * this.state.questionsPerPage;
        const indexOfFirstQuestion = indexOfLastQuestion - this.state.questionsPerPage;
        const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);
        */
        const questionsList = questions.length ? (
            questions.map(question => {
              return (  
                <div className="center" key={question.id} style={{ margin: '20px' }}>
                    <Question 
                    question={question} 
                    onItemDelete = {this.onItemDelete} 
                    onAnswersClicked={this.onAnswersClicked}     
                    />
                </div>
              )
            })
            ):(
              <div/>
        );

        return ( 
            <div style={{ marginRight: '15%', marginLeft: '5%', marginTop: '30px', flexGrow: '1' }}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <AddQuestion createQuestion={this.createQuestion} />
                    </Grid>                    
                    <Grid item xs={8}>    
                        {questionsList}
                    </Grid>
                </Grid>  
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
      deleteQuestion: (id) => dispatch(deleteQuestion(id)),
      addQuestion: (question) => dispatch(addQuestion(question))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
