import styled from 'styled-components';

export default (c) => styled(c)`
  .show-loader {
    display: block;
    opacity: 1;
  }

  .do-not-show-loader {
    display: none;
    opacity: 0;
  }

  .loader {
    position: absolute;
    background: #000;
    opacity: .5;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader img {
    animation: spin infinite 1.5s linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(30deg);
    }
  }
`
