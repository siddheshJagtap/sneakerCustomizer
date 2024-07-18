import styled from "styled-components";
interface ShoeStyleProps {
  baseValue?: string;
  logoValue?: string;
  laceValue?: string;
  threadValue?: string;
  soleValue?: string;
  shoeMidValue?: string;
  shoeTongueValue?:string;
}
export const SneakerWrapper = {
  ShoeToe: styled.div<ShoeStyleProps>`
    & {
      left: 16%;
      top: 50%;
      height: 52px;
      width: 148px;
      position: absolute;
      background-color: ${({ baseValue }) => baseValue};
      transform: rotate(349deg);
      border-radius: 105px 5px 0px 30px;
    }

    &:before {
      height: 30px;
      width: 21px;
      top: 48%;
      left: 94%;
      content: "";

      position: absolute;
      background-color: ${({ baseValue }) => baseValue};
      border-radius: 0px 103px 0px 30px;
    }
  `,
  Logo: styled.div<ShoeStyleProps>`
    & {
      height: 18px;
      width: 122px;

      transform: rotate(346deg);
      position: absolute;
      background-color: ${({ logoValue }) => logoValue};
      border-radius: 0px 100px 0px 0px;
      left: 49%;
      top: 51%;
    }

    &:after {
      left: -28px;
      height: 43px;
      width: 33px;
      transform: rotate(2deg);
      content: "";
      position: absolute;
      background-color: ${({ logoValue }) => logoValue};
      border-radius: 67px 0px 0px 38px;
      top: -25px;
    }

    &:before {
      z-index: 1;
      left: -4px;
      height: 27px;
      width: 18px;
      transform: rotate(353deg);
      content: "";
      position: absolute;
      background-color: ${({ baseValue }) => baseValue};
      border-radius: 102px 0px 0px 47px;
      top: -26px;
    }
  `,

  ShoeHeel: styled.div<ShoeStyleProps>`
    & {
      height: 50px;
      width: 108px;
      z-index: -20;

      transform: rotate(356deg);
      position: absolute;
      background-color: ${({ baseValue }) => baseValue};
      border-radius: 68px 12px 23px 0px;
      left: 56%;
      top: 50%;
    }
    &:after {
      height: 44px;
      width: 75px;
      left: 30%;
      top: -72%;
      content: "";
      position: absolute;
      background-color: ${({ baseValue }) => baseValue};
      border-radius: 77px 15px 0px 0px;
    }
    &:before {
      height: 44px;
      width: 96px;
      left: 15%;
      top: -106%;
      content: "";
      position: absolute;
      z-index: 1;
      background-color: rgb(242, 159, 15); //container background
      border-radius: 77px 84px 0px 0px;
      transform: rotate(163deg);
    }
  `,

  LacesLeft: styled.div<ShoeStyleProps>`
    & {
      height: 127px;
      width: 133px;
      transform: rotate(167deg);
      position: absolute;
      background-color: transparent;
      border: 5px solid ${({ laceValue }) => laceValue};
      left: 33%;
      top: 48%;
      border-radius: 58% 0% 0% 0%;
      border-bottom: none;
      border-right: none;
    }

    &:after {
      content: "";
      height: 5px;
      width: 19px;
      position: absolute;
      left: 87%;
      top: -4%;
      background-color: rgb(74, 77, 74);
      border-radius: 40px 40px;
      box-shadow: -232px 263px 0 rgb(74, 77, 74);
    }

    &:before {
      content: "";
      height: 18px;
      width: 4px;
      position: absolute;
      left: -3%;
      top: 87%;
      background-color: rgb(169 174 167);
      border-radius: 40px 40px;
      box-shadow: 1px 26px 0 rgb(169 174 167);
    }
  `,
  LacesRight: styled.div<ShoeStyleProps>`
    & {
      height: 121px;
      width: 132px;
      transform: rotate(162deg);
      position: absolute;
      background-color: transparent;

      border: 5px solid ${({ laceValue }) => laceValue};
      left: 55%;
      top: -2%;
      border-radius: 0% 0% 58% 0%;
      border-left: none;
      border-top: none;
    }
  `,
  Stitching: styled.div<ShoeStyleProps>`
    & {
      height: 3px;
      width: 267px;
      position: absolute;
      background-color: transparent;
      left: 0%;
      border-radius: 50px 50px 50px 50px;
      top: 3%;
      border: 1px dashed ${({ threadValue }) => threadValue};
    }
  `,
  ShoeBase: styled.div<ShoeStyleProps>`
    & {
      height: 33px;
      width: 270px;
      position: absolute;
      transform: translate(-50%, -50%);
      background-color: ${({ soleValue }) => soleValue};
      left: 50%;
      top: 70%;
      border-radius: 4px 5px 15px 20px;
      perspective: 50%;
    }

    &:before {
      height: 10px;
      width: 180px;
      content: "";
      position: absolute;
      transform: translate(-55%, -87%);
      background-color: rgb(62, 58, 58);
      left: 70%;
      border-radius: 100px 25px 20px 20px;
    }

    &:after {
      height: 6px;
      width: 245px;
      content: "";
      position: absolute;
      background-color: rgb(95 94 94);
      left: 5%;
      border-radius: 50px 50px 50px 50px;
      top: 81%;
      box-shadow: -1px 15px 14px black;
    }
  `,
  ShoeMid: styled.div<ShoeStyleProps>`
    & {
      height: 70px;
      width: 138px;
      left: 31%;
      top: 45%;
      z-index: -1;
      transform: rotate(349deg);

      position: absolute;
      background-color: ${({ shoeMidValue }) => shoeMidValue};
      border-radius: 29px 12px 11px 0px;
    }

    &:after {
      height: 44px;
      width: 21px;
      left: 86%;
      top: -19%;
      content: "";
      position: absolute;
      background-color: ${({ shoeTongueValue }) => shoeTongueValue};
      border-radius: 0px 103px 15px 30px;
      transform: rotate(77deg);
      box-shadow: -3px -4px 0px #767070;
    }

    &:before {
      height: 44px;
      width: 21px;
      left: 97%;
      top: 42%;
      content: "";
      position: absolute;
      background-color:${({ shoeTongueValue }) => shoeTongueValue};
      border-radius: 0px 103px 15px 30px;
    }
  `,
};
