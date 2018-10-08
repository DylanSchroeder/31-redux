import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './modal.css';

export default class Modal extends Component {
  render() {
    console.log(this.props);
    const wrapperClassName = this.props.show ? 'modal display-block' : 'modal display-none';
    return (
      <div className={wrapperClassName}>
        <main>
          <button onClick={this.props.handleClose} className="modal-close">x</button>

          {this.props.title && 
            <h2>{this.props.title}</h2>}

          {this.props.children}
        </main>
      </div>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  handleClose: PropTypes.func,
  children: PropTypes.node,
};