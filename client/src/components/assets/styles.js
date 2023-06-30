import styled from 'styled-components';

const ModalStyle = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  background-color: rgba(255, 255, 255, 0.7);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  paddding: 5em;
  width: 95%;
  height: 95%;
`;

export {
  ModalStyle,
  ModalContent,
};
