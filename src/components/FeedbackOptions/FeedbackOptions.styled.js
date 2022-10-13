import styled from "@emotion/styled";

export const List = styled.ul`
display: flex;
list-style: none;
`;

export const Item = styled.li`
  :not(:last-child){
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  border-radius: 10px;
  background-color: #1b2b9b;
  border: none;
  transition: transform 300ms ease-out;
  :hover {
    background-color: #303d9b;
    transform: scale(1.05);
  }
`;