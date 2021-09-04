import React, { Component } from 'react';
import Answer from '../components/Answer';
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid';
import AddAnswer from '../components/AddAnswer';
import { editQuestion } from '../store/actions/qaActions';

class Answers extends Component {
    
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

    createAnswer = (content) => {
        //console.log(content);
        var date = this.formatAMPM();
        var id = (Math.floor(Math.random()* 1000)).toString();
        const newAnswer = {
            id: id,
            date: date,
            content: content
        }; 
        var q_id = this.props.match.params.q_id;
        var question = this.props.questions.find(q => q.id === q_id);
        question.answers.push(newAnswer);
        this.props.editQuestion(question);
        this.forceUpdate();
    }

    onItemDelete = (id) => {
        //console.log(id);
        var q_id = this.props.match.params.q_id;
        var question = this.props.questions.find(q => q.id === q_id);
        var answers = question.answers;
        var newAnswers = answers.filter(ans => ans.id !== id);
        question.answers = newAnswers;
        //console.log(question);
        this.props.editQuestion(question);
        this.forceUpdate();
    }

    render() { 
        const q_id = this.props.match.params.q_id;
        const question = this.props.questions.find(q => q.id === q_id);
        const answers = question.answers.reverse();

        const answersList = answers.length ? (
            answers.map(answer => {
              return (  
                <div className="center" key={answer.id} style={{ margin: '5px' }}>
                    <Answer 
                    answer={answer} 
                    onItemDelete = {this.onItemDelete}    
                    />
                </div>
              )
            })
            ):(
              <div>
                  No Answers Yet!
              </div>
        );
        return ( 
            <div className="content center" style={{margin: '20px'}}>
                <h3>Answers for: {question.content}</h3>
                <br/>
                <div style={{ marginRight: '10%', marginLeft: '5%', marginTop: '30px', flexGrow: '1' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <AddAnswer createAnswer={this.createAnswer}/>
                        </Grid>                    
                        <Grid item xs={8}>    
                            {answersList}
                        </Grid>
                    </Grid>  
                </div>
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
        editQuestion: (question) => dispatch(editQuestion(question))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
