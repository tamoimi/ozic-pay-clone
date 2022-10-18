import { atom } from "recoil";

const clientDashBoard = atom({
  key: "clientDashBoard",
  default: {
    referenceDate: "",
    totalPayment: 0,
    expectedDepositAmount: 0, // 입금 예정 정산액
    depositAmount: 0, // 입금 완료 정산액
    numOfPayment: 0,
    numOfPaymentCancel: 0,
    pgFee: 0,
    salesAmount: 0,
    sumOfPayment: 0,
    sumOfPaymentCancel: 0,
    todayDepositAmount: 0,
    isHoliday: false,
    isComplete: false,
    isCurrentMonth: false,
    isOpen: false,
  },
});

export default clientDashBoard;
