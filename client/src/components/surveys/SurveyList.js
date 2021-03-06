import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "react-materialize";
import * as actions from "../../actions";
import sortType from "../sortType";
import emptyBox from "../../icons/empty-mailbox-edit.png";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  sortBy(surveys, type) {
    function compareDateSent(a, b) {
      if (a.dateSent < b.dateSent) return 1;
      if (a.dateSent > b.dateSent) return -1;
      return 0;
    }

    function compareTitleName(a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    }

    function compareMostReply(a, b) {
      if (a.yes + a.no < b.yes + b.no) return 1;
      if (a.yes + a.no > b.yes + b.no) return -1;
      return 0;
    }

    switch (type) {
      case "Latest Release":
        return surveys.sort(compareDateSent);
      case "Title Name":
        return surveys.sort(compareTitleName);
      case "Most Reply":
        return surveys.sort(compareMostReply);
      default:
        return surveys;
    }
  }

  renderSortButton() {
    return _.map(sortType, ({ name }) => {
      return (
        <p className="col l3 m4 s12" key={name}>
          <input
            name="sort"
            type="radio"
            id={name}
            onClick={() => {
              this.props.sortSurveys(name);
            }}
          />
          <label htmlFor={name}>{name}</label>
        </p>
      );
    });
  }

  renderSurveys() {
    if (this.props.surveys.length === 0) {
      return (
        <div className="unselectable" style={{ textAlign: "center" }}>
          <h3 className="grey-text text-lighten-3">Survey List is Empty</h3>
          <img
            src={emptyBox}
            alt="empty survey list"
            style={{ margin: "50px 0" }}
          />
        </div>
      );
    }
    return this.sortBy(this.props.surveys, this.props.sort).map(survey => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">
              {survey.title}
              <Modal
                header={`Delete Survey ${survey.title} ?`}
                trigger={
                  <button className="btn-floating red right white-text">
                    <i className="fa fa-trash-o right" />
                  </button>
                }
                actions={
                  <div>
                    <button
                      className="btn modal-action modal-close red darken-2"
                      style={{ margin: "0 5px" }}
                      onClick={() =>
                        this.props.removeSurveys({ surveyId: survey._id })
                      }
                    >
                      remove
                    </button>
                    <button
                      className="btn modal-close grey"
                      style={{ margin: "0 5px" }}
                    >
                      dismiss
                    </button>
                  </div>
                }
              >
                <p>
                  Once you remove a survey, there is no going back. Please be
                  certain.
                </p>
              </Modal>
            </span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="row" style={{ margin: "10px 0 5px 0" }}>
          <div>
            <label style={{ margin: "0 0 0 15px" }}>
              <i className="material-icons">sort</i>Surveys Sort By
            </label>
          </div>
          {this.renderSortButton()}
        </div>
        <div />
        <div
          style={{
            marginBottom: `${
              this.props.surveys.length < 3 && this.props.surveys.length !== 0
                ? 200 * (3 - this.props.surveys.length)
                : 50
            }px`
          }}
        >
          {this.renderSurveys()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ surveys, sort }) {
  return { surveys, sort };
}

export default connect(mapStateToProps, actions)(
  //withRouter(SurveyList)
  SurveyList
);
