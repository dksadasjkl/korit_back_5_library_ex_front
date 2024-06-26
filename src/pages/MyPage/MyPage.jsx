/** @jsxImportSource @emotion/react */
import { useMutation, useQuery, useQueryClient } from "react-query";
import * as s from "./style";
import { sendAuthMailRequest } from "../../apis/api/sendAuthMail";
import FullSizeLoader from "../../components/FullSizeLoader/FullSizeLoader";
import { GoCheckCircle } from "react-icons/go";

function MyPage() {
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");

    const sendAuthMailMutation = useMutation({
        mutationKey: "sendAuthMailMutation",
        mutationFn: sendAuthMailRequest,
        retry: 0,
        onSuccess: (response) => {
            if(response.data) {
                alert("메일 전송을 완료하였습니다.")
            }else {
                alert("메일 전송에 실패하였습니다.")
            }
        }
    }); 
    // mutationFn: sendAuthMailRequest 호출 mutate
    const handleSendAuthMailClick = () => {
        sendAuthMailMutation.mutate(); 
    }

    return (
        <>
            {
                sendAuthMailMutation.isLoading 
                ? <FullSizeLoader />
                : <div css={s.layout}>
                    <div css={s.header}>
                        <div css={s.imgBox}>
                            <div css={s.profileImg}>
                                <img src="https://pbs.twimg.com/profile_images/1688763174714245120/htmgYD32_400x400.jpg" alt="" />
                            </div>
                        </div>
                        <div css={s.infoBox}>
                            <div css={s.infoText}>사용자이름: {principalData.data.username}</div>
                            <div css={s.infoText}>이름: {principalData.data.name}</div>
                            <div css={s.eamilBox}>
                                <div css={s.infoText}>이메일: {principalData.data.email}</div>
                                {
                                    principalData.data.authorities
                                    .filter(auth => auth.authority === "ROLE_USER").length === 0
                                    ? <button css={s.infoButton} onClick={handleSendAuthMailClick}>인증하기</button>
                                    : <div css={s.emailCheck}> <GoCheckCircle /> </div>
                                }
                            </div>
                            <div css={s.infoButtons}>
                                <button css={s.infoButton}>정보 수정</button>
                                <button css={s.infoButton}>비밀번호 수정</button>
                            </div>
                        </div>
                    </div>
                    <div css={s.bottom}>

                    </div>
                </div>
            }
        </>
    );
}

export default MyPage;