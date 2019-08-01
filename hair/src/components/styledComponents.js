import styled from "styled-components";

export const AppTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #484c7f;
  padding: 20px 0;
  text-align: center;
`;

//Navigtion - Andre
export const Spacing = styled.div`
  padding: 0 22px;
  a {
    text-decoration: none;
    color: #fcc;
    font-size: 22px;
    font-weight: 500;
  }
`;
//#336
export const Flex = styled.div`
  background: #464159;
  width: 100%;
  display: flex;
  flex-flox: row;
  justify-content: center;
  padding: 15px 0;
`;

export const H1 = styled.h1`
  margin-top: 20px;
  font-size: 30px;
  font-weight: bold;
  color: #484c7f;
  text-align: center;
`;

//Container
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
  padding-top: 20px;
`;

//Eunice's Stylists- Homep//
export const Button = styled.button`
  background: #ac8daf;
  border-radius: 3px;
  border: none;
  color: #f1d4d4;
  padding: 0.5em 2em;
  margin: 1em;
`;

export const WrapDiv = styled.div`
  border-radius: 10px;
  border: 1px solid #707070;
  margin: 40px;
  padding: 10px;
  height: 150px;
  box-shadow: 7px 10px #daccdb;
  display: flex;
  flex-direction: row;

  img {
    height: 200px;
    background: salmon;
  }

  h3 {
    color: #9f9f9f;
    line-height: 0;
  }

  a {
    text-decoration: none;
    color: #707070;
  }

  .stars {
    color: #e22424;
  }

  .city {
    font-size: 0.9em;
  }
`;

export const AlignLeft = styled.div`
  position: absolute;
`;

export const AlignRight = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid red;
  margin-left: 300px;
`;

export const CropImg = styled.div`
  width: 130px;
  height: 130px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin-top: 10px;
  margin-left: 10px;
`;

export const CropThumb = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  margin-left: 50px;
  margin-top: 20px;
`;

export const ProfileArticle = styled.div`
  img {
    width: 100px;
  }

  .top-section {
    display: flex;
    margin-bottom: 50px;

    img {
      width: 200px;
      margin: -30px;
    }

    h3 {
      color: #9f9f9f;
      text-transform: none;
    }

    .description {
      margin-top: 10px;
    }
  }

  .left {
    width: 30%;
  }

  .right {
    width: 50%;
    text-align: left;
    margin-left: 20px;
  }

  .bottom-row {
    display: inline-flex;
    margin-top: 30px;
  }

  h3 {
    text-transform: uppercase;
    font-size: 1.6em;
    padding-bottom: 25px;
  }

  .services {
    text-align: left;
    margin-right: 100px;
    width: 300px;
  }

  .portfolio {
    display: grid;
    grid-template-columns: 0fr 0fr;
  }
`;

//Dashboard Styles- Jade

export const DashNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  margin: 0px auto;
  max-width: 1000px;
  width: 100%;
`;
export const DashLink = styled.a`
  font-size: 20px;
  padding: 20px 0px;
`;

export const PostCard = styled.div`
  box-shadow: -2px 7px 11px -3px rgba(173, 173, 173, 0.5);
  margin: 10px 20px 20px;
  width: 260px;
`;

export const PostImage = styled.img`
  background-color: lightgrey;
  height: 180px;
  width: 260px;
  box-sizing: border-box;
`;

export const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding-left: 15px;
`;

export const Descript = styled.p`
  color: grey;
  font-size: 18px;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 120px;
  margin: 40px auto;
`;
