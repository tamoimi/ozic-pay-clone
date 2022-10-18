import { atom } from "recoil";

const clientDashboard = atom({
  key: "clientDashboard",
  default: {
    referenceDate: "",
    totalPayment: 0,
    expectedDepositAmount: 0, // 입금 예정 정산액
    depositAmount: 0, // 입금 완료 정산액
    isHoliday: false,
    isComplete: false,
    isCurrentMonth: false,
    isOpen: false,
  },
});

export default clientDashboard