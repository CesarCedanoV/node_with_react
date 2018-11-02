import _ from 'lodash';
import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
    {name:'title', label:'Title'},
    {name:'subject', label:'Subject'},
    {name:'body', label:'Email body'},
    {name:'recipients', label:'Send to'}
]

class SurveyForm extends Component {
    renderFields(){
        return _.map(FIELDS, ({name,label}) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
        });
    }

    render() {
        return (
            <div>
                SurveyForm!
                <form onSubmit={this.props.handleSubmit(values => console.log(values) )}>
                    {this.renderFields()}
                    <Link to="/surveys">
                        <button type="cancel" className="red btn-flat left white-text">
                            Cancel
                            <i className="material-icons right">arrow_back</i>
                        </button>
                    </Link>
                   
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
                
            </div>
        );
    }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');
  
  _.each(FIELDS, ({name}) => {
      if (!values[name]){
          errors[name] = `You must provide a value.`;
      }
  });


    return errors;
}

export default reduxForm({
    validate,
    form:'surveyForm'
})(SurveyForm);