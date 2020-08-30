import React from 'react';
import styled from '../../theme';

const PaginatorWrapper = styled.ul`
  list-style-type: none;
  width: 900px;
  margin: 15px auto;
  text-align: center;
  font-weight: bold;

    &::selection {
      background: transparent;
    }

    li {
      display: inline-block;
      height: 25px;
      min-width: 25px;
      padding: 5px;
      margin: 3px;
      border: 1px solid #4996a2;

      &.active {
        background: #c8dbe9;
      }

      &:hover {
        background: #d8ebf9;
        cursor: pointer;
      }

      &::selection {
        background: transparent;
      }
    }
`;

export default class Paginator extends React.Component {
  changePage(page, action) {
    switch (action) {
      case 'prev':
        if (page > 1) page--;
        break;
      case 'next':
        if (page < this.props.totalPages) page++;
        break;
      default:
        break;
    }

    this.props.updatePage(page);
  }

  pageButtons() {
    const elements = [];
    for (let i = 1; i <= this.props.totalPages; i++) {
      elements.push(<li className={this.props.pageNumber === i ? 'active': ''} key={i} onClick={
        async () => {
          await this.setState({currentPage: i});
          this.changePage(this.state.currentPage, '');
        }
      }>{i}</li>);
    }
    return elements;
  }

  render() {
    return (
      <PaginatorWrapper>
        <li onClick={() => this.changePage(1, '')}>&lt;&lt; First</li>
        <li onClick={() => this.changePage(this.props.pageNumber, 'prev')}>&lt; Prev</li>
        {this.pageButtons()}
        <li onClick={() => this.changePage(this.props.pageNumber, 'next')}>Next &gt;</li>
        <li onClick={() => this.changePage(this.props.totalPages, '')}>Last &gt;&gt;</li>
      </PaginatorWrapper>
    )
  }
}
