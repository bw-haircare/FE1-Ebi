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
export const Flex = styled.div`
  background: #464159;
  width: 100%;
  display: flex;
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

//Eunice's Stylists- Homep//
export const Button = styled.button`
  background: #ac8daf;
  border-radius: 3px;
  border: none;
  color: #f1d4d4;
  padding: 0.3em 1em;
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

  .city {
    font-size: 0.9em;
  }
`;

export const Wrap = styled.div`
  border-radius: 10px;
  border: 1px solid #707070;
  margin: 40px;
  padding: 10px;
  height: 150px;
  box-shadow: 7px 10px #daccdb;
  column-count: 2;

  a {
    text-decoration: none;
    color: #707070;
  }

  .left {
    width: 30%;
  }

  .right {
    width: unset;
    text-align: left;
    margin-left: unset;

    .stars {
      margin-top: 10px;

      span {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
      }
    }

    h2 {
      color: #707070;
      font-weight: bolder;
      font-size: 1.5 em;
    }

    h3 {
      color: #9f9f9f;
    }

    city {
      font-size: 0.9em;
    }
  }
`;

export const CropImg = styled.div`
  width: 125px;
  height: 125px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
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
      margin-bottom: 10px;
    }
  }

  .left {
    width: 30%;
  }

  .right {
    width: 50%;
    margin-left: 30px;

    .stars {
        margin-top: 15px;

        .dv-star-rating{
            vertical-align: sub;
        }
      }

      span {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    }

  }

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

    button{
      padding: auto;
    }
  }

  .side{
    display: block;

    .portfolio {
    display: grid;
    grid-template-columns: 0fr 0fr;

    .sc-htoDjs.khYaDL{
      margin-left: 20px;
    }
  }

  .address{
    text-align: center;
    margin-top: 20px;
  }
  }

  
`;

//Styling by Jade

//Container
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
  padding-top: 20px;
`;

// Logo

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Logo = styled.img`
  width: 200px;
  height: 100%;
`;

//Dashboard Styles
export const DashNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  margin: 0px auto;
  max-width: 1000px;
  width: 100%;
`;
export const DashLink = styled.a`
  padding: 40px 0px;
`;

//Posts

export const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px auto;
  padding-top: 20px;
  max-width: 1000px;
  width: 100%;
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

  h2 {
    font-size: 26px;
    font-weight: bold;
    padding-bottom: 10px;
  }
`;

export const Descript = styled.p`
  color: grey;
  font-size: 22px;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 120px;
  margin: 40px auto 15px;
`;

//Form Styling

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px auto 0;
  padding-top: 20px;
  max-width: 1000px;
  width: 100%;
`;

export const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

export const PostFormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostLabel = styled.label`
  font-size: 25px;
  margin-top: 10px;
  font-weight: 600;
`;

export const PostInput = styled.input`
  background: #ffdfd5;
  border: none;
  border-radius: 3px;
  width: 100%;
  padding: 15px 20px;
  margin: 10px 0;
`;

export const FormButton = styled.button`
  margin: 40px auto;
  width: 120px;
  background: #ac8daf;
  border: none;
  border-radius: 3px;
  box-shadow: -1px 1px 2px 1px rgba(138, 138, 138, 1);
  color: white;
  font-size: 20px;
  padding: 8px 10px;
  transition: ease-in-out 0.3s;

  &:hover {
    background: #ac8daf;
    color: #fdc8b7;
  }
`;
