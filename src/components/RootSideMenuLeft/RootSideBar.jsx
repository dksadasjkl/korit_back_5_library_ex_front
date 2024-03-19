/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import { HiMenu } from "react-icons/hi";
import { menuState } from "../../atoms/menuAtom";
import { Link, useNavigate } from "react-router-dom";
import { RiSettings4Line } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";

function RootSideMenuLeft() {
    const [ show, setShow ] = useRecoilState(menuState);
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const [ islogin, setLogout] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLogout(() => principalQueryState.status === "success");
    }, [principalQueryState.status])

    

    const handleCloseClick = () => {
        setShow(() => false);
    }

    return (
        <div css={s.layout(show)} onClick={(e) => e.stopPropagation()}>
            <div css={s.header}>
                <button css={s.menuButton} onClick={handleCloseClick}>
                    <HiMenu />
                </button>
            </div>

            <div css={s.profile}>
            { !islogin 
               ?
               <div css={s.authButtons}>
                    <button onClick={() => navigate("/auth/signin")}>로그인</button>
                    <button onClick={() => navigate("/auth/signup")}>회원가입</button>
                </div>
                :
                <>
                    <div css={s.settings}>
                        <RiSettings4Line />
                    </div>
                    <div css={s.proflieBox}>
                        <div css={s.proflieImg}>
                            <FiUser />
                        </div>
                        <div css={s.usernameAndEmail}>
                            <span>{principalQueryState.data.data.username}</span>
                            <span>{principalQueryState.data.data.email}</span>
                        </div>
                    </div>
                </>
            }
            </div>

            <div css={s.menuList}>
                <Link css={s.menuLink}>
                    도서 검색
                </Link>
            </div>
        </div>
    );
}

export default RootSideMenuLeft;