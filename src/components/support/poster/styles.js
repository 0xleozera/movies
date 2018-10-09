import styled from 'styled-components';

export default (c) => styled(c)`
  .poster {
    position: relative;
  }

  .poster > a {
    color: #fff;
  }

  .poster:hover .movie-name {
    visibility: visible;
    opacity: 1;
  }

  .poster figure {
    overflow: hidden;
    height: 230px;
    background: #000;
  }

  .poster figure img {
    width: 170px;
  }

  @media (max-width: 425px) {
    .poster figure {
      height: 150px;
    }

    .poster figure img {
      width: 100px;
    }
  }

  .poster .movie-name {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
    padding: 40px 16px 30px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: .3s;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
  }
`
