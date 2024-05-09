import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";
import video from "../../assets/videos/forweber.mp4";

const Main = () => {
  const { memberId } = useParams();
  const navigate = useNavigate();

  const handleRoutingMyPage = () => {
    navigate(`/member/info/${memberId}`);
  };

  const handleRoutingJoin = () => {
    navigate(`/join`);
  };

  return (
    <MainWrapper>
      <VideoWrapper>
        <ReactPlayer
          url={video}
          playing={true}
          muted={true}
          controls={false}
          loop={true}
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </VideoWrapper>
      <BtnWrapper>
        <Button type="button" onClick={handleRoutingMyPage}>
          내 정보
        </Button>
        <Button type="button" onClick={handleRoutingJoin}>
          회원가입
        </Button>
      </BtnWrapper>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightPurple};
`;

const VideoWrapper = styled.section`
  position: relative;
  height: 18rem;
`;

const BtnWrapper = styled.section`
  display: flex;
  gap: 3rem;
  position: absolute;
  top: 80%;
`;

const Button = styled.button`
  padding: 0.3rem 0.5rem;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;
