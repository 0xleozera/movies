import styled from 'styled-components';

export default (c) => styled(c)`
  .wrapper {
    height: 100%;
    padding: 0px 10px 0px 10px
  }

  .wrapper .search, .wrapper .no-results {
    margin: 0 0 16px;
    font-size: 20px;
    opacity: .5;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    font-weight: 600;
  }

  @media (max-width: 425px) {
    .wrapper .search, .wrapper .no-results {
      padding-left: 5px;
    }
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    height: 100%;
    width: 100%;
    margin-left: -15px;
  }

  @media (max-width: 425px) {
    .container {
      margin-left: -5px;
    }
  }

  .container .search, .container .no-results {
    margin-left: 16px;
  }

  .container .poster {
    flex-basis: 156px;
    margin: 0 15px 24px;
    max-height: 230px;
  }

  @media (max-width: 425px) {
    .container .poster {
      flex-basis: 108px;
      margin: 0 5px 10px;
    }
  }
`
