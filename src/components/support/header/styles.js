import styled from 'styled-components';

export default (c) => styled(c)`
  header {
    padding: 10px 10px 0px 10px;
    margin-bottom: 40px;
    text-align: center;
  }

  @media (max-width: 425px) {
    header {
      padding: 24px 20px 0;
      text-align: right;
    }
  }

  header .logo {
    float: left;
  }

  header .search-form {
    width: 288px;
    margin: 0 auto;
    display: inline-block;
    position: relative;
  }

  @media (max-width: 425px) {
    header .search-form {
      width: auto;
      display: inline-block;
    }
  }

  header .search-form form {
    transition: .3s ease-in-out;
  }

  @media (max-width: 425px) {
    header .search-form form {
      z-index: 999;
      visibility: hidden;
      opacity: 0;
      position: fixed;
      background: #000;
      width: 100%;
      top: 0;
      height: 100%;
      left: 0;
      padding: 24px;
    }
  }

  @media (max-width: 425px) {
    header .search-form form.open {
      visibility: visible;
      opacity: 1;
    }
  }

  header .search-form input {
    width: 100%;
    height: 32px;
    border-radius: 16px;
    background-color: rgba(255, 255, 255, 0.25);
    outline: none;
    border: none;
    padding: 0 40px 0 20px;
    font-size: 12px;
    font-weight: 500;
    color: #fff;
  }

  @media (max-width: 425px) {
    header .search-form input {
      background: none;
      border-bottom: 1px solid rgba(216, 216, 216, 0.5);
      border-radius: 0;
      padding-left: 25px;
    }
  }

  header .search-form button {
    padding: 0;
    margin: 0;
    background: none;
    border: none;
    outline: none;
  }

  header .search-form .search-movies {
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
  }

  @media (max-width: 425px) {
    header .search-form .search-movies {
      top: 30px;
      right: auto;
      left: 24px;
    }
  }

  header .search-form .close-form {
    display: none;
  }

  @media (max-width: 425px) {
    header .search-form .close-form {
      display: block;
      position: absolute;
      top: 35px;
      right: 24px;
    }
  }

  @media (min-width: 426px) {
    header .search-form .responsive-search {
      display: none;
    }
  }

  header .user {
    float: right;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 425px) {
    header .user {
      float: none;
      display: inline-block;
    }
  }

  header .user figure {
    width: 32px;
    height: 32px;
    display: inline-block;
    margin-right: 5px;
  }

  @media (max-width: 425px) {
    header .user figure {
      margin-right: 0;
      width: 24px;
      height: 24px;
      margin-left: 10px;
    }
  }

  header .user img {
    max-width: 100%;
  }

  header .user .user-name {
    display: inline-block;
  }

  header .user .user-name p {
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    opacity: .75;
    color: #fff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 425px) {
    header .user .user-name {
      display: none;
    }
  }

`
