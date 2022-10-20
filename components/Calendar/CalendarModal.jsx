import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  styled,
  Table,
  TableBody,
  TableCell,
  TableRow
} from "@mui/material";
import { grey, blue } from "@mui/material/colors";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { addCommas } from "../../pages/libs/Comma";
import clientDashBoard from "../../pages/recoil/atom";

const TitleColumn = styled(TableCell)({
  backgroundColor: grey[200],
  width: "200px",
  textAlign: "right",
  paddingBottom: "8px"
});

const ValueColumn = styled(TableCell)({
  width: "200px",
  textAlign: "right",
  paddingRight: "16px",
  paddingBottom: "8px"
});

const CalendarModal = () => {
  const [selectedCellData, setSelectedCellData] = useRecoilState(clientDashBoard);

  //navigate 나중에..
  const router = useRouter();
  const goToPaymentPage = (selectedDate) => {
    router.push(`/Payments?selectedDate=${selectedDate}`);
  };
  const goToSettlementPage = (selectedDate) => {
    router.push(`/Settlements?selectedDate=${selectedDate}`);
  };

  return (
    <>
      <Dialog open={selectedCellData.isOpen} fullWidth maxWidth="xs">
        <DialogTitle>{selectedCellData.isOpen && selectedCellData.isComplete ? "입금 내역" : "매출 내역"}</DialogTitle>

        <DialogContent dividers={false}>
          {selectedCellData.isOpen && (
            <>
              <Table>
                <TableBody>
                  <TableRow>
                    <TitleColumn>결제건</TitleColumn>
                    <ValueColumn>{addCommas(selectedCellData.numOfPayment)}</ValueColumn>
                  </TableRow>
                  <TableRow>
                    <TitleColumn>취소건</TitleColumn>
                    <ValueColumn>{addCommas(selectedCellData.numOfPaymentCancel)}</ValueColumn>
                  </TableRow>
                  <TableRow>
                    <TitleColumn>결제금액</TitleColumn>
                    <ValueColumn>{addCommas(selectedCellData.numOfPayment)}</ValueColumn>
                  </TableRow>
                  <TableRow>
                    <TitleColumn>취소금액</TitleColumn>
                    <ValueColumn>{addCommas(selectedCellData.numOfPaymentCancel)}</ValueColumn>
                  </TableRow>

                  {selectedCellData?.isComplete ? (
                    <>
                      <TableRow>
                        <TitleColumn>PG수수료</TitleColumn>
                        <ValueColumn>{addCommas(selectedCellData.pgFee)}</ValueColumn>
                      </TableRow>
                      <TableRow>
                        <TitleColumn>당일 정산액</TitleColumn>
                        <ValueColumn>{addCommas(selectedCellData.todayDepositAmount)}</ValueColumn>
                      </TableRow>
                      <TableRow>
                        <TitleColumn>입금 완료 정산액</TitleColumn>
                        <ValueColumn>{addCommas(selectedCellData.depositAmount)}</ValueColumn>
                      </TableRow>
                    </>
                  ) : (
                    <>
                      <TableRow>
                        <TitleColumn>결제 취소금액</TitleColumn>
                        <ValueColumn>{addCommas(selectedCellData.totalPayment)}</ValueColumn>
                      </TableRow>
                    </>
                  )}
                </TableBody>
              </Table>
            </>
          )}
        </DialogContent>

        <DialogActions>
          <Button
            sx={{ background: grey[200] }}
            onClick={() => {
              setSelectedCellData((prev) => ({ ...prev, isOpen: false }));
            }}
          >
            닫기
          </Button>
          <Button
            sx={{
              backgroundColor: blue[500],
              color: "white",
              "&:hover": { color: blue[700], cursor: "pointer" }
            }}
            onClick={() => {
              setSelectedCellData((prev) => ({ ...prev, isOpen: false }));
              if (selectedCellData?.isComplete) {
                goToSettlementPage(selectedCellData.referenceDate);
              } else {
                goToPaymentPage(selectedCellData.referenceDate);
              }
            }}
          >
            자세히 보기
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CalendarModal;
