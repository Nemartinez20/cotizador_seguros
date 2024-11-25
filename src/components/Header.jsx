import styled from "@emotion/styled"; //Para importar pqeuete de styled copmponentd

const ContenedorHeader = styled.header`
  margin-top: 20px;
  background-color: #26c6da;
  padding: 10px;
  font-weight: 900;
  color: #ffffff;
`;

const TextoHeader = styled.h1`
  font-size: 38px;
  text-align: center;
`;
export default function Header({ titulo }) {
  return (
    <>
      <ContenedorHeader>
        <TextoHeader>{titulo}</TextoHeader>
      </ContenedorHeader>
    </>
  );
}
