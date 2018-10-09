import styled from 'styled-components';

export default (c) => styled(c)`
  .movie-details {
    display: flex;
    align-items: center;
    margin-bottom: -5px;
    position: relative;
  }

  @media (max-width: 425px) {
  .movie-details {
      flex-wrap: wrap;
      margin: -32px;
    }
  }

  .movie-details .movie-poster {
    float: left;
    height: 100vh;
    margin-right: 40px;
    margin-left: -32px;
    margin-top: -32px;
  }

  .movie-details .movie-poster img {
    height: 100%;
  }

  @media (max-width: 425px) {
    .movie-details .movie-poster {
      float: none;
      margin: 0;
      width: 100%;
    }

    .movie-details .movie-poster img {
      height: auto;
      width: 100%;
    }
  }

  .movie-details .title {
    font-size: 48px;
    font-weight: 800;
    margin: 0;
  }

  .movie-details .details {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
  }

  .movie-details .details span {
    display: inline-block;
    margin-right: 10px;
    border-right: 1px solid #fff;
    padding-right: 10px;
    opacity: .75;
  }

  .movie-details .details span:last-child {
    border-right: none;
    padding-right: 0;
  }

  @media (max-width: 425px) {
    .movie-details .details {
      font-size: 12px;
    }

    .movie-details .details span {
      margin-right: 5px;
      padding-right: 5px;
    }
  }

  .movie-details .rating {
    margin: 16px 0;
    display: flex;
    align-items: center;
  }

  @media (max-width: 425px) {
    .movie-details .rating {
      margin: 20px 0 36px;
    }
  }

  .movie-details .rating img {
    display: inline-block;
  }

  .movie-details .rating span {
    margin-left: 10px;
    opacity: .75;
  }

  .movie-details .synopsis h3 {
    font-weight: 600;
    font-size: 20px;
    opacity: .75;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: 16px;
  }

  .movie-details .synopsis p {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.71;
    opacity: .75;
  }

  .movie-details .back {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
  }

  .movie-details .back .back-icon {
    padding-top: 4px;
    margin-right: 15px;
    opacity: 1;
  }

  .movie-details .back a {
    font-size: 16px;
    font-weight: normal;
    color: #fff;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
    text-decoration: none;
    line-height: 1.14;
    opacity: .75;
  }

  @media (max-width: 425px) {
    .movie-details .back {
      position: initial;
    }

    .movie-details .back .back-icon {
      position: fixed;
      top: 24px;
      right: 24px;
      margin-right: 0;
      padding-top: 0;
    }

    .movie-details .back a:not(.back-icon) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 40px;
      border-radius: 3px;
      background-color: rgba(255, 255, 255, 0.25);
    }
  }

  @media (max-width: 425px) {
    .movie-details .container {
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      padding: 10px 32px 48px;
      margin-top: 50vh;
      height: 50vh;
      display: table;
    }

    .movie-details .container .title {
        font-size: 28px;
    }
  }
`
