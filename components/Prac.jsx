import { useRecoilState } from "recoil";
import clientDashboard from "../pages/recoil/atom";

export const Prac = () => {
  const [prac, setPrac] = useRecoilState(clientDashboard);
  return (
    <>
      <button
        onClick={() => setPrac((size) => size + 1)}
        style={{ prac }}
      >
        폰트 사이즈 커진다
      </button>
    </>
  );
};
