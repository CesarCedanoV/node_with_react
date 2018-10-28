import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import StripePayments from './StripePayments';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return ;
            case false:
                return (
                    <li><a href="/auth/google">Login / Sing up with Google</a></li>
                );
            default:
                return [
                        <li key="1"><StripePayments /></li>,
                        <li key="3" style={{margin: '0 10px'}}> Credits: {this.props.auth.credits}</li>,
                        <li key="2"><a href="/api/logout">Logout</a></li>
                    ];
        }
    } 

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link 
                        to={this.props.auth ? '/surveys' : '/'}
                        className="brand-logo center"
                    >Emaily</Link>
                
                    <spam className="center">{this.props.auth?`Welcome ${this.props.auth.displayName}`:''}</spam>
                    
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
                
        );
    }
}

function mapStateToProps({auth}){
   return { auth };
}
export default connect(mapStateToProps)(Header);
