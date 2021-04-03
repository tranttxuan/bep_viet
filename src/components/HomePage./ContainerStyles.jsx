import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

export const SliderContainer = styled(motion.div)`
  display: flex;
  flex: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 100%;
  overflow-x: scroll;
  height: 250px;
`;

export const Wrapper = styled.div`
  overflow-x: hidden;
  max-width: 100%;
`;

export const MainContainer = styled.div`
  overflow-x: hidden;
  max-width: 100%;
`;

export const GalleryContainer = styled.div`
  overflow-x: hidden;
  max-width: 100%;
`;

export const PTSansText = styled.text`
  font-family: PT Sans;
  font-weight: normal;
  align-items: center;
  text-align: center;
`;

export const ProductName = styled(PTSansText)`
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 18px;
  display: flex;
  color: whitesmoke;
`;

export const TextContainer = styled.div`
  display: flex;
  margin-top: -28px;
  z-index: 3;
`;

export const ColumnContainer = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  flex-direction: column;
  max-width: 500px;
`;

export const CenterAlignedColumnContainer = styled(ColumnContainer)`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OverLay = styled.div`
  display: flex;
  width: 250px;
  height: 180px;
  background: linear-gradient(
    182.07deg,
    rgba(0, 0, 0, 0) 77.6%,
    rgba(0, 0, 0, 0.75) 97.31%
  );
  position: absolute;
  border-radius: 25px;
`;
