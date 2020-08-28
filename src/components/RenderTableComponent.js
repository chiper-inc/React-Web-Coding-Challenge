import React, { Component } from "react";
import { ButtonGroup, Button } from "reactstrap";
import RenderItem from "./RenderItemComponent";

class RenderTable extends Component {
  constructor(props) {
    super(props);
    this.handleFirstPage = this.handleFirstPage.bind(this);
    this.handleLastPage = this.handleLastPage.bind(this);
    this.handlePrevPage = this.handlePrevPage.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.state = {
      offset: 0,
      data: [],
      perPage: 10,
      currentPage: 1,
    };
  }
  receivedData() {
    const data = this.props.incidents;
    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    const postData = slice.map((incident) => (
      <RenderItem incident={incident} />
    ));
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      postData,
    });
  }

  componentDidMount() {
    this.receivedData();
  }

  handleFirstPage() {
    const selectedPage = 0;
    const offset = selectedPage * this.state.perPage;
    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  }

  handleLastPage() {
    const selectedPage = this.state.pageCount - 1;
    const offset = selectedPage * this.state.perPage;
    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  }
  handlePageClick = (number) => {
    const selectedPage = number - 1;
    const offset = selectedPage * this.state.perPage;
    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };
  handleNextPage() {
    if (this.state.currentPage + 1 >= this.state.pageCount) {
      this.setState({});
    } else {
      const selectedPage = this.state.currentPage + 1;
      const offset = selectedPage * this.state.perPage;
      this.setState(
        {
          currentPage: selectedPage,
          offset: offset,
        },
        () => {
          this.receivedData();
        }
      );
    }
  }
  handlePrevPage() {
    if (this.state.currentPage <= 0) {
      this.setState({});
    } else {
      const selectedPage = this.state.currentPage - 1;
      const offset = selectedPage * this.state.perPage;
      this.setState(
        {
          currentPage: selectedPage,
          offset: offset,
        },
        () => {
          this.receivedData();
        }
      );
    }
  }

  render() {
    let items = [];
    for (let number = 1; number <= this.state.pageCount; number++) {
      items.push(
        <Button
          color="info"
          className="m-1"
          id={number}
          onClick={() => this.handlePageClick(number)}
        >
          {number}
        </Button>
      );
    }
    return (
      <React.Fragment>
        {this.state.postData}
        <div>
          <ButtonGroup>
            <Button
              color="info"
              className="m-1 "
              onClick={this.handleFirstPage}
            >
              &lt;&lt;
            </Button>
            <Button color="info" className="m-1" onClick={this.handlePrevPage}>
              &lt;
            </Button>
            {items}
            <Button color="info" className="m-1" onClick={this.handleNextPage}>
              &gt;
            </Button>
            <Button color="info" className="m-1" onClick={this.handleLastPage}>
              &gt;&gt;
            </Button>
          </ButtonGroup>
        </div>
      </React.Fragment>
    );
  }
}
export default RenderTable;
